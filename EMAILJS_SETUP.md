# Nastavení EmailJS pro kontaktní formulář

## Krok 1: Registrace na EmailJS
1. Jděte na [emailjs.com](https://www.emailjs.com/)
2. Zaregistrujte se zdarma
3. Přihlaste se do dashboardu

## Krok 2: Vytvoření Email Service
1. V dashboardu klikněte na "Email Services"
2. Klikněte "Add New Service"
3. Vyberte "Gmail" nebo jiný email provider
4. Přihlaste se ke svému Gmail účtu (stara.katerina@gmail.com)
5. Zkopírujte **Service ID** (např. "service_abc123")

## Krok 3: Vytvoření Email Template
1. Klikněte na "Email Templates"
2. Klikněte "Create New Template"
3. Nastavte template:

**Subject:**
```
Nová zpráva z webu - {{from_name}}
```

**Content:**
```html
<h2>Nová zpráva z kontaktního formuláře</h2>

<p><strong>Jméno:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telefon:</strong> {{phone}}</p>
<p><strong>Zájem o službu:</strong> {{service}}</p>

<h3>Zpráva:</h3>
<p>{{message}}</p>

<hr>
<p><em>Zpráva byla odeslána z webu Kateřina Stará - Porodní dula</em></p>
```

4. Uložte template a zkopírujte **Template ID** (např. "template_xyz789")

## Krok 4: Získání Public Key
1. V dashboardu klikněte na "Account" → "API Keys"
2. Zkopírujte **Public Key** (např. "user_def456")

## Krok 5: Aktualizace kódu
V souboru `src/pages/Contact.tsx` nahraďte tyto hodnoty:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',     // ← Nahraďte vaším Service ID
  'YOUR_TEMPLATE_ID',    // ← Nahraďte vaším Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'      // ← Nahraďte vaším Public Key
);
```

## Příklad finálního kódu:
```javascript
await emailjs.send(
  'service_abc123',
  'template_xyz789',
  templateParams,
  'user_def456'
);
```

## Testování
1. Uložte změny v kódu
2. Restartujte aplikaci (`npm start`)
3. Odešlete testovací zprávu z kontaktního formuláře
4. Zkontrolujte, zda vám přišel email

## Poznámky
- EmailJS má zdarma 200 emailů měsíčně
- Pro více emailů je potřeba placený plán
- Všechny zprávy se odesílají na váš email (stara.katerina@gmail.com)
- Formulář automaticky vyčistí pole po úspěšném odeslání
