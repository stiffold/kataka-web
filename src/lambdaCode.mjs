
// index.mjs
import https from 'node:https';

const TELEGRAM_BOT_TOKEN = '8217066315:AAE-xOLrFjTsg8BPwMJDZ1S-nr_-4UdxdiY';
const TELEGRAM_CHAT_ID = '-1002913359484'; // nebo '@tvuj_kanal'

// Funkce pro získání lokace z IP adresy pomocí https modulu
async function getLocationFromIP(sourceIP) {
  try {
    // Použít ipapi.co pro geolokaci (opravený endpoint)
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
    // Fallback na api.db-ip.com (spolehlivý free tier)
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
    // Fallback na ipinfo.io (původní spolehlivá služba)
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
    // Další fallback na ip-api.com (opravený s lepším error handlingem)
    console.log(`Trying ip-api.com for IP: ${sourceIP}`);
    const locationData = await makeHttpsRequest(`https://ip-api.com/json/${sourceIP}?fields=country,city,countryCode`);
    const data = JSON.parse(locationData);

    // Kontrola, že data nejsou prázdná
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

  // Poslední fallback - zkusit získat alespoň zemi z IP adresy
  try {
    console.log(`Trying to determine country from IP range for: ${sourceIP}`);
    const ipParts = sourceIP.split('.');
    if (ipParts.length === 4) {
      // Jednoduchá heuristika pro běžné IP rozsahy
      const firstOctet = parseInt(ipParts[0]);
      if (firstOctet >= 1 && firstOctet <= 126) {
        return 'US: North America';
      } else if (firstOctet >= 128 && firstOctet <= 191) {
        return 'EU: Europe';
      } else if (firstOctet >= 192 && firstOctet <= 223) {
        return 'AS: Asia';
      }
    }
  } catch (error) {
    console.log('⚠️ IP range fallback failed:', error.message);
  }

  // Poslední fallback
  console.log('All IP geolocation services failed, using Unknown');
  return 'Unknown';
}

// Pomocná funkce pro HTTP requesty pomocí https modulu
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

export const handler = async (event) => {
  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : (event.body ?? {});
    const { path } = body;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return resp(500, { error: 'Chybí TELEGRAM_BOT_TOKEN nebo TELEGRAM_CHAT_ID v prostředí' });
    }

    if (!path) {
      return resp(400, { error: 'Missing path in request body' });
    }

    // Získat IP adresu volajícího z Lambda Function URL
    const sourceIP = event.requestContext?.http?.sourceIp;
    console.log(`Request from IP: ${sourceIP}`);

    // Získat lokaci z IP adresy
    let location = 'Unknown';
    if (sourceIP) {
      location = await getLocationFromIP(sourceIP);
    }

    console.log(`Visit tracked - Path: ${path}, Location: ${location}, IP: ${sourceIP}`);

    const message = `🧭 Nový uživatel webu z *${escapeMd(location)}* navštívil stránku _${escapeMd(path)}_`;

    const postData = JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
    });

    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const tgResponse = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        const chunks = [];
        res.on('data', (d) => chunks.push(d));
        res.on('end', () => {
          const body = Buffer.concat(chunks).toString('utf8');
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ ok: true, statusCode: res.statusCode, body });
          } else {
            reject(new Error(`Telegram API ${res.statusCode}: ${body}`));
          }
        });
      });
      req.on('error', reject);
      req.write(postData);
      req.end();
    });

    return resp(200, {
      message: 'Zpráva odeslána na Telegram',
      telegram: tgResponse,
      visitData: {
        path,
        location,
        sourceIP,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Chyba:', error);
    return resp(500, { error: 'Interní chyba serveru', detail: String(error?.message || error) });
  }
};

// Pomocné funkce
function resp(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  };
}

// Telegram Markdown (ne V2) – lehké escapování podtržítek/teček atd., ať se nerozbije formát
function escapeMd(text = '') {
  return String(text).replace(/([_*[\]()~`>#+\-=|{}.!\\])/g, '\\$1');
}
