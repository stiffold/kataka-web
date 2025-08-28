# Nastavení Google Analytics 4 pro sledování návštěvnosti

## Krok 1: Vytvoření Google Analytics účtu

1. Jděte na [analytics.google.com](https://analytics.google.com/)
2. Přihlaste se pomocí vašeho Google účtu
3. Klikněte na "Začít měřit"

## Krok 2: Vytvoření datového toku

1. **Nastavení účtu:**
   - Název účtu: "Kateřina Stará - Dula"
   - Nastavení sdílení dat: podle vašich preferencí

2. **Nastavení vlastnosti:**
   - Název vlastnosti: "Katka Web"
   - Časové pásmo: "Praha (GMT+01:00)"
   - Měna: "Česká koruna (CZK)"

3. **Informace o podnikání:**
   - Velikost podnikání: "Malý podnik"
   - Jak plánujete používat Google Analytics: "Sledovat návštěvnost webu"

## Krok 3: Vytvoření datového toku pro web

1. Klikněte na "Vytvořit datový tok"
2. Vyberte "Web"
3. Nastavte:
   - Název datového toku: "Katka Web"
   - URL webu: "https://vase-domena.cz" (nebo localhost pro testování)
   - Název stránky: "Hlavní stránka"
   - Kategorie: "Zdravotnictví"

## Krok 4: Získání měřícího ID

1. Po vytvoření datového toku uvidíte **měřící ID**
2. Vypadá jako: `G-XXXXXXXXXX`
3. Zkopírujte toto ID

## Krok 5: Aktualizace kódu

V souboru `src/App.tsx` nahraďte `G-XXXXXXXXXX` vaším skutečným měřícím ID:

```typescript
<GoogleAnalytics measurementId="G-VASE_SKRUTECNE_ID" />
```

## Krok 6: Testování

1. Restartujte aplikaci: `npm start`
2. Otevřete web v prohlížeči
3. V Google Analytics jděte na "Sestavy" → "Čas reálný"
4. Měli byste vidět aktivitu na vašem webu

## Co Google Analytics sleduje:

✅ **Návštěvnost stránek** - kolik lidí navštívilo každou stránku
✅ **Zdroje návštěvnosti** - odkud přicházejí návštěvníci (Google, sociální sítě, atd.)
✅ **Chování návštěvníků** - jak dlouho zůstávají, které stránky navštěvují
✅ **Zařízení** - mobilní vs. desktop návštěvníci
✅ **Geografické údaje** - odkud návštěvníci přicházejí
✅ **Konverze** - kolik lidí vyplnilo kontaktní formulář

## Důležité poznámky:

- **GDPR compliance** - zvažte přidání cookie banneru
- **Ochrana soukromí** - Google Analytics respektuje nastavení prohlížečů
- **Bezplatné** - Google Analytics 4 je zdarma pro většinu webů
- **Data v reálném čase** - vidíte návštěvnost okamžitě

## Užitečné sestavy:

- **Přehled** - celková návštěvnost
- **Zdroje návštěvnosti** - odkud přicházejí návštěvníci
- **Stránky** - nejnavštěvovanější stránky
- **Návštěvníci** - demografické údaje
- **Chování** - jak se návštěvníci pohybují po webu
