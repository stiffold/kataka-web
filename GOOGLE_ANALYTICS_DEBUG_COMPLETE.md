# 🔧 Kompletní Google Analytics Debugging

## 🚨 **Problém: Google Analytics nefunguje**

### **1. Zkontrolujte Console (F12 → Console)**

**✅ Správné zprávy:**
```
✅ Google Analytics initialized with ID: G-XXXXXXXXXX
📍 Current page: /
📊 Pageview sent: /
```

**❌ Chybové zprávy:**
```
⚠️ Google Analytics gtag není načtený, čekám...
❌ Google Analytics initialization error: [error]
```

### **2. Zkontrolujte Network tab (F12 → Network)**

**Hledejte požadavky:**
- `google-analytics.com`
- `googletagmanager.com`
- **Status musí být 200 OK**

**Pokud vidíte 404:**
- Measurement ID je špatné
- Stream neexistuje

### **3. Zkontrolujte Google Analytics nastavení**

**V Google Analytics:**
1. **Admin** → **Data Streams** → **Web**
2. **Klikněte na váš stream**
3. **Zkopírujte Measurement ID**
4. **Zkontrolujte Stream URL** - musí odpovídat vaší doméně

### **4. Aktualizujte Measurement ID**

**V souborech:**
- `public/index.html` - řádek 15
- `src/App.tsx` - řádek 22

**Změňte:**
```javascript
// Z:
gtag('config', 'G-VCSS8B6PYR');

// Na:
gtag('config', 'VAŠE-SPRÁVNÉ-ID');
```

### **5. Test na různých doménách**

**Zkuste:**
- `localhost:3000`
- `127.0.0.1:3000`
- `dula-katka.cz`
- `www.dula-katka.cz`

### **6. Ad Blocker a Privacy Extensions**

**Vypněte dočasně:**
- Ad Blocker
- uBlock Origin
- Privacy Badger
- Brave Shields
- Ghostery

### **7. Zkontrolujte Data Stream nastavení**

**V Google Analytics:**
- **Stream URL** musí být `https://dula-katka.cz`
- **Stream name** může být `Dula Katka Website`
- **Measurement ID** musí začínat `G-`

### **8. Vytvořte nový Data Stream**

**Pokud nic nepomůže:**
1. **Admin** → **Data Streams** → **Add Stream**
2. **Web**
3. **Website URL:** `https://dula-katka.cz`
4. **Stream name:** `Dula Katka Website`
5. **Zkopírujte nové Measurement ID**

### **9. Test Real-time Reports**

**V Google Analytics:**
1. **Reports** → **Realtime** → **Overview**
2. **Měli byste vidět aktivitu** během 30 sekund
3. **Pageviews** a **Events**

### **10. Hard Refresh**

**Zkuste:**
- **Ctrl+F5** (Windows)
- **Cmd+Shift+R** (Mac)
- **Vyčistěte cache** prohlížeče

## 🎯 **Očekávaný výsledek:**

1. **Console zprávy** ✅
2. **Network požadavky** ✅
3. **Real-time data** v GA ✅
4. **Pageviews** při navigaci ✅

## 📞 **Pokud stále nefunguje:**

1. **Zkontrolujte správné Measurement ID**
2. **Vypněte Ad Blocker**
3. **Testujte na skutečné doméně**
4. **Vytvořte nový Data Stream**

**Google Analytics by měl fungovat po těchto krocích!** 🔧✨
