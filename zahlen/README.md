# Zahlen von 0 bis 100 - Lectie Modulara

## 📁 Structura Fisierelor

```
zahlen/
├── zahlen.html                    # HTML PRINCIPAL (mic, curat)
├── styles.css                     # Tot design-ul
├── theory.js                      # Toata teoria (0-10, 11-20, 21-100)
├── exercises.js                   # Toate exercitiile (Ex 1-5)
├── flashcards.js                  # Flashcards (20 de numere)
├── main.js                        # Functii principale (toggle, check, reset)
├── zahlen-0-100.pdf              # PDF cu teorie + exercitii
├── Zahlen_von_0_-10.mp3          # Audio 0-10
├── Zahlen_von_11_-_20.mp3        # Audio 11-20
└── Zahlen_von_21_-_100.mp3       # Audio 21-100
```

## ✅ Avantaje Structura Modulara

### 🎯 Adaugi Exercitiu NOU (Ex. 6):
1. Deschizi `exercises.js`
2. Adaugi la `exercisesData`:
```javascript
ex6: {
    title: "Übung 6: Titlul",
    questions: [...]
}
```
3. GATA! Nu modifici nimic altceva!

### 🎨 Schimbi CULOAREA verde in albastru:
1. Deschizi `styles.css`
2. Cautare si inlocuire: `#059669` → `#0066cc`
3. GATA!

### 📚 Adaugi VIDEO la teorie:
1. Deschizi `theory.js`
2. Adaugi in `theoryData`:
```javascript
video: {
    title: "Video explicativ",
    url: "link-video.mp4"
}
```
3. GATA!

## 🚀 Cum Uploadezi pe GitHub

1. Creezi folder `zahlen` in repository
2. Uploadezi TOATE fisierele din lista de mai sus
3. Link final: `https://claudiatoth.github.io/zahlen/zahlen.html`

## 🔧 Cum Functioneaza

### Flow-ul aplicatiei:
1. `zahlen.html` se incarca
2. Se incarca `styles.css` (design)
3. Se incarca JS-urile in ordine:
   - `theory.js` → creaza teoria
   - `exercises.js` → creaza exercitiile
   - `flashcards.js` → creaza flashcards
   - `main.js` → adauga functiile de verificare

### Modificari viitoare:

**Vrei sa adaugi un buton NOU in navbar?**
→ Modifici doar `zahlen.html` (sectiunea navbar)

**Vrei sa modifici o intrebare la Ex. 3?**
→ Modifici doar `exercises.js` (ex3 questions)

**Vrei sa adaugi inca 10 flashcards?**
→ Modifici doar `flashcards.js` (flashcardsData array)

**Vrei sa schimbi fontul?**
→ Modifici doar `styles.css` (font-family)

## 📝 Exemple de Modificari Simple

### Exemplu 1: Adauga Exercitiul 6
```javascript
// In exercises.js, adaugi la exercisesData:
ex6: {
    title: "Übung 6: Scrie numerele",
    questions: [
        { letter: 'a', question: 'Scrie 45', options: ['Alege...', 'fünfundvierzig', 'vierundfünfzig'], answer: 'fünfundvierzig' },
        // ... mai multe intrebari
    ]
}

// Si apoi in renderExercises(), schimbi:
const exercises = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5', 'ex6']; // adaugi ex6
```

### Exemplu 2: Schimba culoarea in rosu
```css
/* In styles.css, inlocuiesti: */
#059669 → #dc2626
#10b981 → #ef4444
```

### Exemplu 3: Adauga 5 flashcards noi
```javascript
// In flashcards.js, adaugi in flashcardsData:
{ de: "fünfzig", num: "50", ro: "cincizeci" },
{ de: "achtzig", num: "80", ro: "optzeci" },
// ... etc
```

## 🎉 Beneficii

✅ **Usor de modificat** - modifici doar fisierul relevant
✅ **Usor de debugat** - stii exact unde e fiecare cod
✅ **Reutilizabil** - poti refolosi styles.css la alte lectii
✅ **Scalabil** - poti adauga oricâte exercitii/sectiuni
✅ **Curat** - HTML-ul principal are doar 70 de linii!

## 🆘 Troubleshooting

**Audio nu merge?**
→ Verifica ca fisierele .mp3 sunt in acelasi folder cu zahlen.html

**Exercitiile nu apar?**
→ Verifica consola browser (F12) pentru erori JavaScript

**Design-ul nu se incarca?**
→ Verifica ca styles.css e in acelasi folder

**Rezolvarile nu se deschid?**
→ Verifica ca main.js e incarcat corect

