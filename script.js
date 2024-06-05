// quotes data
let quotesArrayData = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote: "True friends stab you in the front.",
    author: "Oscar Wilde",
  },
  {
    quote: "In war there is no prize for the runner-up.",
    author: "General Omar Bradley",
  },
  {
    quote:
      "The death of one man is a tragedy. The death of millions is a statistic.",
    author: "Joseph Stalin",
  },
  {
    quote: "Death solves all problems - no man, no problem.",
    author: "Joseph Stalin",
  },
  {
    quote: "In the Soviet army it takes more courage to retreat than advance.",
    author: "Joseph Stalin",
  },
  {
    quote:
      "It is foolish and wrong to mourn the men who died. Rather we should thank God that such men lived.",
    author: "General George S. Patton",
  },
  {
    quote:
      "Death is nothing, but to live defeated and inglorious is to die daily.",
    author: "Napoleon Bonaparte",
  },
  {
    quote: "Only the dead have seen the end of war.",
    author: "Plato",
  },
  {
    quote:
      "It is well that war is so terrible, or we should get too fond of it.",
    author: "Robert E. Lee",
  },
  {
    quote: "A soldier will fight long and hard for a bit of colored ribbon.",
    author: "Napoleon Bonaparte",
  },
  {
    quote: "He who fears being conquered is sure of defeat.",
    author: "Napoleon Bonaparte",
  },
  {
    quote:
      "You must not fight too often with one enemy, or you will teach him all your art of war.",
    author: "Napoleon Bonaparte",
  },
  {
    quote:
      "Older men declare war. But it is the youth that must fight and die.",
    author: "Herbert Hoover",
  },
  {
    quote: "All wars are civil wars, because all men are brothers.",
    author: "Francois Fenelon",
  },
  {
    quote: "When the pin is pulled, Mr. Grenade is not our friend.",
    author: "Someone",
  },
  {
    quote: "If you can't remember, the claymore is pointed toward you.",
    author: "Someone",
  },
  {
    quote: "Do not be sorry, be better!",
    author: "Kratos",
  },
  {
    quote: "There are consquences of killing a god!",
    author: "Kratos",
  },
  {
    quote: "Death can have me, when it Earns me!",
    author: "Kratos",
  },
  {
    quote: "Even if the skies were shorter than my knees, I would not kneel.",
    author: "Maharaj Chhatrapati Shivaji",
  },
];

// picking random array value
function getRandomQuotes(quotesArray) {
  return Math.floor(Math.random() * quotesArray);
}

// get quotes
function getQuotes() {
  let randomNumber = getRandomQuotes(quotesArrayData.length);
  document.getElementById("quote").innerHTML =
    ' " ' + quotesArrayData[randomNumber].quote + '" ';

  document.getElementById("author").innerHTML =
    " - " + quotesArrayData[randomNumber].author;
}
