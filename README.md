# rikatas

A Codewars házi feladataim a Junior Front-End Online Programból, és egy egyszerű weboldal, ami megmutatja, hogyan oldottam meg őket.

- Élő oldal: https://mazsola739.github.io/rikatas/
- Codewars profilom: https://www.codewars.com/users/mazsola39

## Az oldal

Három tabja van:

- **Katák** – ez a főoldal. Az összes feladat gyűjteményenként; a gyűjtemény neve mellett látszik, hogy kötelező házi vagy opcionális volt. Egy katára kattintva kinyílik: látszik a feladat leírása, a megoldásom, és ha van, a refaktorált változat is. Kereshetsz a kata nevére vagy egy metódusra (pl. `map`), és szűrhetsz kyu szerint.
- **Statisztika** – hány kata kész, és kyu szerinti bontás.
- **Hogyan oldottam meg?** – mely JavaScript metódusokat és megoldási módokat használtam a legtöbbször. Egy sorra kattintva a Katák tabon megjelennek azok a katák.

A jobb felső sarokban lévő hold / nap ikonnal lehet váltani a sötét és a világos mód között. A kinézet a Codewars stílusát követi.

## Megnyitás

Az oldal sima HTML, CSS és JavaScript, nem kell hozzá telepíteni semmit: elég duplán kattintani az `index.html`-re, és megnyílik a böngészőben.

## Fájlok

| Fájl | Mire való |
| --- | --- |
| `index.html` | az oldal váza: fejléc, tabok, üres helyek a tartalomnak |
| `style.css` | a kinézet: Codewars színek, kyu címkék, sötét / világos mód |
| `script.js` | kirajzolja a katákat, a statisztikát és a diagramokat |
| `data.js` | az összes kata adata egy `gyujtemenyek` nevű változóban |
| `codewars.svg` | a Codewars logó |

A külső dolgok, amiket az oldal betölt: a Lato betűtípus (Google Fonts) és a [highlight.js](https://highlightjs.org/) a színes kódhoz.

## A megoldások mappái

Minden Codewars gyűjteménynek van egy mappája (pl. `Strange_Strings_8kyu_1`, `Jealous_Jumpers`), azon belül minden katának egy mappa egy `index.js` fájllal:

```js
/*
Description:
... a feladat leírása ...
*/

//My solution

function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

//refactoring

const formatMoney = amount => `$${amount.toFixed(2)}`;
```

A mappanevekből a Windows által nem engedett karaktereket (`? : " \`) kivettem vagy kicseréltem, hogy Windowson is le lehessen tölteni a repót.

## A data.js felépítése

A `data.js`-t a fenti `index.js` fájlokból generáltam. Egy gyűjtemény így néz ki benne:

```js
var gyujtemenyek = [
  {
    name: "Strange Strings",        // a gyűjtemény neve
    url: "https://www.codewars.com/collections/strange-strings-8kyu-1",
    optional: false,                // kötelező házi (false) vagy opcionális (true) volt
    katas: [
      {
        name: "Dollars and Cents",
        kyu: "8 kyu",
        done: true,                 // kész van-e
        description: "...",         // a feladat leírása
        solution: "...",            // az én megoldásom
        refactor: "...",            // a refaktorált változat (ha van)
        file: "https://github.com/mazsola739/rikatas/blob/main/...", // a megoldás a GitHubon
        methods: ["toFixed"],       // milyen metódusokat használtam
        tech: ["arrow function"]    // milyen megoldási módokat használtam
      }
    ]
  }
];
```

## Licenc

A kód [MIT-licencű](LICENSE). A kata-leírások a Codewars és a szerzőik tulajdonában vannak.
