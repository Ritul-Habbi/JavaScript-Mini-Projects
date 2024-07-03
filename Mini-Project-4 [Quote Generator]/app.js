let button = document.querySelector("button");
let quote = document.querySelector("span");
let person = document.querySelector(".person");

let quotesArray = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "Don't count the days, make the days count.",
        author: "Muhammad Ali",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
];

button.addEventListener("click", () => {
    console.log(quotesArray[Math.floor(Math.random() * 10).quote]);
    let e = Math.floor(Math.random() * 10);
    person.innerText = quotesArray[e].author;
    quote.innerText = quotesArray[e].quote;
});

