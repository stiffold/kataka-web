# Nastavení Telegram Chat Widgetu

## Krok 1: Vytvoření Telegram účtu

1. **Stáhněte Telegram** z [telegram.org](https://telegram.org/)
2. **Zaregistrujte se** pomocí vašeho telefonního čísla
3. **Vytvořte uživatelské jméno** (username) - to bude vaše "handle"

## Krok 2: Nastavení uživatelského jména

1. Otevřete Telegram
2. Jděte do **Nastavení** → **Účet**
3. Nastavte **Uživatelské jméno** (např. `dula_katka`)
4. Uložte změny

## Krok 3: Aktualizace kódu

V souboru `src/App.tsx` nahraďte `dula_katka` vaším skutečným uživatelským jménem:

```typescript
<TelegramChat 
  telegramUsername="VASE_UZIVATELSKE_JMENO" 
  phoneNumber="+420736722952"
/>
```

## Krok 4: Testování

1. **Restartujte aplikaci**: `npm start`
2. **Otevřete web** v prohlížeči
3. **Klikněte na chat widget** (modré tlačítko v pravém dolním rohu)
4. **Klikněte na "Napsat na Telegram"**
5. **Mělo by se otevřít** Telegram s vaším profilem

## Funkce Chat Widgetu

### ✅ **Hlavní funkce:**
- **Floating chat tlačítko** - vždy viditelné v pravém dolním rohu
- **Telegram odkaz** - přímé propojení s vaším Telegram účtem
- **Telefonní odkaz** - možnost zavolat přímo
- **Kontaktní formulář** - odkaz na kontaktní stránku

### ✅ **Design:**
- **Moderní vzhled** - gradient barvy, animace
- **Responzivní** - funguje na všech zařízeních
- **Minimalizovatelný** - návštěvníci mohou widget minimalizovat
- **Přívětivé zprávy** - osobní přístup

### ✅ **Uživatelská zkušenost:**
- **Rychlý kontakt** - návštěvníci vás mohou kontaktovat jedním kliknutím
- **Více možností** - Telegram, telefon, formulář
- **Tipy pro uživatele** - užitečné informace

## Výhody Telegram propojení

### 🚀 **Rychlost:**
- **Okamžitá komunikace** - návštěvníci vás kontaktují přímo
- **Push notifikace** - dostanete upozornění na nové zprávy
- **24/7 dostupnost** - můžete odpovídat kdykoliv

### 💬 **Komunikace:**
- **Textové zprávy** - rychlé dotazy a odpovědi
- **Hlasové zprávy** - osobnější komunikace
- **Fotografie** - návštěvníci mohou posílat obrázky
- **Soubory** - dokumenty, plány, atd.

### 📱 **Přístupnost:**
- **Mobilní aplikace** - odpovídáte z telefonu
- **Desktop aplikace** - odpovídáte z počítače
- **Web verze** - odpovídáte z prohlížeče

## Tipy pro používání

### 📋 **Doporučené nastavení:**
1. **Nastavte si notifikace** - abyste nepropásli zprávy
2. **Vytvořte si šablony** - rychlé odpovědi na časté dotazy
3. **Nastavte si status** - "Dostupná" / "Zaneprázdněná"
4. **Připravte si informace** - ceny, dostupnost, atd.

### ⚡ **Rychlé odpovědi:**
- "Děkuji za zájem! Odpovím vám do 30 minut."
- "Momentálně jsem zaneprázdněná, odpovím později."
- "Pro urgentní dotazy volejte prosím na 736 722 952."

## Bezpečnost a soukromí

### 🔒 **Ochrana soukromí:**
- **Telegram je bezpečný** - end-to-end šifrování
- **Můžete blokovat** - nežádoucí uživatele
- **Nastavte si soukromí** - kdo vás může kontaktovat

### 📞 **Alternativy:**
- **Telefon** - pro urgentní dotazy
- **Email** - pro formální komunikaci
- **Kontaktní formulář** - pro detailní dotazy

## Údržba a aktualizace

### 🔄 **Pravidelné kontroly:**
- **Kontrolujte zprávy** - alespoň 2x denně
- **Aktualizujte status** - dostupnost, dovolená
- **Zálohujte důležité zprávy** - pro záznam

### 📈 **Analýza:**
- **Sledujte aktivitu** - kolik lidí vás kontaktuje
- **Měříte dobu odpovědi** - jak rychle odpovídáte
- **Analyzujte dotazy** - nejčastější otázky
