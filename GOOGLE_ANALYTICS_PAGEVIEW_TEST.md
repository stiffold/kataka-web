# 📊 Testování Pageviews v Google Analytics

## 🚨 **Problém: Sledují se jen data z hlavní stránky**

### **✅ Co jsem vylepšil:**

1. **Lepší debugging** - více console logů
2. **Page title tracking** - sledování názvů stránek
3. **Alternativní gtag** - záložní metoda
4. **Detailní logy** - vidíte přesně co se děje

## 🧪 **Jak testovat:**

### **1. Otevřete Developer Tools (F12) → Console**

**Navigujte mezi stránkami a sledujte logy:**

```
✅ Google Analytics 4 initialized with ID: G-8PHKSPNTEE
📍 Current location: /
📊 Initial pageview sent: /
🔄 Location changed to: /o-mne
📄 Page title: Kateřina Stará - Porodní dula & Laktační poradkyně
📊 Pageview sent: /o-mne
🎯 Custom event sent for: /o-mne
🔧 Gtag config sent for: /o-mne
```

### **2. Testujte všechny stránky:**

- **Úvod** (`/`)
- **O mně** (`/o-mne`)
- **Služby** (`/sluzby`)
- **Ceník** (`/cenik`)
- **Podpůrná skupinka** (`/podpurna-skupinka`)
- **Kurzy** (`/kurzy`)
- **Kontakt** (`/kontakt`)

### **3. Zkontrolujte Network tab:**

**Hledejte požadavky:**
- `google-analytics.com`
- `googletagmanager.com`
- **Mělo by být více** požadavků při navigaci

### **4. Zkontrolujte Google Analytics:**

1. **Reports** → **Realtime** → **Overview**
2. **Navigujte mezi stránkami**
3. **Měli byste vidět** aktivitu z různých stránek

## 🎯 **Očekávané výsledky:**

### **V Console:**
- ✅ Inicializace GA4
- ✅ Pageview pro každou stránku
- ✅ Custom events
- ✅ Gtag config

### **V Google Analytics:**
- ✅ Real-time data z různých stránek
- ✅ Pageviews z navigace
- ✅ Events z navigace

## 🚨 **Pokud stále nefunguje:**

1. **Hard refresh** (Ctrl+F5)
2. **Zkontrolujte Console** pro chyby
3. **Vypněte Ad Blocker**
4. **Testujte na skutečné doméně**

## 📊 **Co byste měli vidět v GA:**

- **Stránky a obrazovky** - všechny stránky
- **Real-time** - aktivita při navigaci
- **Events** - Navigation events
- **Pageviews** - z různých stránek

**Testujte navigaci mezi stránkami a sledujte Console logy!** 🔍✨
