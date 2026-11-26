// Ezt a fajlt a repoban levo megoldasokbol generaltam: https://github.com/mazsola739/rikatas
// Minden gyujtemenyben benne vannak a katak: nev, kyu, kesz-e, leiras, megoldas, refaktor.

var gyujtemenyek = [
  {
    "name": "Strange Strings",
    "url": "https://www.codewars.com/collections/strange-strings-8kyu-1",
    "optional": false,
    "katas": [
      {
        "name": "Dollars and Cents",
        "kyu": "8 kyu",
        "done": true,
        "description": "The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have \nvolunteered to create a function that will take a float and return the amount formatting in dollars and cents.\n\n39.99 becomes $39.99\n\nThe rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to \naccount for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).\n\nExamples:\n\n3 needs to become $3.00\n\n3.1 needs to become $3.10\n\nGood luck! Your team knows they can count on you!",
        "solution": "function formatMoney(amount) {\n  return \"$\" + amount.toFixed(2);\n}",
        "refactor": "const formatMoney = amount => `$${amount.toFixed(2)}`;",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Dollars%20and%20Cents/index.js",
        "methods": [
          "toFixed"
        ],
        "tech": [
          "arrow function",
          "template string"
        ]
      },
      {
        "name": "Sum Mixed Array",
        "kyu": "8 kyu",
        "done": true,
        "description": "Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.\n\nReturn your answer as a number.",
        "solution": "function sumMix(x) {\n  return x.map(Number).reduce(function (a, b) {\n    return a + b;\n  });\n}",
        "refactor": "const sumMix = x => x.map(Number).reduce((a, b) => a + b);",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Sum%20Mixed%20Array/index.js",
        "methods": [
          "map",
          "reduce"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Sort and Star",
        "kyu": "8 kyu",
        "done": true,
        "description": "You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars)\nand then return the first value.\n\nThe returned value must be a string, and have \"***\" between each of its letters.\n\nYou should not remove or add elements from/to the array.",
        "solution": "function twoSort(s) {\n  s = s.sort();\n  return s[0].split(\"\").join(\"***\");\n}",
        "refactor": "const twoSort = s => s.sort().shift().split('').join('***')",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Sort%20and%20Star/index.js",
        "methods": [
          "sort",
          "split",
          "join",
          "shift"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Abbreviate a Two Word Name",
        "kyu": "8 kyu",
        "done": true,
        "description": "Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.\n\nThe output should be two capital letters with a dot separating them.\n\nIt should look like this:\n\nSam Harris => S.H\n\nPatrick Feeney => P.F",
        "solution": "function abbrevName(name) {\n  name = name.split(\" \");\n  let firstLetters = name.map((x) => x[0]);\n  return firstLetters.join(\".\").toUpperCase();\n}",
        "refactor": "const abbrevName = name => name.split(' ').map(el => el[0].toUpperCase()).join('.')",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Abbreviate%20a%20Two%20Word%20Name/index.js",
        "methods": [
          "split",
          "map",
          "join",
          "toUpperCase"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Define a card suit",
        "kyu": "8 kyu",
        "done": true,
        "description": "You get any card as an argument. Your task is to return a suit of this card.\n\nOur deck (is preloaded):\n\ndeck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',\n        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',\n        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',\n        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];\n\n('3♣') -> return 'clubs'\n('3♦') -> return 'diamonds'\n('3♥') -> return 'hearts'\n('3♠') -> return 'spades'",
        "solution": "function defineSuit(card) {\n  return card.includes(\"♣\")\n    ? \"clubs\"\n    : card.includes(\"♦\")\n    ? \"diamonds\"\n    : card.includes(\"♥\")\n    ? \"hearts\"\n    : \"spades\";\n}",
        "refactor": "const defineSuit = card => card.includes(\"♣\") ? \"clubs\" : card.includes(\"♦\") ? \"diamonds\": card.includes(\"♥\") ? \"hearts\" : \"spades\";",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Define%20a%20card%20suit/index.js",
        "methods": [
          "includes"
        ],
        "tech": [
          "ternary ( ? : )",
          "arrow function"
        ]
      },
      {
        "name": "Name Shuffler",
        "kyu": "8 kyu",
        "done": true,
        "description": "Write a function that returns a string in which firstname is swapped with last name.\n\nnameShuffler('john McClane'); => \"McClane john\"",
        "solution": "function nameShuffler(str) {\n  return str.split(\" \").reverse().join(\" \");\n}",
        "refactor": "const nameShuffler = str => str.split(' ').reverse().join(' ');",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Name%20Shuffler/index.js",
        "methods": [
          "split",
          "reverse",
          "join"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Stringy Strings",
        "kyu": "8 kyu",
        "done": true,
        "description": "write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.\n\nthe string should start with a 1.\n\na string with size 6 should return :'101010'.\n\nwith size 4 should return : '1010'.\n\nwith size 12 should return : '101010101010'.\n\nThe size will always be positive and will only use whole numbers.",
        "solution": "function stringy(size) {\n  let string = \"\";\n  for (let i = 1; i <= size; i++) {\n    string = string + (i % 2);\n  }\n  return string;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Stringy%20Strings/index.js",
        "methods": [],
        "tech": [
          "for ciklus"
        ]
      },
      {
        "name": "noobCode 01: SUPERSIZE ME.... or rather, this integer!",
        "kyu": "8 kyu",
        "done": true,
        "description": "Write a function that rearranges an integer into its largest possible value.\n\nExample (Input --> Output)\n\n123456 --> 654321\n105 --> 510\n12 --> 21\n\nIf the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.",
        "solution": "function superSize(num) {\n  return (num = parseInt(String(num).split(\"\").sort().reverse().join(\"\"), 10));\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20noobCode%2001%20-%20SUPERSIZE%20ME....%20or%20rather%2C%20this%20integer!/index.js",
        "methods": [
          "split",
          "sort",
          "reverse",
          "join",
          "parseInt",
          "String"
        ],
        "tech": []
      },
      {
        "name": "Multiply",
        "kyu": "8 kyu",
        "done": true,
        "description": "This code does not execute properly. Try to figure out why.",
        "solution": "function multiply(a, b) {\n  return a * b;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Multiply/index.js",
        "methods": [],
        "tech": []
      },
      {
        "name": "Fake Binary",
        "kyu": "8 kyu",
        "done": true,
        "description": "Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.",
        "solution": "function fakeBin(x) {\n  return x.replace(/[01234]/g, 0).replace(/[56789]/g, 1);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Fake%20Binary/index.js",
        "methods": [
          "replace"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "You only need one - Beginner",
        "kyu": "8 kyu",
        "done": true,
        "description": "You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.\n\nArray can contain numbers or strings. X can be either.\n\nReturn true if the array contains the value, false if not.",
        "solution": "function check(a, x) {\n  return a.includes(x);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20You%20only%20need%20one%20-%20Beginner/index.js",
        "methods": [
          "includes"
        ],
        "tech": []
      },
      {
        "name": "Remove String Spaces",
        "kyu": "8 kyu",
        "done": true,
        "description": "Simple, remove the spaces from the string, then return the resultant string.",
        "solution": "function noSpace(x) {\n  return x.replace(/[ ]/g, \"\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Remove%20String%20Spaces/index.js",
        "methods": [
          "replace"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "Remove First and Last Character",
        "kyu": "8 kyu",
        "done": true,
        "description": "It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given \none parameter, the original string. You don't have to worry with strings with less than two characters.",
        "solution": "function removeChar(str) {\n  return str.slice(1, -1);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Remove%20First%20and%20Last%20Character/index.js",
        "methods": [
          "slice"
        ],
        "tech": []
      },
      {
        "name": "Take an Arrow to the knee, Functionally",
        "kyu": "8 kyu",
        "done": true,
        "description": "Arrow style Functions\nCome here to practice the Arrow style functions Not much else to say good luck!\nDetails\n\nYou will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.\nExamples\n\nThese are example of how to convert a number to an ascii Character:\nJavascript => String.fromCharCode(97) // a\nC# => Tools.FromCharCode(97) // a\n\nReference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
        "solution": "var ArrowFunc = function (arr) {\n  return arr.map((el) => String.fromCharCode(el)).join(\"\");\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Take%20an%20Arrow%20to%20the%20knee%2C%20Functionally/index.js",
        "methods": [
          "map",
          "fromCharCode",
          "join"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "UEFA EURO 2016",
        "kyu": "8 kyu",
        "done": true,
        "description": "Finish the uefaEuro2016() function so it return string just like in the examples below:\n\nuefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // \"At match Germany - Ukraine, Germany won!\"\nuefaEuro2016(['Belgium', 'Italy'],[0, 2]) // \"At match Belgium - Italy, Italy won!\"\nuefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // \"At match Portugal - Iceland, teams played draw.\"",
        "solution": "function uefaEuro2016(teams, scores) {\n  return scores[0] === scores[1]\n    ? `At match ${teams[0]} - ${teams[1]}, teams played draw.`\n    : scores[0] > scores[1]\n    ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`\n    : `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20UEFA%20EURO%202016/index.js",
        "methods": [],
        "tech": [
          "ternary ( ? : )",
          "template string"
        ]
      },
      {
        "name": "Polish alphabet",
        "kyu": "8 kyu",
        "done": true,
        "description": "There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.\n\nYour task is to change the letters with diacritics:\n\ną -> a,\nć -> c,\nę -> e,\nł -> l,\nń -> n,\nó -> o,\nś -> s,\nź -> z,\nż -> z\n\nand print out the string without the use of the Polish letters.\n\nFor example:\n\n\"Jędrzej Błądziński\"  -->  \"Jedrzej Bladzinski\"",
        "solution": "function correctPolishLetters(string) {\n  return string\n    .normalize(\"NFD\")\n    .replace(/[\\u0300-\\u036f]/g, \"\")\n    .replace(/[\\u0142]/g, \"l\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Polish%20alphabet/index.js",
        "methods": [
          "replace"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "repeatIt",
        "kyu": "8 kyu",
        "done": true,
        "description": "Create a function that takes a string and an integer (n).\n\nThe function should return a string that repeats the input string n number of times.\n\nIf anything other than a string is passed in you should return \"Not a string\"\nExample\n\n\"Hi\", 2 --> \"HiHi\"\n1234, 5 --> \"Not a string\"",
        "solution": "var repeatIt = function (str, n) {\n  return typeof str !== \"string\" ? \"Not a string\" : str.repeat(n);\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20repeatIt/index.js",
        "methods": [
          "repeat"
        ],
        "tech": [
          "ternary ( ? : )"
        ]
      },
      {
        "name": "Vowel remover",
        "kyu": "8 kyu",
        "done": true,
        "description": "Create a function called shortcut to remove all the lowercase vowels in a given string.\nExamples\n\nshortcut(\"codewars\") // --> cdwrs\nshortcut(\"goodbye\")  // --> gdby\n\nDon't worry about uppercase vowels.",
        "solution": "function shortcut(string) {\n  return string.replace(/[aeiou]/gi, \"\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Vowel%20remover/index.js",
        "methods": [
          "replace"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "Well of Ideas - Easy Version",
        "kyu": "8 kyu",
        "done": true,
        "description": "For every good kata idea there seem to be quite a few bad ones!\n\nIn this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, \nreturn 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.",
        "solution": "function well(x) {\n  return !x.includes(\"good\")\n    ? \"Fail!\"\n    : x.filter((item) => item === \"good\").length >= 3\n    ? \"I smell a series!\"\n    : \"Publish!\";\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20Well%20of%20Ideas%20-%20Easy%20Version/index.js",
        "methods": [
          "includes",
          "filter"
        ],
        "tech": [
          "ternary ( ? : )",
          "arrow function"
        ]
      },
      {
        "name": "The Feast of Many Beasts",
        "kyu": "8 kyu",
        "done": true,
        "description": "All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the \nsame letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.\n\nWrite a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is \nallowed to bring the dish to the feast.\n\nAssume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and \nspaces, but these will not appear at the beginning or end of the string. They will not contain numerals.",
        "solution": "function feast(beast, dish) {\n  beast = beast.split(\"\");\n  dish = dish.split(\"\");\n  return (\n    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]\n  );\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Strange_Strings_8kyu_1/8%20kyu%20The%20Feast%20of%20Many%20Beasts/index.js",
        "methods": [
          "split"
        ],
        "tech": []
      }
    ]
  },
  {
    "name": "Functional Fruits",
    "url": "https://www.codewars.com/collections/functional-fruits",
    "optional": true,
    "katas": [
      {
        "name": "Count characters in your string",
        "kyu": "6 kyu",
        "done": true,
        "description": "The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.\n\nWhat if the string is empty? Then the result should be empty object literal, {}.",
        "solution": "const count = (string) =>\n  string.split(\"\").reduce((a, b) => {\n    a[b] = (a[b] || 0) + 1;\n    return a;\n  }, {});",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Functional_Fruits/6%20kyu%20Count%20characters%20in%20your%20string/index.js",
        "methods": [
          "split",
          "reduce"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Your order, please",
        "kyu": "6 kyu",
        "done": true,
        "description": "Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.\n\nNote: Numbers can be from 1 to 9. So 1 will be the first word (not 0).\n\nIf the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.\nExamples\n\n\"is2 Thi1s T4est 3a\"  -->  \"Thi1s is2 3a T4est\"\n\"4of Fo1r pe6ople g3ood th5e the2\"  -->  \"Fo1r the2 g3ood 4of th5e pe6ople\"\n\"\"  -->  \"\"",
        "solution": "function order(words) {\n  return words\n    .split(\" \")\n    .sort((a, b) => a.match(/[0-9]/g) - b.match(/[0-9]/g))\n    .join(\" \");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Functional_Fruits/6%20kyu%20Your%20order%2C%20please/index.js",
        "methods": [
          "split",
          "sort",
          "match",
          "join"
        ],
        "tech": [
          "arrow function",
          "regex"
        ]
      },
      {
        "name": "Sort the odd",
        "kyu": "6 kyu",
        "done": true,
        "description": "Task\n\nYou will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.\nExamples\n\n[7, 1]  =>  [1, 7]\n[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]\n[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]",
        "solution": "function sortArray(array) {\n  let odds = array.filter((el) => el % 2).sort((a, b) => a - b);\n  return array.map((el) => (el % 2 ? odds.shift() : el));\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Functional_Fruits/6%20kyu%20Sort%20the%20odd/index.js",
        "methods": [
          "filter",
          "sort",
          "map",
          "shift"
        ],
        "tech": [
          "ternary ( ? : )",
          "arrow function"
        ]
      },
      {
        "name": "Mexican Wave",
        "kyu": "6 kyu",
        "done": true,
        "description": "Introduction\n\nThe wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved \nin a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full \nheight, the spectator returns to the usual seated position.\n\nThe result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their \nseats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to \ntravel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. \nWhen the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in \nan arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)\n\nTask\n\nIn this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must \nreturn that string in an array where an uppercase letter is a person standing up. \n\nRules\n\n 1.  The input string will always be lower case but maybe empty.\n\n 2.  If the character in the string is whitespace then pass over it as if it was an empty seat\n\nExample\n\nwave(\"hello\") => [\"Hello\", \"hEllo\", \"heLlo\", \"helLo\", \"hellO\"]\n\nGood luck and enjoy!\nKata Series\n\nIf you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.\n\nRank \nMaze Runner\n\nRank \nScooby Doo Puzzle\n\nRank \nDriving License\n\nRank \nConnect 4\n\nRank \nVending Machine\n\nRank \nSnakes and Ladders\n\nRank \nMastermind\n\nRank \nGuess Who?\n\nRank \nAm I safe to drive?\n\nRank \nMexican Wave\n\nRank \nPigs in a Pen\n\nRank \nHungry Hippos\n\nRank \nPlenty of Fish in the Pond\n\nRank \nFruit Machine\n\nRank \nCar Park Escape",
        "solution": "function wave(str) {\n  let arr = (letter, index, array) => {\n    let character = array.slice();\n    character[index] = character[index].toUpperCase();\n    return character.join(\"\");\n  };\n  return str\n    .split(\"\")\n    .map(arr)\n    .filter((space, i) => space[i] !== \" \");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Functional_Fruits/6%20kyu%20Mexican%20Wave/index.js",
        "methods": [
          "slice",
          "toUpperCase",
          "join",
          "split",
          "map",
          "filter"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Replace With Alphabet Position",
        "kyu": "6 kyu",
        "done": true,
        "description": "Welcome.\n\nIn this kata you are required to, given a string, replace every letter with its position in the alphabet.\n\nIf anything in the text isn't a letter, ignore it and don't return it.\n\n\"a\" = 1, \"b\" = 2, etc.\nExample\n\nalphabetPosition(\"The sunset sets at twelve o' clock.\")\n\nShould return \"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11\" (as a string)",
        "solution": "function alphabetPosition(text) {\n  text = text\n    .toLowerCase()\n    .split(\"\")\n    .filter((char) => /[a-z]/.test(char))\n    .map((v) => v.charCodeAt() - 96)\n    .join(\" \");\n  return text;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Functional_Fruits/6%20kyu%20Replace%20With%20Alphabet%20Position/index.js",
        "methods": [
          "toLowerCase",
          "split",
          "filter",
          "test",
          "map",
          "charCodeAt",
          "join"
        ],
        "tech": [
          "arrow function",
          "regex"
        ]
      }
    ]
  },
  {
    "name": "Jealous Jumpers",
    "url": "https://www.codewars.com/collections/jealous-jumpers",
    "optional": false,
    "katas": [
      {
        "name": "Generate range of integers",
        "kyu": "8 kyu",
        "done": true,
        "description": "Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, \nwith the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)\nTask\n\nImplement a function named\n\ngenerateRange(2, 10, 2) // should return array of [2,4,6,8,10]\ngenerateRange(1, 10, 3) // should return array of [1,4,7,10]\n\nNote\n\n    min < max\n    step > 0\n    the range does not HAVE to include max (depending on the step)",
        "solution": "function generateRange(min, max, step) {\n  return Array.from(\n    Array(Math.floor((max - min) / step) + 1),\n    (x, i) => min + i * step\n  );\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Generate%20range%20of%20integers/index.js",
        "methods": [
          "from",
          "Math.floor"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Find the smallest integer in the array",
        "kyu": "8 kyu",
        "done": true,
        "description": "Given an array of integers your solution should find the smallest integer.\n\nFor example:\n\n    Given [34, 15, 88, 2] your solution will return 2\n    Given [34, -345, -1, 100] your solution will return -345\n\nYou can assume, for the purpose of this kata, that the supplied array will not be empty.",
        "solution": "class SmallestIntegerFinder {\n  findSmallestInt(args) {\n    return args.sort(function (a, b) {\n      return a - b;\n    })[0];\n  }\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Find%20the%20smallest%20integer%20in%20the%20array/index.js",
        "methods": [
          "sort"
        ],
        "tech": [
          "class"
        ]
      },
      {
        "name": "The Feast of Many Beasts",
        "kyu": "8 kyu",
        "done": true,
        "description": "All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same \nletters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.\n\nWrite a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed \nto bring the dish to the feast.\n\nAssume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, \nbut these will not appear at the beginning or end of the string. They will not contain numerals.",
        "solution": "function feast(beast, dish) {\n  beast = beast.split(\"\");\n  dish = dish.split(\"\");\n  return (\n    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]\n  );\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20The%20Feast%20of%20Many%20Beasts/index.js",
        "methods": [
          "split"
        ],
        "tech": []
      },
      {
        "name": "Remove First and Last Character",
        "kyu": "8 kyu",
        "done": true,
        "description": "It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. \nYou're given one parameter, the original string. You don't have to worry with strings with less than two characters.",
        "solution": "function removeChar(str) {\n  return str.slice(1, -1);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Remove%20First%20and%20Last%20Character/index.js",
        "methods": [
          "slice"
        ],
        "tech": []
      },
      {
        "name": "Correct the mistakes of the character recognition software",
        "kyu": "8 kyu",
        "done": true,
        "description": "Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.\n\nWhen documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.\n\nYour task is correct the errors in the digitised text. You only have to handle the following mistakes:\n\n    S is misinterpreted as 5\n    O is misinterpreted as 0\n    I is misinterpreted as 1\n\nThe test cases contain numbers only by mistake.",
        "solution": "function correct(string) {\n  return string.replace(/[1]/g, \"I\").replace(/[0]/g, \"O\").replace(/[5]/g, \"S\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Correct%20the%20mistakes%20of%20the%20character%20recognition%20software/index.js",
        "methods": [
          "replace"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "Remove String Spaces",
        "kyu": "8 kyu",
        "done": true,
        "description": "Simple, remove the spaces from the string, then return the resultant string.",
        "solution": "function noSpace(x) {\n  return x.replace(/[ ]/g, \"\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Remove%20String%20Spaces/index.js",
        "methods": [
          "replace"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence",
        "kyu": "8 kyu",
        "done": true,
        "description": "Description:\n\nReplace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.\nExamples\n\nreplace(\"Hi!\") === \"H!!\"\nreplace(\"!Hi! Hi!\") === \"!H!! H!!\"\nreplace(\"aeiou\") === \"!!!!!\"\nreplace(\"ABCDE\") === \"!BCD!\"",
        "solution": "function replace(s) {\n  return s.replace(/[aeiou]/gi, \"!\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Exclamation%20marks%20series%20%2311%20-%20Replace%20all%20vowel%20to%20exclamation%20mark%20in%20the%20sentence/index.js",
        "methods": [
          "replace"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "Convert number to reversed array of digits",
        "kyu": "8 kyu",
        "done": true,
        "description": "Convert number to reversed array of digits\n\nGiven a random non-negative number, you have to return the digits of this number within an array in reverse order.\nExample:\n\n348597 => [7,9,5,8,4,3]",
        "solution": "function digitize(n) {\n  return n\n    .toString()\n    .split(\"\")\n    .reverse()\n    .map((x) => parseInt(x));\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Convert%20number%20to%20reversed%20array%20of%20digits/index.js",
        "methods": [
          "toString",
          "split",
          "reverse",
          "map",
          "parseInt"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Sum of Multiples",
        "kyu": "8 kyu",
        "done": true,
        "description": "Your Job\n\nFind the sum of all multiples of n below m\nKeep in Mind\n\n    n and m are natural numbers (positive integers)\n    m is excluded from the multiples\n\nExamples\n\nsumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20\nsumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30\nsumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860\nsumMul(4, -7)  ==> \"INVALID\"",
        "solution": "function sumMul(n, m) {\n  if (m <= 0 || n <= 0) {\n    return \"INVALID\";\n  } else {\n    let arr = [];\n    for (let i = n; i <= m - 1; i += n) {\n      arr.push(i);\n    }\n    return arr.reduce((a, b) => a + b, 0);\n  }\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Sum%20of%20Multiples/index.js",
        "methods": [
          "push",
          "reduce"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "arrow function"
        ]
      },
      {
        "name": "Hex to Decimal",
        "kyu": "8 kyu",
        "done": true,
        "description": "Complete the function which converts hex number (given as a string) to a decimal number.",
        "solution": "function hexToDec(hexString) {\n  return parseInt(hexString, 16);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Hex%20to%20Decimal/index.js",
        "methods": [
          "parseInt"
        ],
        "tech": []
      },
      {
        "name": "String repeat",
        "kyu": "8 kyu",
        "done": true,
        "description": "Write a function called repeatStr which repeats the given string string exactly n times.\n\nrepeatStr(6, \"I\") // \"IIIIII\"\nrepeatStr(5, \"Hello\") // \"HelloHelloHelloHelloHello\"",
        "solution": "function repeatStr(n, s) {\n  let x = s.repeat(n);\n  return x;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20String%20repeat/index.js",
        "methods": [
          "repeat"
        ],
        "tech": []
      },
      {
        "name": "Beginner - Lost Without a Map",
        "kyu": "8 kyu",
        "done": true,
        "description": "Given an array of integers, return a new array with each value doubled.\n\nFor example:\n\n[1, 2, 3] --> [2, 4, 6]\n\nFor the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.",
        "solution": "function maps(x) {\n  return x.map((el) => el * 2);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Beginner%20-%20Lost%20Without%20a%20Map/index.js",
        "methods": [
          "map"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Kata Example Twist",
        "kyu": "8 kyu",
        "done": true,
        "description": "This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).\n\nAdd the value \"codewars\" to the array websites/Websites 1,000 times.\n\nvar websites = []",
        "solution": "var websites = new Array(1000).fill(\"codewars\");",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Kata%20Example%20Twist/index.js",
        "methods": [
          "fill"
        ],
        "tech": []
      },
      {
        "name": "Jenny's secret message",
        "kyu": "8 kyu",
        "done": true,
        "description": "Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly \ndifferent. She added a special case to her function, but she made a mistake.\n\nCan you help her?",
        "solution": "function greet(name) {\n  return name === \"Johnny\" ? `Hello, my love!` : `Hello, ${name}!`;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Jenny's%20secret%20message/index.js",
        "methods": [],
        "tech": [
          "ternary ( ? : )",
          "template string"
        ]
      },
      {
        "name": "Counting sheep...",
        "kyu": "8 kyu",
        "done": true,
        "description": "Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present \nin the array (true means present).\n\nFor example,\n\n[true,  true,  true,  false,\n  true,  true,  true,  true ,\n  true,  false, true,  false,\n  true,  false, false, true ,\n  true,  true,  true,  true ,\n  false, false, true,  true]\n\nThe correct answer would be 17.\n\nHint: Don't forget to check for bad values like null/undefined",
        "solution": "function countSheeps(arrayOfSheep) {\n  let answer = 0;\n  for (let i = 0; i < arrayOfSheep.length; i++) {\n    if (arrayOfSheep[i] === true) {\n      answer++;\n    }\n  }\n  return answer;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Counting%20sheep/index.js",
        "methods": [],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      },
      {
        "name": "Filling an array (part 1)",
        "kyu": "8 kyu",
        "done": true,
        "description": "We want an array, but not just any old array, an array with contents!\n\nWrite a function that produces an array with the numbers 0 to N-1 in it.\n\nFor example, the following code will result in an array containing the numbers 0 to 4:\n\narr(5) // => [0,1,2,3,4]\n\nNote: The parameter is optional. So you have to give it a default value.",
        "solution": "const arr = (N) => Array.from({ length: N }, (_, i) => i);",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Filling%20an%20array%20(part%201)/index.js",
        "methods": [
          "from"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Short Long Short",
        "kyu": "8 kyu",
        "done": true,
        "description": "Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on \nthe inside. The strings will not be the same length, but they may be empty ( length 0 ).\n\nFor example:\n\nsolution(\"1\", \"22\") // returns \"1221\"\nsolution(\"22\", \"1\") // returns \"1221\"",
        "solution": "function solution(a, b) {\n  return a.length < b.length ? a + b + a : b + a + b;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Short%20Long%20Short/index.js",
        "methods": [],
        "tech": [
          "ternary ( ? : )"
        ]
      },
      {
        "name": "Add Length",
        "kyu": "8 kyu",
        "done": true,
        "description": "What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?\n\naddLength('apple ban') => [\"apple 5\", \"ban 3\"]\naddLength('you will win') => [\"you 3\", \"will 4\", \"win 3\"]\n\nYour task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .\n\nNote: String will have at least one element; words will always be separated by a space.",
        "solution": "function addLength(str) {\n  return str.split(\" \").map((a, b) => a + \" \" + (b = a.length));\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Add%20Length/index.js",
        "methods": [
          "split",
          "map"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Find numbers which are divisible by given number",
        "kyu": "8 kyu",
        "done": true,
        "description": "Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an \narray of numbers and the second is the divisor.\nExample\n\ndivisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]",
        "solution": "function divisibleBy(numbers, divisor) {\n  return numbers.filter((el) => el % divisor === 0);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Find%20numbers%20which%20are%20divisible%20by%20given%20number/index.js",
        "methods": [
          "filter"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Reversed Words",
        "kyu": "8 kyu",
        "done": true,
        "description": "Complete the solution so that it reverses all of the words within the string passed in.\n\nExample:\n\n\"The greatest victory is that which requires no battle\" --> \"battle no requires which that is victory greatest The\"",
        "solution": "function reverseWords(str) {\n  return str.split(\" \").reverse().join(\" \");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Jealous_Jumpers/8%20kyu%20Reversed%20Words/index.js",
        "methods": [
          "split",
          "reverse",
          "join"
        ],
        "tech": []
      }
    ]
  },
  {
    "name": "Practical Pyramids",
    "url": "https://www.codewars.com/collections/practical-pyramids",
    "optional": true,
    "katas": [
      {
        "name": "Replace With Alphabet Position",
        "kyu": "6 kyu",
        "done": true,
        "description": "Welcome.\n\nIn this kata you are required to, given a string, replace every letter with its position in the alphabet.\n\nIf anything in the text isn't a letter, ignore it and don't return it.\n\n\"a\" = 1, \"b\" = 2, etc.\nExample\n\nalphabetPosition(\"The sunset sets at twelve o' clock.\")\n\nShould return \"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11\" (as a string)",
        "solution": "function alphabetPosition(text) {\n  text = text\n    .toLowerCase()\n    .split(\"\")\n    .filter((char) => /[a-z]/.test(char))\n    .map((v) => v.charCodeAt() - 96)\n    .join(\" \");\n  return text;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Practical_Pyramids/6%20kyu%20Replace%20With%20Alphabet%20Position/index.js",
        "methods": [
          "toLowerCase",
          "split",
          "filter",
          "test",
          "map",
          "charCodeAt",
          "join"
        ],
        "tech": [
          "arrow function",
          "regex"
        ]
      },
      {
        "name": "If you can read this...",
        "kyu": "6 kyu",
        "done": true,
        "description": "The idea for this kata came from 9gag today:\n\nThe lyrics to \"Never gonna give you up\" by Rick Astley encoded in the NATO phonetic alphabet\nTask\n\nYou'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).\n\nInput:\n\nIf, you can read?\n\nOutput:\n\nIndia Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?\n\nNote:\n\n    There are preloaded dictionary you can use, named NATO\n    The set of used punctuation is ,.!?.\n    Punctuation should be kept in your return string, but spaces should not.\n    Xray should not have a dash within.\n    Every word and punctuation mark should be seperated by a space ' '.\n    There should be no trailing whitespace",
        "solution": "function to_nato(words) {\n  return words\n    .replace(/\\s/g, \"\")\n    .toLowerCase()\n    .split(\"\")\n    .map((e) => (NATO[e] ? NATO[e] : e))\n    .join(\" \");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Practical_Pyramids/6%20kyu%20If%20you%20can%20read%20this/index.js",
        "methods": [
          "replace",
          "toLowerCase",
          "split",
          "map",
          "join"
        ],
        "tech": [
          "ternary ( ? : )",
          "arrow function",
          "regex"
        ]
      },
      {
        "name": "Regex Password Validation",
        "kyu": "5 kyu",
        "done": true,
        "description": "You need to write regex that will validate a password to make sure it meets the following criteria:\n\n    At least six characters long\n    contains a lowercase letter\n    contains an uppercase letter\n    contains a number\n\nValid passwords will only be alphanumeric characters.",
        "solution": "function validate(password) {\n  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Practical_Pyramids/5%20kyu%20Regex%20Password%20Validation/index.js",
        "methods": [
          "test"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "Parse HTML/CSS Colors",
        "kyu": "6 kyu",
        "done": true,
        "description": "In this kata you parse RGB colors represented by strings. The formats are primarily used in HTML and CSS. Your task is to implement a function \nwhich takes a color as a string and returns the parsed color as a map (see Examples).\nInput:\n\nThe input string represents one of the following:\n\n    6-digit hexadecimal - \"#RRGGBB\"\n    e.g. \"#012345\", \"#789abc\", \"#FFA077\"\n    Each pair of digits represents a value of the channel in hexadecimal: 00 to FF\n\n    3-digit hexadecimal - \"#RGB\"\n    e.g. \"#012\", \"#aaa\", \"#F5A\"\n    Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.\n\n    Preset color name\n    e.g. \"red\", \"BLUE\", \"LimeGreen\"\n    You have to use the predefined map PRESET_COLORS (JavaScript, Python, Ruby), presetColors (Java, C#, Haskell), or preset-colors (Clojure). \n    The keys are the names of preset colors in lower-case and the values are the corresponding colors in 6-digit hexadecimal (same as 1. \"#RRGGBB\").",
        "solution": "function parseHTMLColor(color) {\n  if (!color.match(\"#\")) color = PRESET_COLORS[color.toLowerCase()];\n  color = color.replace(\"#\", \"\");\n  if (color.length < 6) color = color.replace(/(.)/g, \"$1$1\");\n  return {\n    r: parseInt(color.substring(0, 2), 16),\n    g: parseInt(color.substring(2, 4), 16),\n    b: parseInt(color.substring(4, 6), 16)\n  };\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Practical_Pyramids/6%20kyu%20Parse%20HTML%20CSS%20Colors/index.js",
        "methods": [
          "match",
          "toLowerCase",
          "replace",
          "substring",
          "parseInt"
        ],
        "tech": [
          "if / else",
          "regex"
        ]
      },
      {
        "name": "Counting Duplicates",
        "kyu": "6 kyu",
        "done": true,
        "description": "Count the number of Duplicates\n\nWrite a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than \nonce in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.\nExample\n\n\"abcde\" -> 0 # no characters repeats more than once\n\"aabbcde\" -> 2 # 'a' and 'b'\n\"aabBcde\" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)\n\"indivisibility\" -> 1 # 'i' occurs six times\n\"Indivisibilities\" -> 2 # 'i' occurs seven times and 's' occurs twice\n\"aA11\" -> 2 # 'a' and '1'\n\"ABBA\" -> 2 # 'A' and 'B' each occur twice",
        "solution": "function duplicateCount(text) {\n  return (\n    text\n      .toLowerCase()\n      .split(\"\")\n      .sort()\n      .join(\"\")\n      .match(/([^])\\1+/g) || []\n  ).length;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Practical_Pyramids/6%20kyu%20Counting%20Duplicates/index.js",
        "methods": [
          "toLowerCase",
          "split",
          "sort",
          "join",
          "match"
        ],
        "tech": [
          "regex"
        ]
      }
    ]
  },
  {
    "name": "Numerous Nuances",
    "url": "https://www.codewars.com/collections/numerous-nuances",
    "optional": false,
    "katas": [
      {
        "name": "Sleigh Authentication",
        "kyu": "8 kyu",
        "done": true,
        "description": "Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.\n\nYour task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals \"Santa Claus\" and the password is \"Ho Ho Ho!\" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.\n\nExamples:\n\nvar sleigh = new Sleigh();\nsleigh.authenticate(\"Santa Claus\", \"Ho Ho Ho!\"); // must return TRUE\n\nsleigh.authenticate(\"Santa\", \"Ho Ho Ho!\"); // must return FALSE\nsleigh.authenticate(\"Santa Claus\", \"Ho Ho!\"); // must return FALSE\nsleigh.authenticate(\"jhoffner\", \"CodeWars\"); // Nope, even Jake is not allowed to use the sleigh ;)",
        "solution": "function Sleigh() {}\n\nSleigh.prototype.authenticate = function (name, password) {\n  return name === \"Santa Claus\" && password === \"Ho Ho Ho!\";\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Sleigh%20Authentication/index.js",
        "methods": [],
        "tech": [
          "prototype"
        ]
      },
      {
        "name": "Convert boolean values to strings 'Yes' or 'No'.",
        "kyu": "8 kyu",
        "done": true,
        "description": "Complete the method that takes a boolean value and return a \"Yes\" string for true, or a \"No\" string for false.",
        "solution": "/* old solution\nfunction boolToWord( bool ){\n  if(bool !== true) {\n    return 'No'\n  } else {\n    return 'Yes'\n  }\n}\n*/\n\nfunction boolToWord(bool) {\n  return bool !== true ? \"No\" : \"Yes\";\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Convert%20boolean%20values%20to%20strings%20'Yes'%20or%20'No'/index.js",
        "methods": [],
        "tech": [
          "ternary ( ? : )"
        ]
      },
      {
        "name": "Bin to Decimal",
        "kyu": "8 kyu",
        "done": true,
        "description": "Complete the function which converts a binary number (given as a string) to a decimal number.",
        "solution": "function binToDec(bin) {\n  return parseInt(bin, 2);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Bin%20to%20Decimal/index.js",
        "methods": [
          "parseInt"
        ],
        "tech": []
      },
      {
        "name": "Sum of positive",
        "kyu": "8 kyu",
        "done": true,
        "description": "You get an array of numbers, return the sum of all of the positives ones.\n\nExample [1,-4,7,12] => 1 + 7 + 12 = 20\n\nNote: if there is nothing to sum, the sum is default to 0.",
        "solution": "function positiveSum(arr) {\n  return arr.filter((e) => e > 0).reduce((a, b) => a + b, 0);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Sum%20of%20positive/index.js",
        "methods": [
          "filter",
          "reduce"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "CSV representation of array",
        "kyu": "8 kyu",
        "done": true,
        "description": "Create a function that returns the CSV representation of a two-dimensional numeric array.\n\nExample:\n\ninput:\n   [[ 0, 1, 2, 3, 4 ],\n    [ 10,11,12,13,14 ],\n    [ 20,21,22,23,24 ],\n    [ 30,31,32,33,34 ]] \n    \noutput:\n     '0,1,2,3,4\\n'\n    +'10,11,12,13,14\\n'\n    +'20,21,22,23,24\\n'\n    +'30,31,32,33,34'\n\nArray's length > 2.\n\nMore details here: https://en.wikipedia.org/wiki/Comma-separated_values",
        "solution": "function toCsvText(array) {\n  return JSON.stringify(array)\n    .replace(/(],)/g, \"\\n\")\n    .replace(/[\\]\\[]/g, \"\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20CSV%20representation%20of%20array/index.js",
        "methods": [
          "replace"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "String cleaning",
        "kyu": "8 kyu",
        "done": true,
        "description": "Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old \nnovels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random \nplaces in the text. For example:\n\nstringClean('! !') == '! !'\nstringClean('123456789') == ''\nstringClean('This looks5 grea8t!') == 'This looks great!'\n\nYour harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will \ntake in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;\"'.,? all intact.",
        "solution": "function stringClean(s) {\n  return s.replace(/\\d/g, \"\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20String%20cleaning/index.js",
        "methods": [
          "replace"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "Man in the west",
        "kyu": "8 kyu",
        "done": true,
        "description": "A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it \ncontains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.\n\nSo, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.",
        "solution": "function checkTheBucket(bucket) {\n  return bucket.includes(\"gold\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Man%20in%20the%20west/index.js",
        "methods": [
          "includes"
        ],
        "tech": []
      },
      {
        "name": "Return Negative",
        "kyu": "8 kyu",
        "done": true,
        "description": "In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?\n\nExample:\n\nmakeNegative(1); // return -1\nmakeNegative(-5); // return -5\nmakeNegative(0); // return 0\nmakeNegative(0.12); // return -0.12\n\nNotes:\n\n    The number can be negative already, in which case no change is required.\n    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.",
        "solution": "function makeNegative(num) {\n  return num < 0 ? num : num * -1;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Return%20Negative/index.js",
        "methods": [],
        "tech": [
          "ternary ( ? : )"
        ]
      },
      {
        "name": "Array plus array",
        "kyu": "8 kyu",
        "done": true,
        "description": "I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.\n\nP.S. Each array includes only integer numbers. Output is a number too.",
        "solution": "function arrayPlusArray(arr1, arr2) {\n  return arr1.concat(arr2).reduce((a, b) => a + b);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Array%20plus%20array/index.js",
        "methods": [
          "concat",
          "reduce"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Reversed sequence",
        "kyu": "8 kyu",
        "done": true,
        "description": "Build a function that returns an array of integers from n to 1 where n>0.\n\nExample : n=5 --> [5,4,3,2,1]",
        "solution": "const reverseSeq = (n) => {\n  let arr = new Array(n)\n    .fill()\n    .map((x, i) => i + 1)\n    .reverse();\n  return arr;\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Reversed%20sequence/index.js",
        "methods": [
          "fill",
          "map",
          "reverse"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Even or Odd",
        "kyu": "8 kyu",
        "done": true,
        "description": "Create a function (or write a script in Shell) that takes an integer as an argument and returns \"Even\" for even numbers or \"Odd\" for odd numbers.",
        "solution": "function even_or_odd(number) {\n  return number % 2 === 0 ? \"Even\" : \"Odd\";\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Even%20or%20Odd/index.js",
        "methods": [],
        "tech": [
          "ternary ( ? : )"
        ]
      },
      {
        "name": "Do you speak \"English\"?",
        "kyu": "8 kyu",
        "done": true,
        "description": "Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word \"English\".\n\nThe order of characters is important -- a string \"abcEnglishdef\" is correct but \"abcnEglishsef\" is not correct.\n\nUpper or lower case letter does not matter -- \"eNglisH\" is also correct.\n\nReturn value as boolean values, true for the string to contains \"English\", false for it does not.",
        "solution": "function spEng(sentence) {\n  let regex = /english/gi;\n  if (sentence.match(regex) === null) {\n    return false;\n  } else {\n    return true;\n  }\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Do%20you%20speak%20'English'/index.js",
        "methods": [
          "match"
        ],
        "tech": [
          "if / else"
        ]
      },
      {
        "name": "Is integer safe to use?",
        "kyu": "8 kyu",
        "done": true,
        "description": "Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.\n\nSafeInteger(9007199254740990) //true\nSafeInteger(-90) //true\nSafeInteger(9007199254740992) //false",
        "solution": "function SafeInteger(n) {\n  return Number.isSafeInteger(n);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Is%20integer%20safe%20to%20use/index.js",
        "methods": [
          "isSafeInteger"
        ],
        "tech": []
      },
      {
        "name": "Is it even?",
        "kyu": "8 kyu",
        "done": true,
        "description": "In this Kata we are passing a number (n) into a function.\n\nYour code will determine if the number passed is even (or not).\n\nThe function needs to return either a true or false.\n\nNumbers may be positive or negative, integers or floats.\n\nFloats are considered UNeven for this kata.",
        "solution": "function testEven(n) {\n  return n % 2 === 0;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Is%20it%20even/index.js",
        "methods": [],
        "tech": []
      },
      {
        "name": "get character from ASCII Value",
        "kyu": "8 kyu",
        "done": true,
        "description": "Write a function which takes a number and returns the corresponding ASCII char for that value.\n\nExample:\n\nget_char(65) # => 'A'\n\nFor ASCII table, you can refer to http://www.asciitable.com/",
        "solution": "function getChar(c) {\n  return String.fromCharCode(c);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20get%20character%20from%20ASCII%20Value/index.js",
        "methods": [
          "fromCharCode"
        ],
        "tech": []
      },
      {
        "name": "ASCII Total",
        "kyu": "8 kyu",
        "done": true,
        "description": "You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.\n\nexamples:\n\nuniTotal(\"a\") == 97 uniTotal(\"aaa\") == 291",
        "solution": "function uniTotal(str) {\n  let count = 0;\n  for (let i = 0; i < str.length; i++) {\n    count += str.charCodeAt(i);\n  }\n  return count;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20ASCII%20Total/index.js",
        "methods": [
          "charCodeAt"
        ],
        "tech": [
          "for ciklus"
        ]
      },
      {
        "name": "Find the Remainder",
        "kyu": "8 kyu",
        "done": true,
        "description": "Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. \nDivision by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.",
        "solution": "function remainder(a, b) {\n  return a > b ? a % b : b % a;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Find%20the%20Remainder/index.js",
        "methods": [],
        "tech": [
          "ternary ( ? : )"
        ]
      },
      {
        "name": "A function within a function",
        "kyu": "Beta",
        "done": true,
        "description": "Description\n\nGiven an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.\n\nvar three = always(3);\nthree(); // returns 3",
        "solution": "function always(n) {\n  function subAlways() {\n    return n;\n  }\n  return subAlways;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/Beta%20A%20function%20within%20a%20function/index.js",
        "methods": [],
        "tech": []
      },
      {
        "name": "Exclamation marks series #1: Remove a exclamation mark from the end of string",
        "kyu": "8 kyu",
        "done": true,
        "description": "Description:\n\nRemove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.\nExamples\n\nremove(\"Hi!\") === \"Hi\"\nremove(\"Hi!!!\") === \"Hi!!\"\nremove(\"!Hi\") === \"!Hi\"\nremove(\"!Hi!\") === \"!Hi\"\nremove(\"Hi! Hi!\") === \"Hi! Hi\"\nremove(\"Hi\") === \"Hi\"\n\nNote\n\nPlease don't post issue about difficulty or duplicate.",
        "solution": "function remove(s) {\n  return s.charAt(s.length - 1) === \"!\" ? s.slice(0, s.length - 1) : s;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Exclamation%20marks%20series%20%231%20-%20Remove%20a%20exclamation%20mark%20from%20the%20end%20of%20string/index.js",
        "methods": [
          "charAt",
          "slice"
        ],
        "tech": [
          "ternary ( ? : )"
        ]
      },
      {
        "name": "Calculate average",
        "kyu": "8 kyu",
        "done": true,
        "description": "Write a function which calculates the average of the numbers in a given list.\n\nNote: Empty arrays should return 0.",
        "solution": "function find_average(array) {\n  let sum = 0;\n  for (let i = 0; i < array.length; i++) {\n    sum += parseInt(array[i], 10);\n  }\n  return sum / array.length;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Numerous_Nuances/8%20kyu%20Calculate%20average/index.js",
        "methods": [
          "parseInt"
        ],
        "tech": [
          "for ciklus"
        ]
      }
    ]
  },
  {
    "name": "Interesting Ideas",
    "url": "https://www.codewars.com/collections/interesting-ideas-1",
    "optional": true,
    "katas": [
      {
        "name": "Caesar Cipher Helper",
        "kyu": "5 kyu",
        "done": true,
        "description": "",
        "solution": "/*old solution\nvar CaesarCipher = function (shift) {\n  const alphabet = [\n    \"a\",\n    \"b\",\n    \"c\",\n    \"d\",\n    \"e\",\n    \"f\",\n    \"g\",\n    \"h\",\n    \"i\",\n    \"j\",\n    \"k\",\n    \"l\",\n    \"m\",\n    \"n\",\n    \"o\",\n    \"p\",\n    \"q\",\n    \"r\",\n    \"s\",\n    \"t\",\n    \"u\",\n    \"v\",\n    \"w\",\n    \"x\",\n    \"y\",\n    \"z\"\n  ];\n  this.encode = (str) => {\n    return str\n      .toLowerCase()\n      .replace(/[a-z]/g, (v) => {\n        return alphabet[Math.abs((alphabet.indexOf(v) + shift) % 26)];\n      })\n      .toUpperCase();\n  };\n  this.decode = (str) => {\n    return str\n      .toLowerCase()\n      .replace(/[a-z]/g, (v) => {\n        if (alphabet.indexOf(v) - shift < 0)\n          return alphabet[26 + (alphabet.indexOf(v) - shift)];\n        return alphabet[alphabet.indexOf(v) - shift];\n      })\n      .toUpperCase();\n  };\n  return this;\n};\n\n*/\n\nvar CaesarCipher = function (shift) {\n  var a = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n  this.encode = function (str) {\n    return str.replace(/[a-z]/gi, function (s) {\n      return a[(a.indexOf(s.toUpperCase()) + shift) % 26];\n    });\n  };\n  this.decode = function (str) {\n    return str.replace(/[a-z]/gi, function (s) {\n      return a[(a.indexOf(s.toUpperCase()) + 26 - shift) % 26];\n    });\n  };\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Interesting_Ideas/5%20kyu%20Caesar%20Cipher%20Helper/index.js",
        "methods": [
          "replace",
          "indexOf",
          "toUpperCase"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "PaginationHelper",
        "kyu": "5 kyu",
        "done": true,
        "description": "For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class \nhelpful for querying paging information related to an array.\n\nThe class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of \nvalues contained within the collection/array are not relevant.\n\nThe following are some examples of how this class is used:\n\nvar helper = new PaginationHelper(['a','b','c','d','e','f'], 4);\nhelper.pageCount(); //should == 2\nhelper.itemCount(); //should == 6\nhelper.pageItemCount(0); //should == 4\nhelper.pageItemCount(1); // last page - should == 2\nhelper.pageItemCount(2); // should == -1 since the page is invalid\n\n// pageIndex takes an item index and returns the page that it belongs on\nhelper.pageIndex(5); //should == 1 (zero based index)\nhelper.pageIndex(2); //should == 0\nhelper.pageIndex(20); //should == -1\nhelper.pageIndex(-10); //should == -1",
        "solution": "function PaginationHelper(collection, itemsPerPage) {\n  (this.collection = collection), (this.itemsPerPage = itemsPerPage);\n}\n\nPaginationHelper.prototype.itemCount = function () {\n  return this.collection.length;\n};\n\nPaginationHelper.prototype.pageCount = function () {\n  return Math.ceil(this.collection.length / this.itemsPerPage);\n};\n\nPaginationHelper.prototype.pageItemCount = function (pageIndex) {\n  return pageIndex < this.pageCount()\n    ? Math.min(\n        this.itemsPerPage,\n        this.collection.length - pageIndex * this.itemsPerPage\n      )\n    : -1;\n};\n\nPaginationHelper.prototype.pageIndex = function (itemIndex) {\n  return itemIndex < this.collection.length && itemIndex >= 0\n    ? Math.floor(itemIndex / this.itemsPerPage)\n    : -1;\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Interesting_Ideas/5%20kyu%20PaginationHelper/index.js",
        "methods": [
          "Math.ceil",
          "Math.min",
          "Math.floor"
        ],
        "tech": [
          "ternary ( ? : )",
          "prototype"
        ]
      },
      {
        "name": "Lazy Repeater",
        "kyu": "5 kyu",
        "done": true,
        "description": "The makeLooper() function (make_looper in Python) takes a string (of non-zero length) as an argument. It returns a function. The function it \nreturns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.\n\nFor example:\n\nvar abc = makeLooper('abc');\nabc(); // should return 'a' on this first call\nabc(); // should return 'b' on this second call\nabc(); // should return 'c' on this third call\nabc(); // should return 'a' again on this fourth call",
        "solution": "function makeLooper(str) {\n  let i=0;\n  return function() {\n    return str[(i++)%str.length];\n  };\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Interesting_Ideas/5%20kyu%20Lazy%20Repeater/index.js",
        "methods": [],
        "tech": []
      },
      {
        "name": "Vector class",
        "kyu": "5 kyu",
        "done": true,
        "description": "Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:\n\nvar a = new Vector([1, 2, 3]);\nvar b = new Vector([3, 4, 5]);\nvar c = new Vector([5, 6, 7, 8]);\n\na.add(b);      // should return a new Vector([4, 6, 8])\na.subtract(b); // should return a new Vector([-2, -2, -2])\na.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26\na.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)\na.add(c);      // throws an error\n\nIf you try to add, subtract, or dot two vectors with different lengths, you must throw an error!\n\nAlso provide:\n\n    a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')\n    an equals method, to check that two vectors that have the same components are equal\n\nNote: the test cases will utilize the user-provided equals method.",
        "solution": "var Vector = function (components) {\n  this.x = components;\n};\n\nVector.prototype.add = function (b) {\n  var a = this.x;\n  b = b.x;\n  if (a.length !== b.length)\n    throw new TypeError(\"Vectors have different length\");\n  return new Vector(\n    a.map((x, i) => x + b[i]));\n};\n\nVector.prototype.subtract = function (b) {\n  var a = this.x;\n  b = b.x;\n  if (a.length !== b.length)\n    throw new TypeError(\"Vectors have different length\");\n  return new Vector(a.map((x, i)=> x - b[i]));\n};\n\nVector.prototype.dot = function (b) {\n  var a = this.x;\n  b = b.x;\n  if (a.length !== b.length)\n    throw new TypeError(\"Vectors have different length\");\n  return a.reduce((s, x, i) => (s + x * b[i]), 0);\n};\nVector.prototype.equals = function (b) {\n  var a = this.x;\n  b = b.x;\n  if (a.length !== b.length) return false;\n  return a.every((x, i) => x === b[i]);\n};\n\nVector.prototype.norm = function () {\n  var a = this.x;\n  return Math.sqrt(\n    a.reduce((s, x) => s + x * x, 0));\n};\n\nVector.prototype.toString = function () {\n  return \"(\" + this.x.join(\",\") + \")\";\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Interesting_Ideas/5%20kyu%20Vector%20class/index.js",
        "methods": [
          "map",
          "reduce",
          "every",
          "join",
          "Math.sqrt"
        ],
        "tech": [
          "if / else",
          "arrow function",
          "prototype"
        ]
      },
      {
        "name": "Simple Events",
        "kyu": "5 kyu",
        "done": true,
        "description": "Your goal is to write an Event constructor function, which can be used to make event objects.\n\nAn event object should work like this:\n\n    it has a .subscribe() method, which takes a function and stores it as its handler\n    it has an .unsubscribe() method, which takes a function and removes it from its handlers\n    it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments\n\nAs this is an elementary example of events, there are some simplifications:\n\n    all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)\n    you should not worry about the order of handlers' execution\n    the handlers will not attempt to modify an event object (e.g. add or remove handlers)\n    the context of handlers' execution is not important\n    each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again\n\nAlso see an example test fixture for suggested usage",
        "solution": "class Event {\n  constructor() {\n    this.handlers = [];\n  }\n\n  subscribe(func) {\n    this.handlers.push(func);\n  }\n\n  unsubscribe(func) {\n    this.handlers = this.handlers.filter((fun) => fun !== func);\n  }\n\n  emit(...args) {\n    this.handlers.forEach((fun) => fun(...args));\n  }\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Interesting_Ideas/5%20kyu%20Simple%20Events/index.js",
        "methods": [
          "push",
          "filter",
          "forEach",
          "spread (...)"
        ],
        "tech": [
          "arrow function",
          "class"
        ]
      }
    ]
  },
  {
    "name": "Ornamental Objectives",
    "url": "https://www.codewars.com/collections/ornamental-objectives",
    "optional": false,
    "katas": [
      {
        "name": "Number of People in the Bus",
        "kyu": "7 kyu",
        "done": true,
        "description": "Kata\nDocs\nBlog\nKumite\n\n    Forum\n\n    Leaders\n\n    4 kyu\n    893\n\n7 kyu\nNumber of People in the Bus\n74315690% of 6,15317,491 of 53,153aryan-firouzian\nJavaScript\nTrain AgainNext Kata\n\n    Details\n    Solutions\n    Forks (18)\n    Discourse (125)\n    Translations\n\nCollect|\nHow satisfied are you with this kata?\n\n    Very\n    Somewhat\n    None\n\nHide Kata Description\nDescription:\nNumber of people in the bus\n\nThere is a bus moving in the city, and it takes and drop some people in each bus stop.\n\nYou are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people \nget into bus (The first item) and number of people get off the bus (The second item) in a bus stop.\n\nYour task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the \nlast bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D\n\nTake a look on the test cases.\n\nPlease keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.\n\nThe second value in the first integer array is 0, since the bus is empty in the first bus stop.",
        "solution": "var number = function (busStops) {\n  return busStops.reduce((el, [x, y]) => el + x - y, 0);\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/7%20kyu%20-%20Number%20of%20People%20in%20the%20Bus/index.js",
        "methods": [
          "reduce"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Determine offspring sex based on genes XX and XY chromosomes",
        "kyu": "8 kyu",
        "done": true,
        "description": "The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.\n\nThe sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.\n\nDetermine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.\n\nIf the sperm contains the X chromosome, return \"Congratulations! You're going to have a daughter.\"; If the sperm contains the Y chromosome, return \"Congratulations! You're going to have a son.\";",
        "solution": "function chromosomeCheck(sperm) {\n  return `Congratulations! You're going to have a ${\n    sperm.includes(\"Y\") ? \"son.\" : \"daughter.\"\n  }`;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20Determine%20offspring%20sex%20based%20on%20genes%20XX%20and%20XY%20chromosomes/index.js",
        "methods": [
          "includes"
        ],
        "tech": [
          "ternary ( ? : )",
          "template string"
        ]
      },
      {
        "name": "Merge two sorted arrays into one",
        "kyu": "8 kyu",
        "done": true,
        "description": "You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, \nsorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.\n\nYou don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are \nempty, then just return an empty array.\n\nNote: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.\nExamples\n\narr1 = [1, 2, 3, 4, 5];\narr2 = [6, 7, 8, 9, 10];\nmergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\narr3 = [1, 3, 5, 7, 9];\narr4 = [10, 8, 6, 4, 2];\nmergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\narr5 = [1, 3, 5, 7, 9, 11, 12];\narr6 = [1, 2, 3, 4, 5, 10, 12];\nmergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]\n\nHappy coding!",
        "solution": "function mergeArrays(a, b) {\n  return [...new Set(a.concat(b))].sort((a, b) => a - b);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20Merge%20two%20sorted%20arrays%20into%20one/index.js",
        "methods": [
          "concat",
          "sort",
          "Set",
          "spread (...)"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Cat years, Dog years",
        "kyu": "8 kyu",
        "done": true,
        "description": "Kata Task\n\nI have a cat and a dog.\n\nI got them at the same time as kitten/puppy. That was humanYears years ago.\n\nReturn their respective ages now as [humanYears,catYears,dogYears]\n\nNOTES:\n\n    humanYears >= 1\n    humanYears are whole numbers only\n\nCat Years\n\n    15 cat years for first year\n    +9 cat years for second year\n    +4 cat years for each year after that\n\nDog Years\n\n    15 dog years for first year\n    +9 dog years for second year\n    +5 dog years for each year after that\n\nReferences\n\n    http://www.catster.com/cats-101/calculate-cat-age-in-cat-years\n    http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html\n\nIf you liked this Kata there is another related one here",
        "solution": "var humanYearsCatYearsDogYears = function (humanYears) {\n  let catYears = 0;\n  let dogYears = 0;\n  if (humanYears === 1) {\n    catYears = 15;\n    dogYears = 15;\n  } else if (humanYears === 2) {\n    catYears = 15 + 9;\n    dogYears = 15 + 9;\n  } else if (humanYears >= 3) {\n    catYears = 15 + 9 + (humanYears - 2) * 4;\n    dogYears = 15 + 9 + (humanYears - 2) * 5;\n  }\n  return [humanYears, catYears, dogYears];\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20Cat%20years%2C%20Dog%20years/index.js",
        "methods": [],
        "tech": [
          "if / else"
        ]
      },
      {
        "name": "Capitalization and Mutability",
        "kyu": "8 kyu",
        "done": true,
        "description": "Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.\n\nUnfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended \n(i.e. make the first character in the string \"word\" upper case).\n\nDon't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character\nup to 10 characters, but will never be empty.",
        "solution": "function capitalizeWord(word) {\n  let first = word.charAt(0).toUpperCase(),\n    rest = word.slice(1);\n  return first + rest;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20Capitalization%20and%20Mutability/index.js",
        "methods": [
          "charAt",
          "toUpperCase",
          "slice"
        ],
        "tech": []
      },
      {
        "name": "Difference of Volumes of Cuboids",
        "kyu": "8 kyu",
        "done": true,
        "description": "In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive \nintegers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.\n\nFor example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.\n\nYour function will be tested with pre-made examples as well as random ones.\n\nIf you can, try writing it in one line of code.",
        "solution": "function findDifference(a, b) {\n  return Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y));\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20Difference%20of%20Volumes%20of%20Cuboids/index.js",
        "methods": [
          "reduce",
          "Math.abs"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "How good are you really?",
        "kyu": "8 kyu",
        "done": true,
        "description": "There was a test in your class and you passed it. Congratulations!\nBut you're an ambitious person. You want to know if you're better than the average student in your class.\n\nYou receive an array with your peers' test scores. Now calculate the average and compare your score!\n\nReturn True if you're better, else False!\nNote:\n\nYour points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!",
        "solution": "function betterThanAverage(classPoints, yourPoints) {\n  return classPoints.reduce((a, b) => a + b) / classPoints.length < yourPoints;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20How%20good%20are%20you%20really/index.js",
        "methods": [
          "reduce"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "The falling speed of petals",
        "kyu": "8 kyu",
        "done": true,
        "description": "When it's spring Japanese cherries blossom, it's called \"sakura\" and it's admired a lot. The petals start to fall in late April.\n\nSuppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the \nground from a certain branch.\n\nWrite a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the \nground from the same branch.\n\nNotes:\n\n    The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.\n    Pay attention to the data types.\n    If the initial velocity is non-positive, the return value should be 0",
        "solution": "function sakuraFall(v) {\n  return v <= 0 ? 0 : 400 / v;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20The%20falling%20speed%20of%20petals/index.js",
        "methods": [],
        "tech": [
          "ternary ( ? : )"
        ]
      },
      {
        "name": "Simple Fun #352: Reagent Formula",
        "kyu": "8 kyu",
        "done": true,
        "description": "Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.\n\nWe know the rules of confect:\n\nmaterial1 and material2 cannot be selected at the same time\nmaterial3 and material4 cannot be selected at the same time\nmaterial5 and material6 must be selected at the same time\nmaterial7 or  material8 must be selected(at least one, or both)\n\nTask\n\nYou are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the \nformula is valid. Returns true if it's valid, false otherwise.\nExample\n\nFor formula = [1,3,7], The output should be true.\n\nFor formula = [7,1,2,3], The output should be false.\n\nFor formula = [1,3,5,7], The output should be false.\n\nFor formula = [1,5,6,7,3], The output should be true.\n\nFor formula = [5,6,7], The output should be true.\n\nFor formula = [5,6,7,8], The output should be true.\n\nFor formula = [6,7,8], The output should be false.\n\nFor formula = [7,8], The output should be true.\nNote\n\n    All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.\n\n    Happy Coding ^_^",
        "solution": "let isValid = (formula) =>\n  !(formula.includes(1) && formula.includes(2)) &&\n  !(formula.includes(3) && formula.includes(4)) &&\n  formula.includes(5) === formula.includes(6) &&\n  (formula.includes(7) || formula.includes(8));",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20Simple%20Fun%20%23352%20-%20Reagent%20Formula/index.js",
        "methods": [
          "includes"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Who is going to pay for the wall?",
        "kyu": "8 kyu",
        "done": true,
        "description": "Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumph neighborhooet wants to build a \nwall between his house and his neighbor’s, and is trying to get thed association to pay for it. He begins to solicit his neighbors to petition \nto get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can \nonly remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names \nuntil two letters remain, and he can finally read them.\n\nYour code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is \nless than or equal to two, it will return an array containing only the name as is\"",
        "solution": "function whoIsPaying(name){\n return  name.length <= 2 ? [name] : [name, name.substr(0, 2)];\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20Who%20is%20going%20to%20pay%20for%20the%20wall/index.js",
        "methods": [
          "substr"
        ],
        "tech": [
          "ternary ( ? : )"
        ]
      },
      {
        "name": "What's the real floor?",
        "kyu": "8 kyu",
        "done": true,
        "description": "Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).\n\nWrite a function that given a floor in the american system returns the floor in the european system.\n\nWith the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. \nIn case of above 13, they move down by two because there are two omitted numbers below them.\n\nBasements (negatives) stay the same as the universal level.\n\nMore information here\nExamples\n\n1  =>  0 \n0  =>  0\n5  =>  4\n15  =>  13\n-3  =>  -3",
        "solution": "function getRealFloor(n) {\n  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20What's%20the%20real%20floor/index.js",
        "methods": [],
        "tech": [
          "ternary ( ? : )"
        ]
      },
      {
        "name": "A Strange Trip to the Market",
        "kyu": "8 kyu",
        "done": true,
        "description": "You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you \nwouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by \n8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, \n\"How much do people normally tip for something like this?\" The artist looks up. \"Its always gonna be about tree fiddy.\"\n\nIt was then that you realize the musician was a 400 foot tall beast from the paleolithic era. The Loch Ness Monster almost tricked you!\n\nThere are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the paleolithic \nera B.) It will ask you for tree fiddy\n\nSince Nessie is a master of disguise, the only way accurately tell is to look for the phrase \"tree fiddy\". Since you are tired of being \ngrifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.",
        "solution": "function isLockNessMonster(s) {\n  return s.includes(\"tree fiddy\") || s.includes(\"3.50\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20A%20Strange%20Trip%20to%20the%20Market/index.js",
        "methods": [
          "includes"
        ],
        "tech": []
      },
      {
        "name": "Is this my tail?",
        "kyu": "8 kyu",
        "done": true,
        "description": "Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, \nyou must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument \n(body) - otherwise the tail wouldn't fit!\n\nIf the tail is right return true, else return false.\n\nThe arguments will always be strings, and normal letters.\n\nFor Haskell, body has the type of String and tail has the type of Char. For Go, body has type string and tail has type rune.",
        "solution": "function correctTail(body, tail) {\n  return body[body.length - 1] === tail;\n}\n\n/* my old solution\nfunction correctTail(body, tail) {\n  let sub = body.substr(body.length - tail.length);\n  if (sub == tail) {\n    return true;\n  } else {\n    return false;\n  }\n}\n*/",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20Is%20this%20my%20tail/index.js",
        "methods": [],
        "tech": []
      },
      {
        "name": "Collatz Conjecture (3n+1)",
        "kyu": "8 kyu",
        "done": true,
        "description": "The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:\n\n[This is writen in pseudocode]\nif(number is even) number = number / 2\nif(number is odd) number = 3*number + 1\n\n#Task\n\nYour task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.\n\n#Examples\n\nhotpo(1) returns 0\n(1 is already 1)\n\nhotpo(5) returns 5\n5 -> 16 -> 8 -> 4 -> 2 -> 1\n\nhotpo(6) returns 8\n6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1\n\nhotpo(23) returns 15\n23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1\n\n#References\n\n    Collatz conjecture wikipedia page: https://en.wikipedia.org/wiki/Collatz_conjecture",
        "solution": "var hotpo = function (n) {\n  let steps = 0;\n  while (n > 1) {\n    if (n % 2 === 0) {\n      n = n / 2;\n    } else {\n      n = n * 3 + 1;\n    }\n    steps++;\n  }\n  return steps;\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20Collatz%20Conjecture%20(3n%2B1)/index.js",
        "methods": [],
        "tech": [
          "while ciklus",
          "if / else"
        ]
      },
      {
        "name": "Pirates!! Are the Cannons ready!??",
        "kyu": "8 kyu",
        "done": true,
        "description": "Ahoy Matey!\n\nWelcome to the seven seas.\n\nYou are the captain of a pirate ship.\n\nYou are in battle against the royal navy.\n\nYou have cannons at the ready.... or are they?\n\nYour task is to check if the gunners are loaded and ready, if they are: Fire!\n\nIf they aren't ready: Shiver me timbers!\n\nYour gunners for each test case are 4 or less.\n\nWhen you check if they are ready their answers are in a dictionary and will either be: aye or nay\n\nFiring with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)\n\nIf all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!\n\nAlso, check out the new Pirates!! Kata: https://www.codewars.com/kata/57e2d5f473aa6a476b0000fe",
        "solution": "const cannonsReady = (gunners) => {\n  //your solution here\n  console.log(gunners)\n  return Object.values(gunners).includes('nay') ? 'Shiver me timbers!' : 'Fire!';\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Ornamental_Objectives/8%20kyu%20-%20Pirates!!%20Are%20the%20Cannons%20ready!/index.js",
        "methods": [
          "values",
          "includes"
        ],
        "tech": [
          "ternary ( ? : )",
          "arrow function"
        ]
      }
    ]
  },
  {
    "name": "Diverging Dungeons",
    "url": "https://www.codewars.com/collections/diverging-dungeons",
    "optional": false,
    "katas": [
      {
        "name": "Multiple of index",
        "kyu": "8 kyu",
        "done": true,
        "description": "Return a new array consisting of elements which are multiple of their own index in input array (length > 1).\n\nSome cases:\n\n[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]\n\n[68, -1, 1, -7, 10, 10] => [-1, 10]\n\n[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]",
        "solution": "function multipleOfIndex(array) {\n  return array.filter((el, i) => el % i === 0);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20Multiple%20of%20index/index.js",
        "methods": [
          "filter"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Are the numbers in order?",
        "kyu": "7 kyu",
        "done": true,
        "description": "Are the numbers in order?\n\nIn this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. \nAn array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.\n\nFor the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.\n\nNote that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy \nthe condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will \nnot be tested in this Kata - feel free to raise an Issue if you see such a list being tested.\n\nFor example:\n\ninAscOrder([1,2,4,7,19]); // returns true\ninAscOrder([1,2,3,4,5]); // returns true\ninAscOrder([1,6,10,18,2,4,20]); // returns false\ninAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order\n\nN.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.",
        "solution": "function inAscOrder(arr) {\n  for (let i = 0; i < arr.length - 1; i++) {\n    if (arr[i] > arr[i + 1]) {\n      return false;\n    }\n  }\n  return true;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/7%20kyu%20Are%20the%20numbers%20in%20order/index.js",
        "methods": [],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      },
      {
        "name": "Check the exam",
        "kyu": "8 kyu",
        "done": true,
        "description": "The first input array is the key to the correct answers to an exam, like [\"a\", \"a\", \"b\", \"d\"]. The second one contains a student's submitted answers.\n\nThe two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, \n-1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).\n\nIf the score < 0, return 0.\n\nFor example:\n\ncheckExam([\"a\", \"a\", \"b\", \"b\"], [\"a\", \"c\", \"b\", \"d\"]) → 6\ncheckExam([\"a\", \"a\", \"c\", \"b\"], [\"a\", \"a\", \"b\",  \"\"]) → 7\ncheckExam([\"a\", \"a\", \"b\", \"c\"], [\"a\", \"a\", \"b\", \"c\"]) → 16\ncheckExam([\"b\", \"c\", \"b\", \"a\"], [\"\",  \"a\", \"a\", \"c\"]) → 0",
        "solution": "function checkExam(array1, array2) {\n  let sum = 0;\n  for (let i = 0; i < array1.length; i++) {\n    if (array2[i] === \"\") {\n      sum += 0;\n    } else if (array1[i] === array2[i]) {\n      sum += 4;\n    } else if (array1[i] != array2[i]) {\n      sum -= 1;\n    }\n  }\n  return sum < 0 ? 0 : sum;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20Check%20the%20exam/index.js",
        "methods": [],
        "tech": [
          "for ciklus",
          "if / else",
          "ternary ( ? : )"
        ]
      },
      {
        "name": "Who ate the cookie?",
        "kyu": "8 kyu",
        "done": true,
        "description": "For this problem you must create a program that says who ate the last cookie. If the input is a string then \"Zach\" ate the cookie. \nIf the input is a float or an int then \"Monica\" ate the cookie. If the input is anything else \"the dog\" ate the cookie. \nThe way to return the statement is: \"Who ate the last cookie? It was (name)!\"\n\nEx: Input = \"hi\" --> Output = \"Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)\n\nNote: Make sure you return the correct message with correct spaces and punctuation.\n\nPlease leave feedback for this kata. Cheers!",
        "solution": "function cookie(x) {\n  return `Who ate the last cookie? It was ${\n    typeof x === \"string\"\n      ? \"Zach!\"\n      : typeof x === \"number\"\n      ? \"Monica!\"\n      : \"the dog!\"\n  }`;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20Who%20ate%20the%20cookie/index.js",
        "methods": [],
        "tech": [
          "ternary ( ? : )",
          "template string"
        ]
      },
      {
        "name": "Multiplication table for number",
        "kyu": "8 kyu",
        "done": true,
        "description": "Your goal is to return multiplication table for number that is always an integer from 1 to 10.\n\nFor example, a multiplication table (string) for number == 5 looks like below:\n\n1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50\n\nP. S. You can use \\n in string to jump to the next line.\n\nNote: newlines should be added between rows, but there should be no trailing newline at the end.",
        "solution": "function multiTable(number) {\n  return `1 * ${number} = ${1 * number}\n2 * ${number} = ${2 * number}\n3 * ${number} = ${3 * number}\n4 * ${number} = ${4 * number}\n5 * ${number} = ${5 * number}\n6 * ${number} = ${6 * number}\n7 * ${number} = ${7 * number}\n8 * ${number} = ${8 * number}\n9 * ${number} = ${9 * number}\n10 * ${number} = ${10 * number}`;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20Multiplication%20table%20for%20number/index.js",
        "methods": [],
        "tech": [
          "template string"
        ]
      },
      {
        "name": "Calculate Price Excluding VAT",
        "kyu": "8 kyu",
        "done": true,
        "description": "Write a function that calculates the original product price, without VAT.\nExample\n\nIf a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00\n\nThus, if your function receives 230.00 as input, it should return 200.00\n\nNotes:\n\n    VAT is always 15% for the purposes of this Kata.\n    Round the result to 2 decimal places.\n    If null value given then return -1",
        "solution": "function excludingVatPrice(price) {\n  return price === null ? -1 : parseFloat(((price / 115) * 100).toFixed(2));\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20Calculate%20Price%20Excluding%20VAT/index.js",
        "methods": [
          "toFixed",
          "parseFloat"
        ],
        "tech": [
          "ternary ( ? : )"
        ]
      },
      {
        "name": "A wolf in sheep's clothing",
        "kyu": "8 kyu",
        "done": true,
        "description": "Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. \nFortunately, you are good at spotting them.\n\nWarn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:\n\n[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)\n   7      6      5      4      3            2      1\n\nIf the wolf is the closest animal to you, return \"Pls go away and stop eating my sheep\". Otherwise, return \"Oi! Sheep number N! \nYou are about to be eaten by a wolf!\" where N is the sheep's position in the queue.\n\nNote: there will always be exactly one wolf in the array.\nExamples\n\nInput: [\"sheep\", \"sheep\", \"sheep\", \"wolf\", \"sheep\"]\nOutput: \"Oi! Sheep number 1! You are about to be eaten by a wolf!\"\n\nInput: [\"sheep\", \"sheep\", \"wolf\"]\nOutput: \"Pls go away and stop eating my sheep\"",
        "solution": "function warnTheSheep(queue) {\n  queue = queue.reverse();\n  let count = 0;\n  for (let i = 0; queue.length > i; i++) {\n    count++;\n    if (queue[0] === \"wolf\") {\n      return \"Pls go away and stop eating my sheep\";\n    } else if (queue[i] === \"wolf\") {\n      return `Oi! Sheep number ${\n        count - 1\n      }! You are about to be eaten by a wolf!`;\n    }\n  }\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20A%20wolf%20in%20sheep's%20clothing/index.js",
        "methods": [
          "reverse"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "template string"
        ]
      },
      {
        "name": "How many stairs will Suzuki climb in 20 years?",
        "kyu": "8 kyu",
        "done": true,
        "description": "Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others \ndepending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 \nyears and has spent a year marking down his daily progress.\n\nThe sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.\n\n20_year_estimate = one_year_total * 20\n\nYou will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire \nyear so regardless of how it is logged the problem should be simple to solve.\n\nstairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]\n\nMake sure your solution takes into account all of the nesting within the stairs array.\n\nEach weekday in the stairs array is an array.\n\nsunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, \n8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, \n8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]\n\nYour function should return the 20 year estimate of the stairs climbed using the formula above.\n\nPlease also try the other Kata in this series..\n\n    Help Suzuki count his vegetables...\n    Help Suzuki purchase his Tofu!\n    Help Suzuki pack his coal basket!\n    Help Suzuki rake his garden!\n    Suzuki needs help lining up his students!",
        "solution": "function stairsIn20(s) {\n  return (\n    s\n      .map((subarr) =>\n        subarr.reduce((subsum, subitem) => (subsum += subitem), 0)\n      )\n      .reduce((sum, item) => (sum += item), 0) * 20\n  );\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20How%20many%20stairs%20will%20Suzuki%20climb%20in%2020%20years/index.js",
        "methods": [
          "map",
          "reduce"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Total amount of points",
        "kyu": "8 kyu",
        "done": true,
        "description": "Our football team finished the championship. The result of each match look like \"x:y\". Results of all matches are recorded in the collection.\n\nFor example: [\"3:1\", \"2:2\", \"0:1\", ...]\n\nWrite a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:\n\n    if x>y - 3 points\n    if x<y - 0 point\n    if x=y - 1 point\n\nNotes:\n\n    there are 10 matches in the championship\n    0 <= x <= 4\n    0 <= y <= 4",
        "solution": "function points(games) {\n  let num = 0;\n  for (let i = 0; i < games.length; i += 1) {\n    let pointsArray = games[i].split(\":\"),\n      x = parseInt(pointsArray[0]),\n      y = parseInt(pointsArray[1]);\n    if (x > y) {\n      num += 3;\n    } else if (x === y) {\n      num += 1;\n    }\n  }\n  return num;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20Total%20amount%20of%20points/index.js",
        "methods": [
          "split",
          "parseInt"
        ],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      },
      {
        "name": "Tip Calculator",
        "kyu": "8 kyu",
        "done": true,
        "description": "Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.\n\nYou need to consider the following ratings:\n\n    Terrible: tip 0%\n    Poor: tip 5%\n    Good: tip 10%\n    Great: tip 15%\n    Excellent: tip 20%\n\nThe rating is case insensitive (so \"great\" = \"GREAT\"). If an unrecognised rating is received, then you need to return:\n\n    \"Rating not recognised\" in Javascript, Python and Ruby...\n    ...or null in Java\n    ...or -1 in C#\n\nBecause you're a nice person, you always round up the tip, regardless of the service.",
        "solution": "function calculateTip(amount, rating) {\n  let tip;\n  if (rating.toLowerCase() == \"Terrible\".toLowerCase()) {\n    tip = 0;\n  } else if (rating.toLowerCase() == \"Poor\".toLowerCase()) {\n    tip = 5;\n  } else if (rating.toLowerCase() == \"Good\".toLowerCase()) {\n    tip = 10;\n  } else if (rating.toLowerCase() == \"Great\".toLowerCase()) {\n    tip = 15;\n  } else if (rating.toLowerCase() == \"Excellent\".toLowerCase()) {\n    tip = 20;\n  } else {\n    return \"Rating not recognised\";\n  }\n  return Math.ceil((amount * tip) / 100);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20Tip%20Calculator/index.js",
        "methods": [
          "toLowerCase",
          "Math.ceil"
        ],
        "tech": [
          "if / else"
        ]
      },
      {
        "name": "Find Multiples of a Number",
        "kyu": "8 kyu",
        "done": true,
        "description": "In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another \nvalue, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into \nthe function, not consisting of 0. The limit will always be higher than the base.\n\nFor example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.\n\nIf you can, try writing it in only one line of code.",
        "solution": "function findMultiples(integer, limit) {\n  let stop = limit - (limit % integer),\n    start = integer,\n    step = integer;\n  const range = (start, stop, step) =>\n    Array(Math.ceil((stop - start) / step) + 1)\n      .fill(start)\n      .map((x, y) => x + y * step);\n  return range(start, stop, step);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20Find%20Multiples%20of%20a%20Number/index.js",
        "methods": [
          "fill",
          "map",
          "Math.ceil"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Triple Trouble",
        "kyu": "8 kyu",
        "done": true,
        "description": "Triple Trouble\n\nCreate a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!\n\nE.g. Input: \"aa\", \"bb\" , \"cc\" => Output: \"abcabc\"\n\nNote: You can expect all of the inputs to be the same length.",
        "solution": "function tripleTrouble(one, two, three) {\n  one = one.split(\"\");\n  two = two.split(\"\");\n  three = three.split(\"\");\n  return one.map((v, i) => v + two[i] + three[i]).join(\"\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20Triple%20Trouble/index.js",
        "methods": [
          "split",
          "map",
          "join"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Rock Paper Scissors!",
        "kyu": "8 kyu",
        "done": true,
        "description": "Rock Paper Scissors\n\nLet's play! You have to return which player won! In case of a draw return Draw!.\n\nExamples:\n\nrps('scissors','paper') // Player 1 won!\nrps('scissors','rock') // Player 2 won!\nrps('paper','paper') // Draw!\n\nrockpaperscissors",
        "solution": "const rps = (p1, p2) => {\n  if (p1 === p2) {\n    return \"Draw!\";\n  } else if (\n    (p1 === \"rock\" && p2 === \"scissors\") ||\n    (p1 === \"scissors\" && p2 === \"paper\") ||\n    (p1 === \"paper\" && p2 === \"rock\")\n  ) {\n    return \"Player 1 won!\";\n  } else {\n    return \"Player 2 won!\";\n  }\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20Rock%20Paper%20Scissors!/index.js",
        "methods": [],
        "tech": [
          "if / else",
          "arrow function"
        ]
      },
      {
        "name": "Drink about",
        "kyu": "8 kyu",
        "done": true,
        "description": "Kids drink toddy.\n    Teens drink coke.\n    Young adults drink beer.\n    Adults drink whisky.\n\nMake a function that receive age, and return what they drink.\n\nRules:\n\n    Children under 14 old.\n    Teens under 18 old.\n    Young under 21 old.\n    Adults have 21 or more.\n\nExamples: (Input --> Output)\n\n13 --> \"drink toddy\"\n17 --> \"drink coke\"\n18 --> \"drink beer\"\n20 --> \"drink beer\"\n30 --> \"drink whisky\"",
        "solution": "function peopleWithAgeDrink(old) {\n  if (old < 14) {\n    return \"drink toddy\";\n  }\n  if (old < 18) {\n    return \"drink coke\";\n  }\n  if (old < 21) {\n    return \"drink beer\";\n  }\n  if (old >= 21) {\n    return \"drink whisky\";\n  }\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20Drink%20about/index.js",
        "methods": [],
        "tech": [
          "if / else"
        ]
      },
      {
        "name": "Character Frequency",
        "kyu": "8 kyu",
        "done": true,
        "description": "Description\n\nWelcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!\nExplanation\n\nYour function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.\nExample\n\ncharFreq(\"I like cats\") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}",
        "solution": "const charFreq = (message) =>\n  message.split(\"\").reduce((a, b) => {\n    a[b] = (a[b] || 0) + 1;\n    return a;\n  }, {});",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Diverging_Dungeons/8%20kyu%20Character%20Frequency/index.js",
        "methods": [
          "split",
          "reduce"
        ],
        "tech": [
          "arrow function"
        ]
      }
    ]
  },
  {
    "name": "Quiet Quanta",
    "url": "https://www.codewars.com/collections/quiet-quanta",
    "optional": true,
    "katas": [
      {
        "name": "Formatting a number as price",
        "kyu": "5 kyu",
        "done": true,
        "description": "Description\n\nYour objective is to add formatting to a plain number to display it as price.\n\nThe function should return a string like this:\n\nvar price = numberToPrice(13253.5123);\nconsole.log(price); // 13,253.51\n\nNumbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, \nin the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have \n2 decimal characters, the function will also evaluate negative numbers.\n\nfunction should return a string 'NaN' if the input is not a valid number",
        "solution": "var numberToPrice = function (number) {\n  if (!number || isNaN((number = Number(number)))) {\n    return \"NaN\";\n  }\n  number =\n    number >= 0\n      ? Math.floor((number * 1000) / 10) / 100\n      : Math.ceil((number * 1000) / 10) / 100;\n  number = number.toFixed(2);\n  let num = number.toString().split(\".\");\n  num[0] = num[0].replace(/(?<=\\d)(?=(\\d\\d\\d)+(?!\\d))/g, \",\");\n  return num.join(\".\");\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Quiet_Quanta/5%20kyu%20Formatting%20a%20number%20as%20price/index.js",
        "methods": [
          "toFixed",
          "toString",
          "split",
          "replace",
          "join",
          "isNaN",
          "Number",
          "Math.floor",
          "Math.ceil"
        ],
        "tech": [
          "if / else",
          "ternary ( ? : )",
          "regex"
        ]
      },
      {
        "name": "Moves in squared strings (II)",
        "kyu": "6 kyu",
        "done": true,
        "description": "You are given a string of n lines, each substring being n characters long: For example:\n\ns = \"abcd\\nefgh\\nijkl\\nmnop\"\n\nWe will study some transformations of this square of strings.\n\n    Clock rotation 180 degrees: rot\n\n    rot(s) => \"ponm\\nlkji\\nhgfe\\ndcba\"\n\n    selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) It is initial string + string obtained by clock rotation 180 degrees with dots interspersed in order (hopefully) to better show the rotation when printed.\n\n    s = \"abcd\\nefgh\\nijkl\\nmnop\" --> \n    \"abcd....\\nefgh....\\nijkl....\\nmnop....\\n....ponm\\n....lkji\\n....hgfe\\n....dcba\"\n\n    or printed:\n\n|rotation        |selfie_and_rot\n|abcd --> ponm   |abcd --> abcd....\n|efgh     lkji   |efgh     efgh....\n|ijkl     hgfe   |ijkl     ijkl....   \n|mnop     dcba   |mnop     mnop....\n                           ....ponm\n                           ....lkji\n                           ....hgfe\n                           ....dcba\n\nNotice that the number of dots is the common length of \"abcd\", \"efgh\", \"ijkl\", \"mnop\".\nTask:\n\n    Write these two functions rotand selfie_and_rot\n\nand\n\n    high-order function oper(fct, s) where\n\n    fct is the function of one variable f to apply to the string s (fct will be one of rot, selfie_and_rot)\n\nExamples:\n\ns = \"abcd\\nefgh\\nijkl\\nmnop\"\noper(rot, s) => \"ponm\\nlkji\\nhgfe\\ndcba\"\noper(selfie_and_rot, s) => \"abcd....\\nefgh....\\nijkl....\\nmnop....\\n....ponm\\n....lkji\\n....hgfe\\n....dcba\"\n\nNotes:\n\n    The form of the parameter fct in oper changes according to the language. You can see each form according to the language in \"Your test cases\".\n    It could be easier to take these katas from number (I) to number (IV)\n\nForthcoming katas will study other tranformations.\nBash Note:\n\nThe input strings are separated by , instead of \\n. The ouput strings should be separated by \\r instead of \\n. See \"Sample Tests\".",
        "solution": "function rot(strng) {\n  let rotStrng = strng\n    .split(\"\\n\")\n    .reverse()\n    .map((substrng) => substrng.split(\"\").reverse().join(\"\"))\n    .join(\"\\n\");\n  return rotStrng;\n}\n\nfunction selfieAndRot(strng) {\n  let howManyDotNeed = strng.split(\"\\n\")[0].length,\n    selfieStrng = strng\n      .split(\"\\n\")\n      .map((substrng) => substrng + `${\".\".repeat(howManyDotNeed)}`),\n    rotStrng = strng\n      .split(\"\\n\")\n      .reverse()\n      .map(\n        (substrng) =>\n          `${\".\".repeat(howManyDotNeed)}` +\n          substrng.split(\"\").reverse().join(\"\")\n      ),\n    selfieAndRotStrn = selfieStrng.concat(rotStrng).join(\"\\n\");\n  return selfieAndRotStrn;\n}\n\nfunction oper(fct, s) {\n  return fct(s);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Quiet_Quanta/6%20kyu%20Moves%20in%20squared%20strings%20(II)/index.js",
        "methods": [
          "split",
          "reverse",
          "map",
          "join",
          "repeat",
          "concat"
        ],
        "tech": [
          "arrow function",
          "template string"
        ]
      },
      {
        "name": "Break camelCase",
        "kyu": "6 kyu",
        "done": true,
        "description": "Complete the solution so that the function will break up camel casing, using a space between words.\nExample\n\n\"camelCasing\"  =>  \"camel Casing\"\n\"identifier\"   =>  \"identifier\"\n\"\"             =>  \"\"",
        "solution": "function solution(string) {\n  string = string.split(\"\");\n  for (let i = 0; i < string.length; i++) {\n    if (string[i] === string[i].toUpperCase()) {\n      string[i] = ` ${string[i]}`;\n    }\n  }\n\n  return string.join(\"\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Quiet_Quanta/6%20kyu%20Break%20camelCase/index.js",
        "methods": [
          "split",
          "toUpperCase",
          "join"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "template string"
        ]
      },
      {
        "name": "Which are in?",
        "kyu": "6 kyu",
        "done": true,
        "description": "Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.\n\n#Example 1: a1 = [\"arp\", \"live\", \"strong\"]\n\na2 = [\"lively\", \"alive\", \"harp\", \"sharp\", \"armstrong\"]\n\nreturns [\"arp\", \"live\", \"strong\"]\n\n#Example 2: a1 = [\"tarp\", \"mice\", \"bull\"]\n\na2 = [\"lively\", \"alive\", \"harp\", \"sharp\", \"armstrong\"]\n\nreturns []\nNotes:\n\n    Arrays are written in \"general\" notation. See \"Your Test Cases\" for examples in your language.\n\n    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.\n\n    Beware: r must be without duplicates.\n    Don't mutate the inputs.",
        "solution": "function inArray(array1, array2) {\n  let i,\n    j,\n    result = [];\n  for (i = 0; i < array1.length; i++) {\n    for (j = 0; j < array2.length; j++) {\n      if (`${array2[j]}`.includes(`${array1[i]}`)) {\n        result.push(array1[i]);\n      }\n    }\n  }\n  return [...new Set(result.sort())];\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Quiet_Quanta/6%20kyu%20Which%20are%20in/index.js",
        "methods": [
          "includes",
          "push",
          "sort",
          "Set",
          "spread (...)"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "template string"
        ]
      },
      {
        "name": "Build Tower",
        "kyu": "6 kyu",
        "done": true,
        "description": "Build Tower\n\nBuild Tower by the following given argument:\nnumber of floors (integer and always greater than 0).\n\nTower block is represented as *\n\n    Python: return a list;\n    JavaScript: returns an Array;\n    C#: returns a string[];\n    PHP: returns an array;\n    C++: returns a vector<string>;\n    Haskell: returns a [String];\n    Ruby: returns an Array;\n    Lua: returns a Table;\n\nHave fun!\n\nfor example, a tower of 3 floors looks like below\n\n[\n  '  *  ', \n  ' *** ', \n  '*****'\n]\n\nand a tower of 6 floors looks like below\n\n[\n  '     *     ', \n  '    ***    ', \n  '   *****   ', \n  '  *******  ', \n  ' ********* ', \n  '***********'\n]\n\nGo challenge Build Tower Advanced once you have finished this :)",
        "solution": "function towerBuilder(nFloors) {\n  let tower = [];\n  for (let i = 0; i < nFloors; i++) {\n    tower.push(\n      \" \".repeat(nFloors - i - 1) +\n        \"*\".repeat(i * 2 + 1) +\n        \" \".repeat(nFloors - i - 1)\n    );\n    //console.log (tower)\n  }\n  return tower;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Quiet_Quanta/6%20kyu%20Build%20Tower/index.js",
        "methods": [
          "push",
          "repeat"
        ],
        "tech": [
          "for ciklus"
        ]
      },
      {
        "name": "Highest Scoring Word",
        "kyu": "6 kyu",
        "done": true,
        "description": "Given a string of words, you need to find the highest scoring word.\n\nEach letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.\n\nYou need to return the highest scoring word as a string.\n\nIf two words score the same, return the word that appears earliest in the original string.\n\nAll letters will be lowercase and all inputs will be valid.",
        "solution": "function high(x) {\n  x = x.split(\" \");\n  let copyx = [...x];\n  for (let i = 0; i < x.length; i++) {\n    if (x[i].length === 1) {\n      x[i] = x[i].charCodeAt(0) - 96;\n    } else {\n      x[i] = x[i].split(\"\");\n      for (let j = 0; j < x[i].length; j++) {\n        x[i][j] = x[i][j].charCodeAt(0) - 96;\n      }\n      x[i] = x[i].reduce((a, b) => a + b, 0);\n    }\n  }\n  let k = x.indexOf(Math.max(...x));\n  return copyx[k];\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Quiet_Quanta/6%20kyu%20Highest%20Scoring%20Word/index.js",
        "methods": [
          "split",
          "charCodeAt",
          "reduce",
          "indexOf",
          "Math.max",
          "spread (...)"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "arrow function"
        ]
      },
      {
        "name": "Find the odd int",
        "kyu": "6 kyu",
        "done": true,
        "description": "Given an array of integers, find the one that appears an odd number of times.\n\nThere will always be only one integer that appears an odd number of times.",
        "solution": "function findOdd(A) {\n  let count = 0;\n  for (let i = 0; i < A.length; i++) {\n    for (let j = 0; j < A.length; j++) {\n      if (A[i] === A[j]) {\n        count++;\n      }\n    }\n    if (count % 2 != 0) {\n      return A[i];\n    }\n  }\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Quiet_Quanta/6%20kyu%20Find%20the%20odd%20int/index.js",
        "methods": [],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      },
      {
        "name": "Split Strings",
        "kyu": "6 kyu",
        "done": true,
        "description": "Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it \nshould replace the missing second character of the final pair with an underscore ('_').\n\nExamples:\n\nsolution('abc') // should return ['ab', 'c_']\nsolution('abcdef') // should return ['ab', 'cd', 'ef']",
        "solution": "function solution(str) {\n  let array = [];\n  for (let i = 0; i < str.length; i += 2) {\n    if (str.length % 2 === 1) {\n      str = str + \"_\";\n      array.push(str.slice(i, i + 2));\n    } else {\n      array.push(str.slice(i, i + 2));\n    }\n  }\n  return array;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Quiet_Quanta/6%20kyu%20Split%20Strings/index.js",
        "methods": [
          "push",
          "slice"
        ],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      },
      {
        "name": "Sum of Digits / Digital Root",
        "kyu": "6 kyu",
        "done": true,
        "description": "Digital root is the recursive sum of all the digits in a number.\n\nGiven n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. \nThe input will be a non-negative integer.\nExamples\n\n    16  -->  1 + 6 = 7\n   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6\n132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6\n493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2",
        "solution": "function digital_root(n){\n  let x = 0\n  String(n).split('').map(num => {\n    x += Number(num)\n  })\n  return x >= 10 ? digital_root(x) : x\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Quiet_Quanta/6%20kyu%20Sum%20of%20Digits%20-%20Digital%20Root/index.js",
        "methods": [
          "split",
          "map",
          "String",
          "Number"
        ],
        "tech": [
          "ternary ( ? : )",
          "arrow function",
          "rekurzió"
        ]
      },
      {
        "name": "Multiples of 3 or 5",
        "kyu": "6 kyu",
        "done": true,
        "description": "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\n\nFinish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.\n\n    Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)\n\nCourtesy of projecteuler.net",
        "solution": "function solution(number) {\n  var total = 0;\n  for (var i = 0; i < number; i++) {\n    if (i % 3 === 0 || i % 5 === 0) {\n      total += i;\n    }\n  }\n  return total;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Quiet_Quanta/6%20kyu%20Multiples%20of%203%20or%205/index.js",
        "methods": [],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      }
    ]
  },
  {
    "name": "Boring Bananas",
    "url": "https://www.codewars.com/collections/boring-bananas",
    "optional": false,
    "katas": [
      {
        "name": "The Supermarket Queue",
        "kyu": "6 kyu",
        "done": true,
        "description": "There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all \nthe customers to check out!\ninput\n\n    customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time \n    they require to check out.\n    n: a positive integer, the number of checkout tills.\n\noutput\n\nThe function should return an integer, the total time required.\nImportant\n\nPlease look at the examples and clarifications below, to ensure you understand the task correctly :)\nExamples\n\nqueueTime([5,3,4], 1)\n// should return 12\n// because when there is 1 till, the total time is just the sum of the times\n\nqueueTime([10,2,3,3], 2)\n// should return 10\n// because here n=2 and the 2nd, 3rd, and 4th people in the \n// queue finish before the 1st person has finished.\n\nqueueTime([2,3,10], 2)\n// should return 12\n\nClarifications\n\n    There is only ONE queue serving many tills, and\n    The order of the queue NEVER changes, and\n    The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.\n\nN.B. You should assume that all the test input will be valid, as specified above.\n\nP.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple \nprocesses at the same time: https://en.wikipedia.org/wiki/Thread_pool",
        "solution": "function queueTime(customers, n) {\n  let arr = new Array(n).fill(0);\n  for (let i = 0; i < customers.length; i++) {\n    let x = arr.indexOf(Math.min(...arr));\n    arr[x] += customers[i];\n  }\n  return Math.max(...arr);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Boring_Bananas/6%20kyu%20The%20Supermarket%20Queue/index.js",
        "methods": [
          "fill",
          "indexOf",
          "Math.min",
          "Math.max",
          "spread (...)"
        ],
        "tech": [
          "for ciklus"
        ]
      },
      {
        "name": "Are they the \"same\"?",
        "kyu": "6 kyu",
        "done": true,
        "description": "Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the \"same\" elements, \nwith the same multiplicities. \"Same\" means, here, that the elements in b are the elements in a squared, regardless of the order.\nExamples\nValid arrays\n\na = [121, 144, 19, 161, 19, 144, 19, 11]  \nb = [121, 14641, 20736, 361, 25921, 361, 20736, 361]\n\ncomp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, \n25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:\n\na = [121, 144, 19, 161, 19, 144, 19, 11] \nb = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]\n\nInvalid arrays\n\nIf, for example, we change the first number to something else, comp may not return true anymore:\n\na = [121, 144, 19, 161, 19, 144, 19, 11]  \nb = [132, 14641, 20736, 361, 25921, 361, 20736, 361]\n\ncomp(a,b) returns false because in b 132 is not the square of any number of a.\n\na = [121, 144, 19, 161, 19, 144, 19, 11]  \nb = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]\n\ncomp(a,b) returns false because in b 36100 is not the square of any number of a.\nRemarks\n\n    a or b might be [] or {} (all languages except R, Shell).\n    a or b might be nil or null or None or nothing (except in C++, Elixir, Haskell, PureScript, Pascal, R, Rust, Shell).\n\nIf a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.\nNote for C\n\nThe two arrays have the same size (> 0) given as parameter in function comp.",
        "solution": "function comp(array1, array2) {\n  if (array1 == null || array2 == null) {\n    return false;\n  }\n  array1 = array1.sort((a, b) => a - b);\n  array2 = array2.sort((a, b) => a - b);\n  return array1.map((el) => el * el).every((el, i) => el === array2[i]);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Boring_Bananas/6%20kyu%20Are%20they%20the%20'same'/index.js",
        "methods": [
          "sort",
          "map",
          "every"
        ],
        "tech": [
          "if / else",
          "arrow function"
        ]
      },
      {
        "name": "Directions Reduction",
        "kyu": "5 kyu",
        "done": true,
        "description": "Once upon a time, on a way through the old wild mountainous west,…\n\n… a man was given directions to go from one point to another. The directions were \"NORTH\", \"SOUTH\", \"WEST\", \"EAST\". Clearly \"NORTH\" \nand \"SOUTH\" are opposite, \"WEST\" and \"EAST\" too.\n\nGoing to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull \nweather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!\nHow I crossed a mountainous desert the smart way.\n\nThe directions given to the man are, for example, the following (depending on the language):\n\n[\"NORTH\", \"SOUTH\", \"SOUTH\", \"EAST\", \"WEST\", \"NORTH\", \"WEST\"].\nor\n{ \"NORTH\", \"SOUTH\", \"SOUTH\", \"EAST\", \"WEST\", \"NORTH\", \"WEST\" };\nor\n[North, South, South, East, West, North, West]\n\nYou can immediatly see that going \"NORTH\" and immediately \"SOUTH\" is not reasonable, better stay to the same place! So the task is to give \nto the man a simplified version of the plan. A better plan in this case is simply:\n\n[\"WEST\"]\nor\n{ \"WEST\" }\nor\n[West]\n\nOther examples:\n\nIn [\"NORTH\", \"SOUTH\", \"EAST\", \"WEST\"], the direction \"NORTH\" + \"SOUTH\" is going north and coming back right away.\n\nThe path becomes [\"EAST\", \"WEST\"], now \"EAST\" and \"WEST\" annihilate each other, therefore, the final result is [] (nil in Clojure).\n\nIn [\"NORTH\", \"EAST\", \"WEST\", \"SOUTH\", \"WEST\", \"WEST\"], \"NORTH\" and \"SOUTH\" are not directly opposite but they become directly opposite after \nthe reduction of \"EAST\" and \"WEST\" so the whole path is reducible to [\"WEST\", \"WEST\"].\nTask\n\nWrite a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed \n(W<->E or S<->N side by side).\n\n    The Haskell version takes a list of directions with data Direction = North | East | West | South.\n    The Clojure version returns nil when the path is reduced to nothing.\n    The Rust version takes a slice of enum Direction {North, East, West, South}.\n\nSee more examples in \"Sample Tests:\"\nNotes\n\n    Not all paths can be made simpler. The path [\"NORTH\", \"WEST\", \"SOUTH\", \"EAST\"] is not reducible. \"NORTH\" and \"WEST\", \"WEST\" and \"SOUTH\", \n    \"SOUTH\" and \"EAST\" are not directly opposite of each other and can't become such. Hence the result path is itself : [\"NORTH\", \"WEST\", \"SOUTH\", \"EAST\"].\n    if you want to translate, please ask before translating.",
        "solution": "function dirReduc(arr) {\n  let str = arr.join(\"\");\n  let regex = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g;\n  while (regex.test(str)) {\n    str = str.replace(regex, \"\");\n  }\n  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Boring_Bananas/5%20kyu%20Directions%20Reduction/index.js",
        "methods": [
          "join",
          "test",
          "replace",
          "match"
        ],
        "tech": [
          "while ciklus",
          "regex"
        ]
      },
      {
        "name": "Tribonacci Sequence",
        "kyu": "6 kyu",
        "done": true,
        "description": "Well met with Fibonacci bigger brother, AKA Tribonacci.\n\nAs the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to \ngenerate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(\n\nSo, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:\n\n[1, 1 ,1, 3, 5, 9, 17, 31, ...]\n\nBut what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci \nsequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:\n\n[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]\n\nWell, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns \nthe first n elements - signature included of the so seeded sequence.\n\nSignature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) \nand be ready for anything else which is not clearly specified ;)\n\nIf you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata\n\n[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this \nmathematical curiosity too with his usual contagious passion :)]",
        "solution": "function tribonacci(signature, n) {\n  if (n === 0) {\n    return [];\n  } else if (n === 1) {\n    return [1];\n  }\n  let triB = [];\n  triB[0] = signature[0];\n  triB[1] = signature[1];\n  triB[2] = signature[2];\n  for (let i = 3; i < n; i++) {\n    triB[i] = triB[i - 3] + triB[i - 2] + triB[i - 1];\n  }\n  return triB;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Boring_Bananas/6%20kyu%20Tribonacci%20Sequence/index.js",
        "methods": [],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      },
      {
        "name": "Help the bookseller !",
        "kyu": "6 kyu",
        "done": true,
        "description": "A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. \nThe 1st character of a code is a capital letter which defines the book category.\n\nIn the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity \nof books of this code in stock.\n\nFor example an extract of a stocklist could be:\n\nL = {\"ABART 20\", \"CDXEF 50\", \"BKWRK 25\", \"BTSQZ 89\", \"DRTYM 60\"}.\nor\nL = [\"ABART 20\", \"CDXEF 50\", \"BKWRK 25\", \"BTSQZ 89\", \"DRTYM 60\"] or ....\n\nYou will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :\n\nM = {\"A\", \"B\", \"C\", \"W\"} \nor\nM = [\"A\", \"B\", \"C\", \"W\"] or ...\n\nand your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.\n\nFor the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):\n\n(A : 20) - (B : 114) - (C : 50) - (W : 0)\n\nwhere A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to \"BKWRK\" and \"BTSQZ\", \n50 corresponding to \"CDXEF\" and 0 to category 'W' since there are no code beginning with W.\n\nIf L or M are empty return string is \"\" (Clojure and Racket should return an empty array/list instead).\nNote:\n\nIn the result codes and their values are in the same order as in M.",
        "solution": "function stockList(listOfArt, listOfCat) {\n  if (!listOfArt.length || !listOfCat.length) {\n    return \"\";\n  }\n  return listOfCat\n    .map((book) => {\n      const sum = listOfArt.reduce(\n        (acc, title) => acc + (title[0] === book ? +title.split(\" \")[1] : 0),\n        0\n      );\n      return `(${book} : ${sum})`;\n    })\n    .join(\" - \");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Boring_Bananas/6%20kyu%20Help%20the%20bookseller%20!/index.js",
        "methods": [
          "map",
          "reduce",
          "split",
          "join"
        ],
        "tech": [
          "if / else",
          "ternary ( ? : )",
          "arrow function",
          "template string"
        ]
      }
    ]
  },
  {
    "name": "Hesitant Heroes",
    "url": "https://www.codewars.com/collections/hesitant-heroes",
    "optional": true,
    "katas": [
      {
        "name": "Simple Pig Latin",
        "kyu": "5 kyu",
        "done": true,
        "description": "Move the first letter of each word to the end of it, then add \"ay\" to the end of the word. Leave punctuation marks untouched.\nExamples\n\npigIt('Pig latin is cool'); // igPay atinlay siay oolcay\npigIt('Hello world !');     // elloHay orldway !",
        "solution": "function pigIt(str) {\n  return str\n    .split(\" \")\n    .map((el) =>\n      el.match(/[a-z]/gim) ? el.substring(1) + el.substring(0, 1) + \"ay\" : el\n    )\n    .join(\" \");\n}\n\n//shorthand\n\nconst mapper = el => el.match(/[a-z]/gim) ? `${el.substring(1)}${el.substring(0, 1)}ay` : el\nconst pigIt = str => str.split(\" \").map(mapper).join(\" \");",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Hesitant_Heroes/5%20kyu%20Simple%20Pig%20Latin/index.js",
        "methods": [
          "split",
          "map",
          "match",
          "substring",
          "join"
        ],
        "tech": [
          "ternary ( ? : )",
          "arrow function",
          "template string",
          "regex"
        ]
      },
      {
        "name": "Moving Zeros To The End",
        "kyu": "5 kyu",
        "done": true,
        "description": "Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.\n\nmoveZeros([false,1,0,1,2,0,1,3,\"a\"]) // returns[false,1,1,2,1,3,\"a\",0,0]",
        "solution": "var moveZeros = function (arr) {\n  let arr2 = arr.map((el) => el).filter((el) => el === 0);\n  arr = arr.filter((el) => el !== 0);\n  return arr.concat(arr2);\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Hesitant_Heroes/5%20kyu%20Moving%20Zeros%20To%20The%20End/index.js",
        "methods": [
          "map",
          "filter",
          "concat"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Valid Parentheses",
        "kyu": "5 kyu",
        "done": true,
        "description": "Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return \ntrue if the string is valid, and false if it's invalid.\nExamples\n\n\"()\"              =>  true\n\")(()))\"          =>  false\n\"(\"               =>  false\n\"(())((()())())\"  =>  true\n\nConstraints\n\n0 <= input.length <= 100",
        "solution": "function validParentheses(parens) {\n  parens = [...parens];\n  for (let i = 0; i < parens.length; i++) {\n    if (parens[i] === \"(\" && parens[i + 1] === \")\") {\n      parens.splice(i, 2);\n      i = -1;\n    }\n  }\n  return !parens.length;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Hesitant_Heroes/5%20kyu%20Valid%20Parentheses/index.js",
        "methods": [
          "splice",
          "spread (...)"
        ],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      },
      {
        "name": "RGB To Hex Conversion",
        "kyu": "5 kyu",
        "done": true,
        "description": "The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. \nValid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.\n\nNote: Your answer should always be 6 characters long, the shorthand with 3 will not work here.\n\nThe following are examples of expected output values:\n\nrgb(255, 255, 255) // returns FFFFFF\nrgb(255, 255, 300) // returns FFFFFF\nrgb(0,0,0) // returns 000000\nrgb(148, 0, 211) // returns 9400D3",
        "solution": "function componentToHex(c) {\n  if (c < 0) {\n    c = 0;\n  } else if (c > 255) {\n    c = 255;\n  }\n  var hex = c.toString(16);\n  return hex.length == 1 ? \"0\" + hex : hex;\n}\n\nfunction rgb(r, g, b) {\n  console.log(r, g, componentToHex(b));\n  return `${componentToHex(r)}${componentToHex(g)}${componentToHex(\n    b\n  )}`.toUpperCase();\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Hesitant_Heroes/5%20kyu%20RGB%20To%20Hex%20Conversion/index.js",
        "methods": [
          "toString",
          "toUpperCase"
        ],
        "tech": [
          "if / else",
          "ternary ( ? : )",
          "template string"
        ]
      },
      {
        "name": "Where my anagrams at?",
        "kyu": "5 kyu",
        "done": true,
        "description": "What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:\n\n'abba' & 'baab' == true\n\n'abba' & 'bbaa' == true\n\n'abba' & 'abbba' == false\n\n'abba' & 'abca' == false\n\nWrite a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. \nYou should return an array of all the anagrams or an empty array if there are none. For example:\n\nanagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']\n\nanagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']\n\nanagrams('laser', ['lazing', 'lazy',  'lacer']) => []\n\nAlgorithms\nStrings",
        "solution": "function anagrams(word, words) {\n  let result = [],\n    cloneWords = words.map((el) => el.split(\"\").sort().join(\"\"));\n  word = word.split(\"\").sort().join(\"\");\n  for (let i = 0; i < cloneWords.length; i++) {\n    if (cloneWords[i] === word) {\n      result.push(words[i]);\n    }\n  }\n  return result;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Hesitant_Heroes/5%20kyu%20Where%20my%20anagrams%20at/index.js",
        "methods": [
          "map",
          "split",
          "sort",
          "join",
          "push"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "arrow function"
        ]
      }
    ]
  },
  {
    "name": "Elementary Expeditions",
    "url": "https://www.codewars.com/collections/elementary-expeditions",
    "optional": false,
    "katas": [
      {
        "name": "Find the Difference in Age between Oldest and Youngest Family Members",
        "kyu": "8 kyu",
        "done": true,
        "description": "At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and \ncalculate the difference between them.\n\nYou will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, \nwill have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].",
        "solution": "function differenceInAges(ages) {\n  let youngest = Math.min(...ages);\n  let oldest = Math.max(...ages);\n  let dif = oldest - youngest;\n  return new Array(youngest, oldest, dif);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/8%20kyu%20Find%20the%20Difference%20in%20Age%20between%20Oldest%20and%20Youngest%20Family%20Members/index.js",
        "methods": [
          "Math.min",
          "Math.max",
          "spread (...)"
        ],
        "tech": []
      },
      {
        "name": "Descending Order",
        "kyu": "7 kyu",
        "done": true,
        "description": "Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.\nExamples:\n\nInput: 42145 Output: 54421\n\nInput: 145263 Output: 654321\n\nInput: 123456789 Output: 987654321",
        "solution": "function descendingOrder(n) {\n  return +(\"\" + n).split(\"\").sort().reverse().join(\"\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/7%20kyu%20Descending%20Order/index.js",
        "methods": [
          "split",
          "sort",
          "reverse",
          "join"
        ],
        "tech": []
      },
      {
        "name": "SpeedCode #2 - Array Madness",
        "kyu": "8 kyu",
        "done": true,
        "description": "SpeedCode #2 - Array Madness\nObjective\n\nGiven two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is \nstrictly greater than the sum of the cubes of each element in b.\n\nE.g.\n\narrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3\n\nGet your timer out. Are you ready? Ready, get set, GO!!!",
        "solution": "function arrayMadness(a, b) {\n  return (\n    a.map((el) => el ** 2).reduce((x, y) => x + y) >\n    b.map((el) => el ** 3).reduce((x, y) => x + y)\n  );\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/8%20kyu%20SpeedCode%20%232%20-%20Array%20Madness/index.js",
        "methods": [
          "map",
          "reduce"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Filter out the geese",
        "kyu": "8 kyu",
        "done": true,
        "description": "Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a \nfiltered array containing the same elements but with the 'geese' removed.\n\nThe geese are any strings in the following array, which is pre-populated in your solution:\n\ngeese = [\"African\", \"Roman Tufted\", \"Toulouse\", \"Pilgrim\", \"Steinbacher\"]\n\nFor example, if this array were passed as an argument:\n\n[\"Mallard\", \"Hook Bill\", \"African\", \"Crested\", \"Pilgrim\", \"Toulouse\", \"Blue Swedish\"]\n\nYour function would return the following array:\n\n[\"Mallard\", \"Hook Bill\", \"Crested\", \"Blue Swedish\"]\n\nThe elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' \nremoved. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.",
        "solution": "function gooseFilter(birds) {\n  const geese = [\n    \"African\",\n    \"Roman Tufted\",\n    \"Toulouse\",\n    \"Pilgrim\",\n    \"Steinbacher\"\n  ];\n  return birds.filter((inArray) => !geese.includes(inArray));\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/8%20kyu%20Filter%20out%20the%20geese/index.js",
        "methods": [
          "filter",
          "includes"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Find the first non-consecutive number",
        "kyu": "8 kyu",
        "done": true,
        "description": "Your task is to find the first element of an array that is not consecutive.\n\nBy not consecutive we mean not exactly 1 larger than the previous element of the array.\n\nE.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.\n\nIf the whole array is consecutive then return null2.\n\nThe array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. \nThe numbers could be positive or negative and the first non-consecutive could be either too!\n\nIf you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges\n\n1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not \ntested for, but you can write your own example test. )\n\n2\nSwift, Ruby and Crystal: nil\nHaskell: Nothing\nPython, Rust, Scala: None\nJulia: nothing\nNim: none(int) (See options)",
        "solution": "function firstNonConsecutive(arr) {\n  for (let i = 0; i < arr.length - 1; ++i) {\n    if (arr[i] + 1 !== arr[i + 1]) {\n      return arr[i + 1];\n    }\n  }\n  return null;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/8%20kyu%20Find%20the%20first%20non-consecutive%20number/index.js",
        "methods": [],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      },
      {
        "name": "Beginner Series #3 Sum of Numbers",
        "kyu": "7 kyu",
        "done": true,
        "description": "Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. \nIf the two numbers are equal return a or b.\n\nNote: a and b are not ordered!\nExamples\n\nGetSum(1, 0) == 1   // 1 + 0 = 1\nGetSum(1, 2) == 3   // 1 + 2 = 3\nGetSum(0, 1) == 1   // 0 + 1 = 1\nGetSum(1, 1) == 1   // 1 Since both are same\nGetSum(-1, 0) == -1 // -1 + 0 = -1\nGetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2",
        "solution": "function getSum(a, b) {\n  if (a === b) {\n    return a;\n  } else if (a > b) {\n    return ((a - b + 1) * (a + b)) / 2;\n  } else if (a < b) {\n    return ((b - a + 1) * (a + b)) / 2;\n  }\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/7%20kyu%20Beginner%20Series%20%233%20Sum%20of%20Numbers/index.js",
        "methods": [],
        "tech": [
          "if / else"
        ]
      },
      {
        "name": "Regular Ball Super Ball",
        "kyu": "8 kyu",
        "done": true,
        "description": "Create a class Ball. Ball objects should accept one argument for \"ball type\" when instantiated.\n\nIf no arguments are given, ball objects should instantiate with a \"ball type\" of \"regular.\"\n\nball1 = new Ball();\nball2 = new Ball(\"super\");\n\nball1.ballType     //=> \"regular\"\nball2.ballType     //=> \"super\"",
        "solution": "var Ball = function(ballType) {\n  if (ballType === undefined) {\n     this.ballType = \"regular\";\n  } else {\n     this.ballType = \"super\"\n  }\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/8%20kyu%20Regular%20Ball%20Super%20Ball/index.js",
        "methods": [],
        "tech": [
          "if / else"
        ]
      },
      {
        "name": "Is the string uppercase?",
        "kyu": "8 kyu",
        "done": true,
        "description": "Is the string uppercase?\nTask\n\nAdd the isUpperCase method to String to see whether the string is ALL CAPS. For example:\n\n\"c\".isUpperCase() == false\n\"C\".isUpperCase() == true\n\"hello I AM DONALD\".isUpperCase() == false\n\"HELLO I AM DONALD\".isUpperCase() == true\n\"ACSKLDFJSgSKLDFJSKLDFJ\".isUpperCase() == false\n\"ACSKLDFJSGSKLDFJSKLDFJ\".isUpperCase() == true\n\nIn this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters \nat all is trivially considered to be in ALL CAPS.",
        "solution": "String.prototype.isUpperCase = function() {\n  return this == this.toUpperCase()\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/8%20kyu%20Is%20the%20string%20uppercase/index.js",
        "methods": [
          "toUpperCase"
        ],
        "tech": [
          "prototype"
        ]
      },
      {
        "name": "Playing with cubes II",
        "kyu": "8 kyu",
        "done": true,
        "description": "Hey Codewarrior!\n\nYou already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. \nLet's code two: One taking an integer and one handling no given arguments!\n\nAlso we got a problem with negative values. Correct the code so negative values will be switched to positive ones!\n\nThe constructor taking no arguments should assign 0 to Cube's Side property.",
        "solution": "function Cube(n) {\n  var side = n || 0;\n  this.getSide = function () {\n    return side;\n  };\n  this.setSide = function (n) {\n    if (isNaN(n) === true) {\n      return;\n    }\n    side = Math.abs(n);\n  };\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/8%20kyu%20Playing%20with%20cubes%20II/index.js",
        "methods": [
          "isNaN",
          "Math.abs"
        ],
        "tech": [
          "if / else"
        ]
      },
      {
        "name": "Lexical this",
        "kyu": "8 kyu",
        "done": true,
        "description": "Lexical this\nComplete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.\nOutput\nReturn the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.\n\nReference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
        "solution": "var Person = function () {\n  var person = {\n    _name: \"Leroy\",\n    _friends: [],\n    fillFriends: (f) => {\n      person._friends = f;\n    }\n  };\n  return person;\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/8%20kyu%20Lexical%20this/index.js",
        "methods": [],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Safen User Input Part I - htmlspecialchars",
        "kyu": "8 kyu",
        "done": true,
        "description": "Safen User Input Part I - htmlspecialchars\n\nYou are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) \nsimple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so \nvisitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a \nhacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by \ninjecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a \nmalicious website that steals personal information).\nMission\n\nYour mission is to implement a function htmlspecialchars() that converts the following potentially harmful characters:\n\n    < --> &lt;\n    > --> &gt;\n    \" --> &quot;\n    & --> &amp;\n\nGood luck :D\nExtension\n\nIf you are an experienced Javascript programmer, try shortening your code as much as possible and optimise it to minimise run time. \nExperienced programmers should be able to complete this exercise in one line of code.",
        "solution": "function htmlspecialchars(formData) {\nlet arr = [];\n  for (let i = 0; i < formData.length; i++){\n    if (formData[i] == '<'){\n      arr.push('&lt;')\n    } else if(formData[i] == '>'){\n      arr.push('&gt;')\n    } else if(formData[i] == '\"'){\n      arr.push('&quot;')\n    } else if(formData[i] == '&'){\n      arr.push('&amp;')\n    } else {\n      arr.push(formData[i])\n    }\n  }\nreturn arr.join('')\n}\n\n//shorthand\n\nfunction htmlspecialchars(formData) {\n  return formData\n    .replace(/&/g, \"&amp;\")\n    .replace(/\"/g, \"&quot;\")\n    .replace(/</g, \"&lt;\")\n    .replace(/>/g, \"&gt;\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/8%20kyu%20Safen%20User%20Input%20Part%20I%20-%20htmlspecialchars/index.js",
        "methods": [
          "push",
          "join",
          "replace"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "regex"
        ]
      },
      {
        "name": "Will there be enough space?",
        "kyu": "8 kyu",
        "done": true,
        "description": "The Story:\n\nBob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to \nget aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling \nhim if he will be able to fit all the passengers.\nTask Overview:\n\nYou have to write a function that accepts three parameters:\n\n    cap is the amount of people the bus can hold excluding the driver.\n    on is the number of people on the bus excluding the driver.\n    wait is the number of people waiting to get on to the bus excluding the driver.\n\nIf there is enough space, return 0, and if there isn't, return the number of passengers he can't take.\nUsage Examples:\n\ncap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers\ncap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting",
        "solution": "function enough(cap, on, wait) {\n  let spaceLeft = (cap - on - wait) * -1;\n  if (spaceLeft < 0) {\n    return 0;\n  }\n  return spaceLeft;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/8%20kyu%20Will%20there%20be%20enough%20space/index.js",
        "methods": [],
        "tech": [
          "if / else"
        ]
      },
      {
        "name": "Highest and Lowest",
        "kyu": "7 kyu",
        "done": true,
        "description": "In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.\n\nExample:\n\nhighAndLow(\"1 2 3 4 5\");  // return \"5 1\"\nhighAndLow(\"1 2 -3 4 5\"); // return \"5 -3\"\nhighAndLow(\"1 9 3 4 -5\"); // return \"9 -5\"\n\nNotes:\n\n    All numbers are valid Int32, no need to validate them.\n    There will always be at least one number in the input string.\n    Output string must be two numbers separated by a single space, and highest number is first.",
        "solution": "function highAndLow(numbers) {\n  numbers = numbers.split(\" \").sort((a, b) => b - a);\n  return `${numbers[0].toString()} ${numbers[numbers.length - 1].toString()}`;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/7%20kyu%20Highest%20and%20Lowest/index.js",
        "methods": [
          "split",
          "sort",
          "toString"
        ],
        "tech": [
          "arrow function",
          "template string"
        ]
      },
      {
        "name": "Vowel Count",
        "kyu": "7 kyu",
        "done": true,
        "description": "Return the number (count) of vowels in the given string.\n\nWe will consider a, e, i, o, u as vowels for this Kata (but not y).\n\nThe input string will only consist of lower case letters and/or spaces.",
        "solution": "function getCount(str) {\n  var vowelsCount = 0;\n  const vowels = [\"a\", \"e\", \"i\", \"o\", \"u\"];\n  for (let char of str) {\n    if (vowels.includes(char)) {\n      vowelsCount++;\n    }\n  }\n  return vowelsCount;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/7%20kyu%20Vowel%20Count/index.js",
        "methods": [
          "includes"
        ],
        "tech": [
          "for...of",
          "if / else"
        ]
      },
      {
        "name": "Sort Numbers",
        "kyu": "7 kyu",
        "done": true,
        "description": "Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value \nthen it should return an empty array.\n\nFor example:\n\nsolution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]\nsolution(null); // should return []",
        "solution": "function solution(nums) {\n  if (!nums) {\n    return [];\n  }\n  return nums.sort((a, b) => a - b);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/7%20kyu%20Sort%20Numbers/index.js",
        "methods": [
          "sort"
        ],
        "tech": [
          "if / else",
          "arrow function"
        ]
      },
      {
        "name": "Mumbling",
        "kyu": "7 kyu",
        "done": true,
        "description": "This time no story, no theory. The examples below show you how to write function accum:\n\nExamples:\n\naccum(\"abcd\") -> \"A-Bb-Ccc-Dddd\"\naccum(\"RqaEzty\") -> \"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy\"\naccum(\"cwAt\") -> \"C-Ww-Aaa-Tttt\"\n\nThe parameter of accum is a string which includes only letters from a..z and A..Z.",
        "solution": "function accum(s) {\n  return s\n    .split(\"\")\n    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))\n    .join(\"-\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/7%20kyu%20Mumbling/index.js",
        "methods": [
          "split",
          "map",
          "toUpperCase",
          "toLowerCase",
          "repeat",
          "join"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Isograms",
        "kyu": "7 kyu",
        "done": true,
        "description": "An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string \nthat contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.\n\nisIsogram(\"Dermatoglyphics\") == true\nisIsogram(\"aba\") == false\nisIsogram(\"moOse\") == false // -- ignore letter case",
        "solution": "function isIsogram(str) {\n  return !/(.).*\\1/i.test(str);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/7%20kyu%20Isograms/index.js",
        "methods": [
          "test"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "Credit Card Mask",
        "kyu": "7 kyu",
        "done": true,
        "description": "Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is \nstill correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.\n\nYour task is to write a function maskify, which changes all but the last four characters into '#'.\nExamples\n\nmaskify(\"4556364607935616\") == \"############5616\"\nmaskify(     \"64607935616\") ==      \"#######5616\"\nmaskify(               \"1\") ==                \"1\"\nmaskify(                \"\") ==                 \"\"\n\n// \"What was the name of your first pet?\"\nmaskify(\"Skippy\")                                   == \"##ippy\"\nmaskify(\"Nananananananananananananananana Batman!\") == \"####################################man!\"",
        "solution": "function maskify(cc) {\n  return cc.replace(/.(?=.{4})/g, \"#\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/7%20kyu%20Credit%20Card%20Mask/index.js",
        "methods": [
          "replace"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "Complementary DNA",
        "kyu": "7 kyu",
        "done": true,
        "description": "Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the \"instructions\" for the development and \nfunctioning of living organisms.\n\nIf you want to know more http://en.wikipedia.org/wiki/DNA\n\nIn DNA strings, symbols \"A\" and \"T\" are complements of each other, as \"C\" and \"G\". You have function with one side of the DNA \n(string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all \n(again, except for Haskell).\n\nMore similar exercise are found here http://rosalind.info/problems/list-view/ (source)\n\nDNAStrand (\"ATTGC\") // return \"TAACG\"\n\nDNAStrand (\"GTAT\") // return \"CATA\"",
        "solution": "function DNAStrand(dna) {\n  return dna\n    .replace(/A/g, \"t\")\n    .replace(/T/g, \"a\")\n    .replace(/C/g, \"g\")\n    .replace(/G/g, \"c\")\n    .toUpperCase();\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/7%20kyu%20Complementary%20DNA/index.js",
        "methods": [
          "replace",
          "toUpperCase"
        ],
        "tech": [
          "regex"
        ]
      },
      {
        "name": "Find the nth Digit of a Number",
        "kyu": "7 kyu",
        "done": true,
        "description": "Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).\nNote\n\n    If num is negative, ignore its sign and treat it as a positive value\n    If nth is not positive, return -1\n    Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0\n\nExamples\n\nfindDigit(5673, 4)     returns 5\nfindDigit(129, 2)      returns 2\nfindDigit(-2825, 3)    returns 8\nfindDigit(-456, 4)     returns 0\nfindDigit(0, 20)       returns 0\nfindDigit(65, 0)       returns -1\nfindDigit(24, -8)      returns -1",
        "solution": "var findDigit = function (num, nth) {\n  if (nth <= 0) return -1;\n  let x = Math.abs(num);\n  for (let i = 1; i < nth; i++) {\n    x = Math.floor(x / 10);\n  }\n  return x % 10;\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Elementary_Expeditions/7%20kyu%20Find%20the%20nth%20Digit%20of%20a%20Number/index.js",
        "methods": [
          "Math.abs",
          "Math.floor"
        ],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      }
    ]
  },
  {
    "name": "Absolute Algorithms",
    "url": "https://www.codewars.com/collections/absolute-algorithms",
    "optional": false,
    "katas": [
      {
        "name": "Longest alphabetical substring",
        "kyu": "6 kyu",
        "done": true,
        "description": "Find the longest substring in alphabetical order.\n\nExample: the longest alphabetical substring in \"asdfaaaabbbbcttavvfffffdf\" is \"aaaabbbbctt\".\n\nThere are tests with strings up to 10 000 characters long so your code will need to be efficient.\n\nThe input will only consist of lowercase characters and will be at least one letter long.\n\nIf there are multiple solutions, return the one that appears first.\n\nGood luck :)",
        "solution": "function longest(str) {\n  return str\n    .match(/a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*/g)\n    .reduce((a, b) => (a.length >= b.length ? a : b));\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Absolute_Algorithms/6%20kyu%20Longest%20alphabetical%20substring/index.js",
        "methods": [
          "match",
          "reduce"
        ],
        "tech": [
          "ternary ( ? : )",
          "arrow function",
          "regex"
        ]
      },
      {
        "name": "String Evaluation",
        "kyu": "6 kyu",
        "done": true,
        "description": "Evaluate the given string with the given conditons.\n\nThe conditions will be passed in an array and will be formatted like this:\n\n{symbol or digit}{comparison operator}{symbol or digit}\n\nReturn the results in an array.\n\nThe characters in the conditions will always be in the string. Characters in the string are chosen from ascii letters + @#$%^&*()_{}[]\nExample\n\ninput string: \"aab#HcCcc##l#\"\nconditions: [\"a<b\", \"#==4\", \"c>=C\", \"H!=a\"]\n\nThe conditions in this example array can be interpreted as:\n\n    \"a<b\": The number of times \"a\" occurs in the string should be less than the number of times \"b\" occurs in the string\n    \"#==4\": \"#\" should occur exactly 4 times in the string\n    \"c>=C\": \"c\" should occur greater than or equal to the number of times \"C\" occurs\n    \"H!=a\": The number of times \"H\" occurs should not equal the number of times \"a\" occurs\n\nIn this example condition 1 is false and 2, 3, 4 are true. So the return value will be an array as such:\n\n[False, True, True, True]",
        "solution": "function string_evaluation(string, condition) {\n  let boos = [],\n    num1,\n    num2,\n    operand;\n  string = Object.entries(\n    [...string].sort().reduce((el, i) => {\n      el[i] = el[i] ? el[i] + 1 : 1;\n      return el;\n    }, {})\n  );\n  condition = condition.map((el) => [...el]);\n\n  for (let i = 0; i < string.length; i++) {\n    for (let j = 0; j < condition.length; j++) {\n      condition[j] = condition[j].map((el) =>\n        el === string[i][0] ? `${string[i][1]}` : el\n      );\n    }\n  }\n  condition = condition\n    .map((el) => el.join(\"\"))\n    .map((el) => {\n      num1 = el.substring(0, 1);\n      (num2 = el.substring(el.length - 1)),\n        (operand = el.substring(1, el.length - 1));\n      if (operand === \"==\") boos.push(num1 === num2);\n      if (operand === \"!=\") boos.push(num1 !== num2);\n      if (operand === \"<\") boos.push(num1 < num2);\n      if (operand === \">\") boos.push(num1 > num2);\n      if (operand === \"<=\") boos.push(num1 <= num2);\n      if (operand === \">=\") boos.push(num1 >= num2);\n    });\n  return boos;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Absolute_Algorithms/6%20kyu%20String%20Evaluation/index.js",
        "methods": [
          "entries",
          "sort",
          "reduce",
          "map",
          "join",
          "substring",
          "push",
          "spread (...)"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "ternary ( ? : )",
          "arrow function",
          "template string"
        ]
      },
      {
        "name": "Fibonacci, Tribonacci and friends",
        "kyu": "6 kyu",
        "done": true,
        "description": "If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. \nIf not, give it a quick look to get how things work.\n\nWell, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following \nelement is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also \nsound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.\n\nWell, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the \nsum of the last X elements - and returns the first n elements of the so seeded sequence.\n\nxbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}\nxbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}\nxbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}\nxbonacci {1,1} produces the Fibonacci sequence",
        "solution": "function Xbonacci(signature, n) {\n  if (signature.length > n) {\n    return signature.slice(0, n);\n  }\n  let result = [...signature];\n  console.log(result)\n  for (let i = 0; result.length < n; i++) {\n    result.push(result.slice(i, result.length).reduce((a, b) => a + b, 0));\n  }\n  return result;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Absolute_Algorithms/6%20kyu%20Fibonacci%2C%20Tribonacci%20and%20friends/index.js",
        "methods": [
          "slice",
          "push",
          "reduce",
          "spread (...)"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "arrow function"
        ]
      },
      {
        "name": "Rot13",
        "kyu": "5 kyu",
        "done": true,
        "description": "Description\nROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. \nROT13 is an example of the Caesar cipher.\n\nCreate a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters \nincluded in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, \nlike in the original Rot13 \"implementation\".",
        "solution": "function rot13(message) {\n  const ABC = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ\";\n  const cipheredABC = \"nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM\";\n  return message\n    .split(\"\")\n    .map(function (character) {\n      let index = ABC.indexOf(character);\n      if (index < 0) {\n        return character;\n      }\n      return cipheredABC[index];\n    })\n    .join(\"\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Absolute_Algorithms/5%20kyu%20Rot13/index.js",
        "methods": [
          "split",
          "map",
          "indexOf",
          "join"
        ],
        "tech": [
          "if / else"
        ]
      },
      {
        "name": "Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!",
        "kyu": "6 kyu",
        "done": true,
        "description": "The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. \nWhat's the use of saying \"Eureka\"? Because this sum gives the same number.\n\nIn effect: 89 = 8^1 + 9^2\n\nThe next number in having this property is 135.\n\nSee this property again: 135 = 1^1 + 3^2 + 5^3\n\nWe need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a \nlist of the sorted numbers in the range that fulfills the property described above.\n\nLet's see some cases:\n\nsumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\nsumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]\n\nIf there are no numbers of this kind in the range [a, b] the function should output an empty list.\n\nsumDigPow(90, 100) == []",
        "solution": "function sumDigPow(a, b) {\n  let eureka = [];\n  for (let i = a; i <= b; i++) {\n    let digit = `${i}`.split(\"\");\n    if (i === digit.reduce((el, val, i) => el + val ** (i + 1), 0))\n      eureka.push(i);\n  }\n  return eureka;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Absolute_Algorithms/6%20kyu%20Take%20a%20Number%20And%20Sum%20Its%20Digits%20Raised%20To%20The%20Consecutive%20Powers%20And%20....%C2%A1Eureka!!/index.js",
        "methods": [
          "split",
          "reduce",
          "push"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "arrow function",
          "template string"
        ]
      }
    ]
  },
  {
    "name": "Various Visuals",
    "url": "https://www.codewars.com/collections/various-visuals",
    "optional": false,
    "katas": [
      {
        "name": "Give me a Diamond",
        "kyu": "6 kyu",
        "done": true,
        "description": "Description\n\nJamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know \nhow to make this happen, he needs your help.\nTask\n\nYou need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces \nshould be removed, and every line must be terminated with a newline character (\\n).\n\nReturn null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.\nExamples\n\nA size 3 diamond:\n\n *\n***\n *\n\n...which would appear as a string of \" *\\n***\\n *\\n\"\n\nA size 5 diamond:\n\n  *\n ***\n*****\n ***\n  *\n\n...that is:\n\n\"  *\\n ***\\n*****\\n ***\\n  *\\n\"",
        "solution": "function diamond(n) {\n  if (n < 1 || n % 2 === 0) {\n    return null;\n  }\n  let diam = \"\",\n    middle = Math.ceil(n / 2);\n  for (let i = 1; i <= n; i++) {\n    if (i <= middle) {\n      diam += \" \".repeat(middle - i) + \"*\".repeat(2 * i - 1) + \"\\n\";\n    } else {\n      diam += \" \".repeat(i - middle) + \"*\".repeat(2 * (n - i) + 1) + \"\\n\";\n    }\n  }\n  return diam;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Various_Visuals/6%20kyu%20Give%20me%20a%20Diamond/index.js",
        "methods": [
          "repeat",
          "Math.ceil"
        ],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      },
      {
        "name": "Moves in squared strings (II)",
        "kyu": "6 kyu",
        "done": true,
        "description": "Description\nYou are given a string of n lines, each substring being n characters long: For example:\n\ns = \"abcd\\nefgh\\nijkl\\nmnop\"\n\nWe will study some transformations of this square of strings.\n\n    Clock rotation 180 degrees: rot\n\n    rot(s) => \"ponm\\nlkji\\nhgfe\\ndcba\"\n\n    selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) It is initial string + string obtained by clock rotation 180 degrees with \n    dots interspersed in order (hopefully) to better show the rotation when printed.\n\n    s = \"abcd\\nefgh\\nijkl\\nmnop\" --> \n    \"abcd....\\nefgh....\\nijkl....\\nmnop....\\n....ponm\\n....lkji\\n....hgfe\\n....dcba\"\n\n    or printed:\n\n|rotation        |selfie_and_rot\n|abcd --> ponm   |abcd --> abcd....\n|efgh     lkji   |efgh     efgh....\n|ijkl     hgfe   |ijkl     ijkl....   \n|mnop     dcba   |mnop     mnop....\n                           ....ponm\n                           ....lkji\n                           ....hgfe\n                           ....dcba\n\nNotice that the number of dots is the common length of \"abcd\", \"efgh\", \"ijkl\", \"mnop\".\nTask:\n\n    Write these two functions rotand selfie_and_rot\n\nand\n\n    high-order function oper(fct, s) where\n\n    fct is the function of one variable f to apply to the string s (fct will be one of rot, selfie_and_rot)\n\nExamples:\n\ns = \"abcd\\nefgh\\nijkl\\nmnop\"\noper(rot, s) => \"ponm\\nlkji\\nhgfe\\ndcba\"\noper(selfie_and_rot, s) => \"abcd....\\nefgh....\\nijkl....\\nmnop....\\n....ponm\\n....lkji\\n....hgfe\\n....dcba\"\n\nNotes:\n\n    The form of the parameter fct in oper changes according to the language. You can see each form according to the language in \"Your test cases\".\n    It could be easier to take these katas from number (I) to number (IV)\n\nForthcoming katas will study other tranformations.\nBash Note:\n\nThe input strings are separated by , instead of \\n. The ouput strings should be separated by \\r instead of \\n. See \"Sample Tests\".",
        "solution": "function rot(strng) {\n  let rotStrng = strng\n    .split(\"\\n\")\n    .reverse()\n    .map((substrng) => substrng.split(\"\").reverse().join(\"\"))\n    .join(\"\\n\");\n  return rotStrng;\n}\n\nfunction selfieAndRot(strng) {\n  let howManyDotNeed = strng.split(\"\\n\")[0].length,\n    selfieStrng = strng\n      .split(\"\\n\")\n      .map((substrng) => substrng + `${\".\".repeat(howManyDotNeed)}`),\n    rotStrng = strng\n      .split(\"\\n\")\n      .reverse()\n      .map(\n        (substrng) =>\n          `${\".\".repeat(howManyDotNeed)}` +\n          substrng.split(\"\").reverse().join(\"\")\n      ),\n    selfieAndRotStrn = selfieStrng.concat(rotStrng).join(\"\\n\");\n  return selfieAndRotStrn;\n}\n\nfunction oper(fct, s) {\n  return fct(s);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Various_Visuals/6%20kyu%20Moves%20in%20squared%20strings%20(II)/index.js",
        "methods": [
          "split",
          "reverse",
          "map",
          "join",
          "repeat",
          "concat"
        ],
        "tech": [
          "arrow function",
          "template string"
        ]
      },
      {
        "name": "IQ Test",
        "kyu": "6 kyu",
        "done": true,
        "description": "Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. \nBob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the \ngiven numbers finds one that is different in evenness, and return a position of this number.\n\n! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)\nExamples:\n\niqTest(\"2 4 7 8 10\") => 3 // Third number is odd, while the rest of the numbers are even\n\niqTest(\"1 2 1 1\") => 2 // Second number is even, while the rest of the numbers are odd",
        "solution": "function iqTest(numbers) {\n  let numberArray = numbers.split(\" \").map((number) => Number(number)),\n    even = numberArray.filter((number) => number % 2 === 0),\n    odd = numberArray.filter((number) => number % 2 !== 0);\n\n  return odd.length < even.length\n    ? numberArray.indexOf(odd[0]) + 1\n    : numberArray.indexOf(even[0]) + 1;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Various_Visuals/6%20kyu%20IQ%20Test/index.js",
        "methods": [
          "split",
          "map",
          "filter",
          "indexOf",
          "Number"
        ],
        "tech": [
          "ternary ( ? : )",
          "arrow function"
        ]
      },
      {
        "name": "Unary function chainer",
        "kyu": "6 kyu",
        "done": true,
        "description": "Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that \ndoes a left fold on the given functions.\n\nchained([a,b,c,d])(input)\n\nShould yield the same result as\n\nd(c(b(a(input))))",
        "solution": "function chained(functions) {\n  return input => functions.reduce((res, func) => func(res), input);\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Various_Visuals/6%20kyu%20Unary%20function%20chainer/index.js",
        "methods": [
          "reduce"
        ],
        "tech": [
          "arrow function"
        ]
      },
      {
        "name": "Simple Fun #166: Best Match",
        "kyu": "5 kyu",
        "done": true,
        "description": "Task\n\n\"AL-AHLY\" and \"Zamalek\" are the best teams in Egypt, but \"AL-AHLY\" always wins the matches between them. \"Zamalek\" managers want to know what \nis the best match they've played so far.\n\nThe best match is the match they lost with the minimum goal difference. If there is more than one match with the same difference, choose the one \n\"Zamalek\" scored more goals in.\n\nGiven the information about all matches they played, return the index of the best match (0-based). If more than one valid result, return the smallest index.\nExample\n\nFor ALAHLYGoals = [6,4] and zamalekGoals = [1,2], the output should be 1.\n\nBecause 4 - 2 is less than 6 - 1\n\nFor ALAHLYGoals = [1,2,3,4,5] and zamalekGoals = [0,1,2,3,4], the output should be 4.\n\nThe goal difference of all matches are 1, but at 4th match \"Zamalek\" scored more goals in. So the result is 4.\nInput/Output\n\n    [input] integer array ALAHLYGoals\n\nThe number of goals \"AL-AHLY\" scored in each match.\n\n    [input] integer array zamalekGoals\n\nThe number of goals \"Zamalek\" scored in each match. It is guaranteed that zamalekGoals[i] < ALAHLYGoals[i] for each element.\n\n    [output] an integer\n\nIndex of the best match.",
        "solution": "function bestMatch(ALAHLYGoals, zamalekGoals) {\n  let firstMatch = ALAHLYGoals[0] - zamalekGoals[0], \n      bestMatch = 0,\n      zamalek = zamalekGoals[0]\n  for (let i = 0; i<ALAHLYGoals.length ; i++) {\n    let diff = ALAHLYGoals[i] - zamalekGoals[i]\n    if (firstMatch > diff) {\n      firstMatch = diff\n      zamalek = zamalekGoals[i]\n      bestMatch = i\n    } else if(diff === firstMatch && zamalekGoals[i] > zamalek) {\n      firstMatch = diff;\n      zamalek = zamalekGoals[i];\n      bestMatch = i;\n    }\n  }\n  return bestMatch\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Various_Visuals/5%20kyu%20Simple%20Fun%20%23166%20-%20Best%20Match/index.js",
        "methods": [],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      },
      {
        "name": "Haskell List Dot Notation",
        "kyu": "5 kyu",
        "done": true,
        "description": "I would like to mimic some of the amazing things Haskell can do with lists.\n\nThere are lots of things to do, so I'm going to break the work into several katas.\n\nI'll warn you that perhaps you will have to refactor some parts of the code going forward, so you need to write the cleanest code possible.\n\nHaskell lists are similar to JavaScript arrays.\n\nFor example, this is ok in both programming languages:\n\n[1,-3,4]\n\nBut Haskell allows you to define lists like this:\n\n[1..5] --equivalent to [1,2,3,4,5]\n\nOr this way:\n\n[1,4..11] --equivalent to [1,4,7,10]\n\nThis is also valid:\n\n[5,4..2] --equivalent to [5,4,3,2]\n\nA formal definition provided by nivoliev:\n\n    a list of individual elements : the resulting list is the list made of the individual elements as in classical Javascript\n    a range in the form start..end : if end >= start, the list is [start, start+1, start+2, ..., end] otherwise the result is []\n    a single element a followed by a range : let step = start - a\n        if start === end the list is [a,start]\n        if step is positive and end > start then the list is [a, a+step, a+2*step, ...] as long as a+k*step <= end\n        if step is negative and end < start then the list is [a, a+step, a+2*step, ...] as long as a-k*step >= end\n    otherwise the list is []\n\nSome clarifying examples:\n\n[2,3,-5,3] -- just like in JavaScript : [2,3,-5,3]\n[1..5] -- goes forward with step 1 : [1,2,3,4,5]\n[1,3..7] -- goes forward with step 2 (3 - 1) : [1,3,5,7]\n[6,5..3] -- goes back with step -1 = (5 - 6) : [6,5,4,3]\n[6,4..0] -- goes back with step -2 = (4 -6) : [6, 4, 2, 0]\n[5..3] -- default step is 1 while the range is decreasing : []\n[10,1..10] -- goes back with step -9 for an increasing range : [10]\n[1,1..10] -- goes forwaed with step is 0 = ( 1 - 1) : infitite list [1,1,...]. Do not worry about this case in this kata for this, we will \ndeal with it in the third part.\n[1..9,12..15] -- invalid since one single range is allowed\n[1,2..20,25] -- invalid since a range has to be the final item\n[1,2,3..20] -- invalid since at most one inidivual element can be provided before a range\n//See the tests for more examples",
        "solution": "function range(start, end, step = 1) {\n  if (start > end) {\n    step = -step;\n  }\n  const length = Math.floor(Math.abs((end - start) / step)) + 1;\n  return Array.from(Array(length), (x, index) => start + index * step);\n}\n\nfunction ArrayComprehension(options) {\n  let result = [],\n    arrayFromOptions = `${Object.values(options)}`.trim().split(\",\");\n\n  for (let i = 0; i < arrayFromOptions.length; i++) {\n    if (arrayFromOptions[i] === \"\") return [];\n    if (arrayFromOptions.length <= 2 || !`${arrayFromOptions}`.includes(\"..\"))\n      result.push(+arrayFromOptions[i]);\n\n    if (arrayFromOptions[i].includes(\"..\") && arrayFromOptions.length !== 1) {\n      let dotless = arrayFromOptions[i].replace(/\\.\\./g, \" \").split(\" \");\n      let first = +arrayFromOptions[0];\n      let last = +dotless[1];\n      let step = Math.abs(+dotless[0] - first);\n      result = range(first, last, step);\n    }\n\n    if (arrayFromOptions.length === 1 && `${arrayFromOptions}`.includes(\"..\")) {\n      let dotless = arrayFromOptions[i].replace(/\\.\\./g, \" \").split(\" \");\n      let first = +dotless[0];\n      let last = +dotless[1];\n      if (first < last) {\n        let step = 1;\n        result = range(first, last, step);\n      } else {\n        return [];\n      }\n    }\n  }\n  return result;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Various_Visuals/5%20kyu%20Haskell%20List%20Dot%20Notation/index.js",
        "methods": [
          "from",
          "values",
          "trim",
          "split",
          "includes",
          "push",
          "replace",
          "Math.floor",
          "Math.abs"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "arrow function",
          "template string",
          "regex"
        ]
      }
    ]
  },
  {
    "name": "Recursive Roses",
    "url": "https://www.codewars.com/collections/recursive-roses",
    "optional": false,
    "katas": [
      {
        "name": "Vigenère Cipher Helper",
        "kyu": "4 kyu",
        "done": true,
        "description": "The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a \nlater French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key).\n\nThe cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname \"le chiffre indéchiffrable\" \nor \"the indecipherable cipher.\"\n\nFrom Wikipedia:\n\n    The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is \n    a simple form of polyalphabetic substitution.\n\n    . . .\n\n    In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift 3, A would become D, B\n    would become E, Y would become B and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.\n\nAssume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they \nare part of the alphabet -- this is not the case here.\n\nThe shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.\n\nVisual representation:\n\n\"my secret code i want to secure\"  // message\n\"passwordpasswordpasswordpasswor\"  // key\n\nWrite a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.\nExample\n\nvar alphabet = 'abcdefghijklmnopqrstuvwxyz';\nvar key = 'password';\n\n// creates a cipher helper with each letter substituted\n// by the corresponding character in the key\nvar c = new VigenèreCipher(key, alphabet);\n\nc.encode('codewars'); // returns 'rovwsoiv'\nc.decode('laxxhsj');  // returns 'waffles'\n\nAny character not in the alphabet must be left as is. For example (following from above):\n\nc.encode('CODEWARS'); // returns 'CODEWARS'",
        "solution": "function VigenèreCipher(key, abc) {\n  \n  this.encode = function (str) {\n    let encoded = \"\";\n    for (let i = 0; i < str.length; i++) {\n      let character = str[i];\n      let keycharacter = key[i % key.length];\n      if (abc.includes(character)) {\n        encoded += abc.charAt(\n          (abc.indexOf(character) + abc.indexOf(keycharacter)) % abc.length\n        );\n      } else {\n        encoded += character;\n      }\n    }\n    return encoded;\n  };\n  \n  this.decode = function (str) {\n    let decoded = \"\";\n    for (let i = 0; i < str.length; i++) {\n      let secretcharacter = str[i];\n      let keycharacter = key[i % key.length];\n      if (abc.includes(secretcharacter)) {\n        let index =\n          (abc.indexOf(secretcharacter) +\n            abc.length -\n            abc.indexOf(keycharacter)) %\n          abc.length;\n        let character = abc[index];\n        decoded += character;\n      } else {\n        decoded += secretcharacter;\n      }\n    }\n    return decoded;\n  };\n  \n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Recursive_Roses/4%20kyu%20Vigen%C3%A8re%20Cipher%20Helper/index.js",
        "methods": [
          "includes",
          "charAt",
          "indexOf"
        ],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      },
      {
        "name": "Dependency Injection",
        "kyu": "4 kyu",
        "done": false,
        "description": "Did you hear about Dependency Injection pattern? The main idea of this pattern is that you may have ability to pass dependencies into your function in \nany order and they will be resolved automatically. Take a look at this:\n\nvar myDependentFunc = inject(function (secondDepency, firstDependency) {\n  firstDependency();\n  secondDepency();\n});\n\nmyDependentFunc();\n\nAs you can see we just put some variables into the function's signature and work with them as usualy. But we know nothing about where these variables \nare located! Let's assume that all dependencies are stored in the single hash object (for instanse 'deps') and the injector function will be sought among \n'deps' properties:\n\nvar deps = {\n  'firstDependency': function () {return 'this is firstDependency';},\n  'secondDepency': function () {return 'this is secondDepency';},\n};\n\nOk, I hope this is clear. Also, in order to setup DependencyInjector (DI) we need to specify dependency object:\n\nvar DI = function (dependency) {\n  this.dependency = dependency;\n};\n\nYour task is create DI.prototype.inject method that will return a new function with resolved dependencies. And don't forget about nested functions. \nYou shouldn't handle them.",
        "solution": "",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Recursive_Roses/4%20kyu%20Dependency%20Injection/index.js",
        "methods": [],
        "tech": []
      },
      {
        "name": "Advanced Events",
        "kyu": "4 kyu",
        "done": true,
        "description": "This excercise is a more sophisticated version of Simple Events kata.\n\nYour task is to implement an Event constructor function for creating event objects\n\nvar event = new Event();\n\nwhich comply to the following:\n\n    an event object should have .subscribe() and .unsubscribe() methods to add and remove handlers\n\n    .subscribe() and .unsubscribe() should be able take an arbitrary number of arguments and tolerate invalid arguments (not functions, or for unsubscribe, \n    functions which are not subscribed) by simply skipping them\n\n    multiple subscription of the same handler is allowed, and in this case unsubscription removes the last subscription of the same handler\n\n    an event object should have an .emit() method which must invoke all the handlers with the arguments provided\n\n    .emit() should use its own invocation context as handers' invocation context\n\n    the order of handlers invocation must match the order of subscription\n\n    handler functions can subscribe and unsubscribe handlers, but the changes should only apply to the next emit call - the handlers for an ongoing emit \n    call should not be affected\n\n    subscribe, unsubscribe and emit are the only public properties that are allowed on event objects (apart from Object.prototype methods)\n\nCheck the test fixture for usage example",
        "solution": "",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Recursive_Roses/4%20kyu%20Advanced%20Events/index.js",
        "methods": [],
        "tech": []
      },
      {
        "name": "How many numbers III?",
        "kyu": "4 kyu",
        "done": false,
        "description": "We want to generate all the numbers of three digits where:\n\n    the sum of their digits is equal to 10.\n\n    their digits are in increasing order (the numbers may have two or more equal contiguous digits)\n\nThe numbers that fulfill the two above constraints are: 118, 127, 136, 145, 226, 235, 244, 334\n\nMake a function that receives two arguments:\n\n    the sum of digits value\n\n    the desired number of digits for the numbers\n\nThe function should output an array with three values: [1,2,3]\n\n1 - the total number of possible numbers\n\n2 - the minimum number\n\n3 - the maximum number\n\nThe example given above should be:\n\nfindAll(10, 3) => [8, \"118\", \"334\"]\n\nIf we have only one possible number as a solution, it should output a result like the one below:\n\nfindAll(27, 3) => [1, \"999\", \"999\"]\n\nIf there are no possible numbers, the function should output the empty array.\n\nfindAll(84, 4) => []\n\nThe number of solutions climbs up when the number of digits increases.\n\nfindAll(35, 6) => [123, '116999', '566666']\n\nFeatures of the random tests:\n\n    Number of tests: 112\n    Sum of digits value between 20 and 65\n    Amount of digits between 2 and 17",
        "solution": "",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Recursive_Roses/4%20kyu%20How%20many%20numbers%20III/index.js",
        "methods": [],
        "tech": []
      },
      {
        "name": "Boggle Word Checker",
        "kyu": "4 kyu",
        "done": false,
        "description": "Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array \nof individual characters, e.g.:\n\n[ [\"I\",\"L\",\"A\",\"W\"],\n  [\"B\",\"N\",\"G\",\"E\"],\n  [\"I\",\"U\",\"A\",\"O\"],\n  [\"A\",\"S\",\"R\",\"L\"] ]\n\nValid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.\n\nFor example, in the above board \"BINGO\", \"LINGO\", and \"ILNBIA\" would all be valid guesses, while \"BUNGIE\", \"BINS\", and \"SINUS\" would not.\n\nYour function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.\n\nTest cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters). \nYou do not have to check whether the string is a real word or not, only if it's a valid guess.",
        "solution": "",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Recursive_Roses/4%20kyu%20Boggle%20Word%20Checker/index.js",
        "methods": [],
        "tech": []
      }
    ]
  },
  {
    "name": "Tactical Teaspoons",
    "url": "https://www.codewars.com/collections/tactical-teaspoons",
    "optional": true,
    "katas": [
      {
        "name": "Make a spiral",
        "kyu": "3 kyu",
        "done": true,
        "description": "Your task, is to create a NxN spiral with a given size.\n\nFor example, spiral with size 5 should look like this:\n\n00000\n....0\n000.0\n0...0\n00000\n\nand with the size 10:\n\n0000000000\n.........0\n00000000.0\n0......0.0\n0.0000.0.0\n0.0..0.0.0\n0.0....0.0\n0.000000.0\n0........0\n0000000000\n\nReturn value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:\n\n[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]\n\nBecause of the edge-cases for tiny spirals, the size will be at least 5.\n\nGeneral rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.",
        "solution": "var spiralize = function (size) {\n  let arr = Array(size)\n    .fill(0)\n    .map((i) => Array(size));\n  let oneOrZero = 1;\n  for (let j = 0; j < Math.ceil(size / 2); j++) {\n    for (let i = j; i < size - j; i++) {\n      arr[i][j] = arr[j][i] = oneOrZero;\n      arr[i][size - 1 - j] = arr[size - 1 - j][i] = oneOrZero;\n    }\n    oneOrZero = ++oneOrZero % 2;\n    arr[j + 1][j] = arr[j + 2][j] === 1 ? 0 : oneOrZero;\n  }\n  return arr;\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Tactical_Teaspoons/3%20kyu%20Make%20a%20spiral/index.js",
        "methods": [
          "fill",
          "map",
          "Math.ceil"
        ],
        "tech": [
          "for ciklus",
          "ternary ( ? : )",
          "arrow function"
        ]
      },
      {
        "name": "Esolang Interpreters #4 - Boolfuck Interpreter",
        "kyu": "3 kyu",
        "done": false,
        "description": "Esolang Interpreters #4 - Boolfuck Interpreter\nAbout this Kata Series\n\n\"Esolang Interpreters\" is a Kata Series that originally began as three separate, independent esolang interpreter Kata authored by \n@donaldsebleung which all shared a similar format and were all somewhat inter-related. Under the influence of a fellow Codewarrior, \nthese three high-level inter-related Kata gradually evolved into what is known today as the \"Esolang Interpreters\" series.\n\nThis series is a high-level Kata Series designed to challenge the minds of bright and daring programmers by implementing interpreters \nfor various esoteric programming languages/Esolangs, mainly Brainfuck derivatives but not limited to them, given a certain specification \nfor a certain Esolang. Perhaps the only exception to this rule is the very first Kata in this Series which is intended as an introduction/taster \nto the world of esoteric programming languages and writing interpreters for them.\nThe Language\n\nBoolfuck is an esoteric programming language (Esolang) based on the famous Brainfuck (also an Esolang) which was invented in 2004 or \n2005 according to the official website. It is very similar to Brainfuck except for a few key differences:\n\n    Boolfuck works with bits as opposed to bytes\n    The tape for Brainfuck contains exactly 30,000 cells with the pointer starting from the very left; Boolfuck contains an infinitely \n    long tape with the pointer starting at the \"middle\" (since the tape can be extended indefinitely either direction)\n    Each cell in Boolfuck can only contain the values 0 or 1 (i.e. bits not bytes) as opposed to Brainfuck which has cells containing values \n    ranging from 0 to 255 inclusive.\n    The output command in Boolfuck is ; NOT .\n    The - command does not exist in Boolfuck since either + or - would flip a bit anyway\n\nAnyway, here is a list of commands and their descriptions:\n\n    + - Flips the value of the bit under the pointer\n    , - Reads a bit from the input stream, storing it under the pointer. The end-user types information using characters, though. Bytes are read \n    in little-endian order—the first bit read from the character a, for instance, is 1, followed by 0, 0, 0, 0, 1, 1, and finally 0. If the \n    end-of-file has been reached, outputs a zero to the bit under the pointer.\n    ; - Outputs the bit under the pointer to the output stream. The bits get output in little-endian order, the same order in which they \n    would be input. If the total number of bits output is not a multiple of eight at the end of the program, the last character of output \n    gets padded with zeros on the more significant end.\n    < - Moves the pointer left by 1 bit\n    > - Moves the pointer right by 1 bit\n    [ - If the value under the pointer is 0 then skip to the corresponding ]\n    ] - Jumps back to the matching [ character, if the value under the pointer is 1\n\nIf you haven't written an interpreter for Brainfuck yet I recommend you to complete this Kata first.\nThe Task\n\nWrite a Boolfuck interpreter which accepts up to two arguments. The first (required) argument is the Boolfuck code in the form of a string. \nThe second (optional) argument is the input passed in by the end-user (i.e. as actual characters not bits) which should default to \"\" \nif not provided. Your interpreter should return the output as actual characters (not bits!) as a string.\n\nfunction boolfuck (code, input = \"\")\n\nPreloaded for you is a function brainfuckToBoolfuck()/brainfuck_to_boolfuck()/BrainfuckToBoolfuck() which accepts 1 required argument \n(the Brainfuck code) and returns its Boolfuck equivalent should you find it useful.\n\nPlease note that your interpreter should simply ignore any non-command characters. This will be tested in the test cases.\n\nIf in doubt, feel free to refer to the official website (link at top).\n\nGood luck :D\nKata in this Series\n\n    Esolang Interpreters #1 - Introduction to Esolangs and My First Interpreter (MiniStringFuck)\n    Esolang Interpreters #2 - Custom Smallfuck Interpreter\n    Esolang Interpreters #3 - Custom Paintfuck Interpreter\n    Esolang Interpreters #4 - Boolfuck Interpreter",
        "solution": "",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Tactical_Teaspoons/3%20kyu%20Esolang%20Interpreters%20%234%20-%20Boolfuck%20Interpreter/index.js",
        "methods": [],
        "tech": []
      }
    ]
  },
  {
    "name": "Utmost Umbrellas",
    "url": "https://www.codewars.com/collections/utmost-umbrellas",
    "optional": false,
    "katas": [
      {
        "name": "Zeros and Ones",
        "kyu": "6 kyu",
        "done": true,
        "description": "Given an array containing only zeros and ones, find the index of the zero that, if converted to one, will make the longest sequence of ones.\n\nFor instance, given the array:\n\n[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]\n\nreplacing the zero at index 10 (counting from 0) forms a sequence of 9 ones:\n\n[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1]\n                  '------------^------------'\n\nYour task is to complete the function that determines where to replace a zero with a one to make the maximum length subsequence.\n\nNotes:\n\n    If there are multiple results, return the last one:\n\n[1, 1, 0, 1, 1, 0, 1, 1] ==> 5\n\n    The array will always contain only zeros and ones.\n\nCan you do this in one pass?",
        "solution": "function replaceZero(arr) {\n  let ones = arr.join``.split`0`;\n  let lengthOfOnes = [];\n  for (let i = 0; i < ones.length - 1; i++) {\n    lengthOfOnes.push(ones[i].length + ones[i + 1].length);\n  }\n  let index = lengthOfOnes.lastIndexOf(Math.max(...lengthOfOnes));\n  let count = -1;\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === 0) count++;\n    if (count === index) return i;\n  }\n  return index;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Utmost_Umbrellas/6%20kyu%20Zeros%20and%20Ones/index.js",
        "methods": [
          "push",
          "lastIndexOf",
          "Math.max",
          "spread (...)"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "template string"
        ]
      },
      {
        "name": "Sum of a Sequence [Hard-Core Version]",
        "kyu": "6 kyu",
        "done": true,
        "description": "As the title suggests, this is the hard-core version of another neat kata.\n\nThe task is simple to explain: simply sum all the numbers from the first parameter being the beginning to the second parameter being \nthe upper limit (possibly included), going in steps expressed by the third parameter:\n\nsequenceSum(2,2,2) === 2\nsequenceSum(2,6,2) === 12 // 2 + 4 + 6\nsequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5\nsequenceSum(1,5,3) === 5 // 1 + 4\n\nIf it is an impossible sequence (with the beginning being larger the end and a positive step or the other way around), just return 0. \nSee the provided test cases for further examples :)\n\nNote: differing from the other base kata, much larger ranges are going to be tested, so you should hope to get your algo optimized and \nto avoid brute-forcing your way through the solution.",
        "solution": "function sequenceSum(begin, end, step){\n  let result = 0;\n  for (let i = begin; step > 0 ? i <= end : i >= end; i+=step)\n    result +=i;\n  return result;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Utmost_Umbrellas/6%20kyu%20Sum%20of%20a%20Sequence%20%5BHard-Core%20Version%5D/index.js",
        "methods": [],
        "tech": [
          "for ciklus",
          "ternary ( ? : )"
        ]
      },
      {
        "name": "Find the missing term in an Arithmetic Progression",
        "kyu": "6 kyu",
        "done": true,
        "description": "An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. \nYou are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is \nmissing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.\n\nYou have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.\nExample\n\nfindMissing([1, 3, 5, 9, 11]) == 7\n\nPS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the \nalgo that way. Have fun!",
        "solution": "var findMissing = function (list) {\n  let difference = (list[list.length - 1] - list[0]) / list.length,\n    i;\n  for (i = 0; list.length > i; i++) {\n    if (list[i] + difference !== list[i + 1]) {\n      return list[i] + difference;\n    }\n  }\n};",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Utmost_Umbrellas/6%20kyu%20Find%20the%20missing%20term%20in%20an%20Arithmetic%20Progression/index.js",
        "methods": [],
        "tech": [
          "for ciklus",
          "if / else"
        ]
      },
      {
        "name": "Simple Fun #160: Cut The Ropes",
        "kyu": "6 kyu",
        "done": true,
        "description": "Task\n\nYou are given N ropes, where the length of each rope is a positive integer. At each step, you have to reduce all the ropes by the length of the smallest rope.\n\nThe step will be repeated until no ropes are left. Given the length of N ropes, print the number of ropes that are left before each step.\nExample\n\nFor a = [3, 3, 2, 9, 7], the result should be [5, 4, 2, 1]\n\nYou have 5 ropes: 3 3 2 9 7 ( 5 left) step 1: 1 1 0 7 5 ( 4 left) step 2: 0 0 0 6 4 ( 2 left) step 3: 0 0 0 0 2 ( 1 left) step 4: 0 0 0 0 0 \nHence the result is [5, 4, 2, 1]\nInput/Output\n\n    [input] integer array a\n\nlength of each rope.\n\n3 <= a.length <= 2000\n\n1 <= a[i] <= 100\n\n    [output] an integer array\n\nnumber of ropes before each step.",
        "solution": "",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Utmost_Umbrellas/6%20kyu%20Simple%20Fun%20%23160%20-%20Cut%20The%20Ropes/index.js",
        "methods": [],
        "tech": []
      },
      {
        "name": "Convert string to camel case",
        "kyu": "6 kyu",
        "done": true,
        "description": "Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be\ncapitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).\nExamples\n\n\"the-stealth-warrior\" gets converted to \"theStealthWarrior\"\n\"The_Stealth_Warrior\" gets converted to \"TheStealthWarrior\"",
        "solution": "function toCamelCase(str){\n  str = str.split('');\n  return str.map(function(el, i){\n    if(el == '-' || el == '_'){\n      el = str[i+1].toUpperCase();\n      str.splice(i+1, 1);\n    }\n    return el;\n  }).join('');\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Utmost_Umbrellas/6%20kyu%20Convert%20string%20to%20camel%20case/index.js",
        "methods": [
          "split",
          "map",
          "toUpperCase",
          "splice",
          "join"
        ],
        "tech": [
          "if / else"
        ]
      },
      {
        "name": "Primes in numbers",
        "kyu": "5 kyu",
        "done": true,
        "description": "Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :\n\n \"(p1**n1)(p2**n2)...(pk**nk)\"\n\nwith the p(i) in increasing order and n(i) empty if n(i) is 1.\n\nExample: n = 86240 should return \"(2**5)(5)(7**2)(11)\"",
        "solution": "const isPrime = num => {\n    for(let i = 2, s = Math.sqrt(num); i <= s; i++)\n        if(num % i === 0) return false; \n    return num > 1;\n}\n\n\nfunction primeFactors(n){\n  if (isPrime(n)) return `(${n})`\n  let counter = {}\n  let result =\"\"\n  for (let i= 2 ; i<= n ; i++) {\n    if (isPrime(i) && n%i === 0) {\n    counter[i] = counter[i] ? counter[i] + 1 : 1\n    n=n/i\n      i= i-1\n    primeFactors(n)\n    }\n  }\n  return result = `(${Object.entries(counter).map(el => el.join('**'))\n    .join(')(').replace(/\\*\\*1/g, '')})`\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Utmost_Umbrellas/5%20kyu%20Primes%20in%20numbers/index.js",
        "methods": [
          "entries",
          "map",
          "join",
          "replace",
          "Math.sqrt"
        ],
        "tech": [
          "for ciklus",
          "if / else",
          "ternary ( ? : )",
          "arrow function",
          "template string",
          "regex",
          "rekurzió"
        ]
      },
      {
        "name": "Can you get the loop ?",
        "kyu": "5 kyu",
        "done": true,
        "description": "You are given a node that is the beginning of a linked list. This list always contains a tail and a loop. Your objective is to determine the length of the loop.\n\nFor example in the following picture the tail's size is 3 and the loop size is 12:\n\n// Use the `getNext' method or 'next' property to get the following node.\nnode.getNext()\nnode.next\n\nNote: do NOT mutate the nodes!\n\n    Thanks to shadchnev, I broke all of the methods from the Hash class.\n\n    Don't miss dmitry's article in the discussion after you pass the Kata !!",
        "solution": "",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Utmost_Umbrellas/5%20kyu%20Can%20you%20get%20the%20loop/index.js",
        "methods": [],
        "tech": []
      },
      {
        "name": "Merged String Checker",
        "kyu": "5 kyu",
        "done": true,
        "description": "At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.\n\nThe restriction is that the characters in part1 and part2 should be in the same order as in s.\n\nThe interviewer gives you the following example and tells you to figure out the rest from the given test cases.\n\nFor example:\n\n'codewars' is a merge from 'cdw' and 'oears':\n\n    s:  c o d e w a r s   = codewars\npart1:  c   d   w         = cdw\npart2:    o   e   a r s   = oears",
        "solution": "function isMerge(s, part1, part2) {\n  let stack = [[s, part1, part2]];\n  if (s.length !== part1.length + part2.length) {\n    return false;\n  }\n  while (stack.length) {\n    [s, part1, part2] = stack.shift();\n    if (!s.length) {\n      return true;\n    }\n    if (part1[0] === s[0]) {\n      stack.push([s.slice(1), part1.slice(1), part2]);\n    }\n    if (part2[0] === s[0]) {\n      stack.push([s.slice(1), part1, part2.slice(1)]);\n    }\n  }\n  return false;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Utmost_Umbrellas/5%20kyu%20Merged%20String%20Checker/index.js",
        "methods": [
          "shift",
          "push",
          "slice"
        ],
        "tech": [
          "while ciklus",
          "if / else"
        ]
      },
      {
        "name": "Human Readable Time",
        "kyu": "5 kyu",
        "done": true,
        "description": "Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)\n\n    HH = hours, padded to 2 digits, range: 00 - 99\n    MM = minutes, padded to 2 digits, range: 00 - 59\n    SS = seconds, padded to 2 digits, range: 00 - 59\n\nThe maximum time never exceeds 359999 (99:59:59)\n\nYou can find some examples in the test fixtures.",
        "solution": "function humanReadable(seconds) {\n  let second = seconds;\n  let minutes = ~~(second / 60);\n  second -= minutes * 60;\n  let hours = ~~(minutes / 60);\n  minutes -= hours * 60;\n  let result = [`${hours}`, `${minutes}`, `${second}`];\n  return result.map((el) => (el.length === 1 ? \"0\" + el : el)).join(\":\");\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Utmost_Umbrellas/5%20kyu%20Human%20Readable%20Time/index.js",
        "methods": [
          "map",
          "join"
        ],
        "tech": [
          "ternary ( ? : )",
          "arrow function",
          "template string"
        ]
      },
      {
        "name": "Josephus Permutation",
        "kyu": "5 kyu",
        "done": true,
        "description": "This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, \nhe and his 40 soldiers were trapped in a cave by the Romans during a siege.\n\nRefusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one \nman every three, until one last man was left (and that it was supposed to kill himself to end the act).\n\nWell, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they \ndidn't exactly follow through the original idea.\n\nYou are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted \nas if they were in a circle and counted out every k places until none remained.\n\nTips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.\n\nFor example, with n=7 and k=3 josephus(7,3) should act this way.\n\n[1,2,3,4,5,6,7] - initial sequence\n[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]\n[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]\n[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]\n[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]\n[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]\n[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]\n[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]\n\nSo our final result is:\n\njosephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]\n\nFor more info, browse the Josephus Permutation page on wikipedia; related kata: Josephus Survivor.\n\nAlso, live game demo by OmniZoetrope.",
        "solution": "function josephus(items, k) {\n  let result = [],\n    lengthOfItems = items.length,\n    index = 0;\n  while (result.length < lengthOfItems) {\n    index = (index + k - 1) % items.length;\n    result.push(items[index]);\n    items.splice(index, 1);\n  }\n  return result;\n}",
        "refactor": "",
        "file": "https://github.com/mazsola739/rikatas/blob/main/Utmost_Umbrellas/5%20kyu%20Josephus%20Permutation/index.js",
        "methods": [
          "push",
          "splice"
        ],
        "tech": [
          "while ciklus"
        ]
      }
    ]
  }
];
