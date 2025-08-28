# 🔍 Google Analytics Debugging Guide

## ❌ Problém: Žádný traffic v Google Analytics

### **1. Zkontrolujte Console v prohlížeči**

Otevřete **Developer Tools** (F12) a podívejte se na **Console**:

**✅ Správné zprávy:**
```
✅ Google Analytics initialized with ID: G-VCSS8B6PYR
📍 Current page: /
📊 Pageview sent: /
```

**❌ Chybové zprávy:**
```
❌ Neplatné Google Analytics Measurement ID: G-XXXXXXXXXX
❌ Google Analytics initialization error: [error]
```

### **2. Zkontrolujte Network tab**

V **Developer Tools** → **Network** tab:
- Hledejte požadavky na `google-analytics.com` nebo `googletagmanager.com`
- Měly by být **200 OK** status

### **3. Ad Blocker a Privacy Extensions**

**Vypněte dočasně:**
- Ad Blocker
- uBlock Origin
- Privacy Badger
- Ghostery
- Brave Shields

### **4. Zkontrolujte Google Analytics nastavení**

**V Google Analytics:**
1. Jděte na **Admin** → **Data Streams**
2. Klikněte na váš stream
3. Zkontrolujte **Measurement ID**: `G-VCSS8B6PYR`
4. Zkontrolujte **Stream URL** - mělo by být vaše doména

### **5. Test na localhost vs Production**

**Google Analytics může mít problémy s localhost:**
- Testujte na skutečné doméně
- Nebo použijte `localhost:3000` (ne `127.0.0.1`)

### **6. Zkontrolujte Real-time Reports**

**V Google Analytics:**
1. **Reports** → **Realtime** → **Overview**
2. Měli byste vidět aktivitu během 30 sekund
3. Pokud ne, problém je v implementaci

### **7. Alternativní řešení**

**Pokud nic nepomůže:**
1. Vytvořte nový **Data Stream** v GA
2. Získejte nové **Measurement ID**
3. Aktualizujte v `src/App.tsx`

### **8. Test Events**

**V Console byste měli vidět:**
```
📊 Pageview sent: /
📊 Pageview sent: /o-mne
📊 Pageview sent: /sluzby
```

### **9. Časté problémy**

1. **Špatné Measurement ID** - zkontrolujte v GA
2. **Ad Blocker** - vypněte dočasně
3. **Localhost** - testujte na skutečné doméně
4. **HTTPS** - GA preferuje HTTPS
5. **Caching** - vyčistěte cache prohlížeče

### **10. Kontakt**

Pokud problém přetrvává, zkontrolujte:
- Console zprávy
- Network požadavky
- Google Analytics nastavení
- Ad Blocker
