/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
let quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        source: "Oscar Wild"
    },
    {
        quote: "I have a dream...",
        source: "Martin Luther King Jr."
    },
    {
        quote: "The only thing that is constant is change.",
        source: "Heraclitus"
    },
    {
        quote: "The only true wisdom is in knowing you know nothing.",
        source: "Socrates"
    },
    {
        quote: "The best way to predict the future is to create it",
        source: "Peter Ducker"
    },
    {
        quote: "Things without all remedy should be without regards. What's done is done.",
        source: "William Shakespeare",
        citation: "Macbeth Scene 3 Act 2",
        year: "Early 17th century"
    },
    {
        quote: "Every man dies, but not every man really lives.",
        source: "William Wallace",
        citation: "Braveheart film",
        year: "1995" 
    },
    {
        quote: "Cowards die many times before their deaths; The valiant never taste of death but once.",
        source: "William Shakespeare",
        citation: "Julius Caesar",
        year: "1599"
        
    }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {

    const drawnIndex = Math.floor(Math.random() * quotes.length);
    return quotes[drawnIndex];
}


/***
* `printQuote` function
***/
function printQuote() {

    const currQuoteQuote = document.getElementById("quote-box").querySelector(".quote").innerHTML;
    let newQuote = getRandomQuote();
    while (newQuote.quote == currQuoteQuote) {
        newQuote = getRandomQuote();
    } 
    
    let str = 
        `
        <p class="quote">${newQuote.quote}</p>
        <p class="source">${newQuote.source}`;
        if (newQuote.hasOwnProperty("citation")) str += `<span class="citation">${newQuote.citation}</span>`;
        if (newQuote.hasOwnProperty("year")) str += `<span class="year">${newQuote.year}</span>`;
        str += '</p>';
    let box = document.getElementById('quote-box');
    box.innerHTML = str;
}


/***
* click event listener for the print quote button
* The code will look like the following. You need to complete it.

***/

document.addEventListener('DOMContentLoaded', printQuote);
document.getElementById('load-quote').addEventListener("click", printQuote);