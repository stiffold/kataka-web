import https from 'https';

// Telegram bot token a chat ID - nahraďte vašimi údaji
const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
const TELEGRAM_CHAT_ID = 'YOUR_TELEGRAM_CHAT_ID';

// Funkce pro odeslání zprávy do Telegramu
async function sendTelegramMessage(message) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  const data = JSON.stringify({
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: 'HTML'
  });

  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(responseData));
        } else {
          reject(new Error(`Telegram API error: ${res.statusCode} - ${responseData}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(new Error(`Request failed: ${error.message}`));
    });

    req.write(data);
    req.end();
  });
}

// Funkce pro získání lokace z IP adresy
async function getLocationFromIP(sourceIP) {
  try {
    // Použít ipapi.co pro geolokaci
    console.log(`Trying ipapi.co for IP: ${sourceIP}`);
    const locationData = await makeHttpsRequest(`https://ipapi.co/${sourceIP}/json/`);
    const data = JSON.parse(locationData);
    
    if (data.country_name && data.city) {
      console.log(`ipapi.co success: ${data.country_name}, ${data.city}`);
      return `${data.country_name}: ${data.city}`;
    } else if (data.country_name) {
      console.log(`ipapi.co success: ${data.country_name}`);
      return data.country_name;
    } else if (data.country) {
      console.log(`ipapi.co success: ${data.country}`);
      return data.country;
    }
  } catch (error) {
    console.log('⚠️ ipapi.co failed:', error.message);
  }

  try {
    // Fallback na api.db-ip.com
    console.log(`Trying api.db-ip.com for IP: ${sourceIP}`);
    const locationData = await makeHttpsRequest(`https://api.db-ip.com/v2/free/${sourceIP}`);
    const data = JSON.parse(locationData);
    
    if (data.countryName && data.city) {
      console.log(`api.db-ip.com success: ${data.countryName}, ${data.city}`);
      return `${data.countryName}: ${data.city}`;
    } else if (data.countryName) {
      console.log(`api.db-ip.com success: ${data.countryName}`);
      return data.countryName;
    }
  } catch (error) {
    console.log('⚠️ api.db-ip.com failed:', error.message);
  }

  try {
    // Fallback na ipinfo.io
    console.log(`Trying ipinfo.io for IP: ${sourceIP}`);
    const locationData = await makeHttpsRequest(`https://ipinfo.io/${sourceIP}/json`);
    const data = JSON.parse(locationData);
    
    if (data.country && data.city) {
      console.log(`ipinfo.io success: ${data.country}, ${data.city}`);
      return `${data.country}: ${data.city}`;
    } else if (data.country) {
      console.log(`ipinfo.io success: ${data.country}`);
      return data.country;
    }
  } catch (error) {
    console.log('⚠️ ipinfo.io failed:', error.message);
  }

  try {
    // Další fallback na ip-api.com
    console.log(`Trying ip-api.com for IP: ${sourceIP}`);
    const locationData = await makeHttpsRequest(`https://ip-api.com/json/${sourceIP}?fields=country,city,countryCode`);
    const data = JSON.parse(locationData);
    
    if (data && Object.keys(data).length > 0 && data.country && data.city) {
      console.log(`ip-api.com success: ${data.country}, ${data.city}`);
      return `${data.country}: ${data.city}`;
    } else if (data && data.country) {
      console.log(`ip-api.com success: ${data.country}`);
      return data.country;
    } else {
      throw new Error('Empty or invalid response from ip-api.com');
    }
  } catch (error) {
    console.log('⚠️ ip-api.com failed:', error.message);
  }

  // Poslední fallback
  console.log('All IP geolocation services failed, using Unknown');
  return 'Unknown';
}

// Pomocná funkce pro HTTP requesty
function makeHttpsRequest(url) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Lambda-VisitTracker/1.0',
        'Accept': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const body = Buffer.concat(chunks).toString('utf8');
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(body);
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${body}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(new Error(`Request failed: ${error.message}`));
    });
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    req.end();
  });
}

// Hlavní Lambda handler
export const handler = async (event) => {
  console.log('Event:', JSON.stringify(event, null, 2));

  try {
    // Zpracování CORS preflight requestu
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
        body: ''
      };
    }

    // Parsování těla požadavku
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (error) {
      console.error('Error parsing body:', error);
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
        body: JSON.stringify({ error: 'Invalid JSON body' })
      };
    }

    // Získání IP adresy
    const sourceIP = event.requestContext?.http?.sourceIp || 'Unknown';
    console.log('Source IP:', sourceIP);

    // Rozlišení typu požadavku
    if (body.type === 'contact') {
      // Zpracování kontaktního formuláře
      const { name, email, phone, service, message } = body;
      
      // Formátování zprávy pro Telegram
      const telegramMessage = `
📧 <b>NOVÁ ZPRÁVA Z KONTAKTNÍHO FORMULÁŘE</b>

👤 <b>Jméno:</b> ${name}
📧 <b>Email:</b> ${email}
📞 <b>Telefon:</b> ${phone || 'Neuvedeno'}
🎯 <b>Služba:</b> ${service || 'Neuvedeno'}

💬 <b>Zpráva:</b>
${message}

🌍 <b>Lokace:</b> ${await getLocationFromIP(sourceIP)}
🕐 <b>Čas:</b> ${new Date().toLocaleString('cs-CZ')}
      `.trim();

      await sendTelegramMessage(telegramMessage);

      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
        body: JSON.stringify({
          success: true,
          message: 'Kontaktní formulář byl úspěšně odeslán',
          visitData: {
            type: 'contact',
            name,
            email,
            phone,
            service,
            message,
            location: await getLocationFromIP(sourceIP),
            sourceIP,
            timestamp: new Date().toISOString()
          }
        })
      };

    } else {
      // Zpracování návštěvy stránky (původní funkcionalita)
      const { path } = body;
      const location = await getLocationFromIP(sourceIP);

      // Formátování zprávy pro Telegram
      const telegramMessage = `
🌐 <b>NOVÁ NÁVŠTĚVA WEBU</b>

📍 <b>Stránka:</b> ${path}
🌍 <b>Lokace:</b> ${location}
🕐 <b>Čas:</b> ${new Date().toLocaleString('cs-CZ')}
      `.trim();

      await sendTelegramMessage(telegramMessage);

      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
        body: JSON.stringify({
          success: true,
          message: 'Visit tracked successfully',
          visitData: {
            type: 'visit',
            path,
            location,
            sourceIP,
            timestamp: new Date().toISOString()
          }
        })
      };
    }

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};