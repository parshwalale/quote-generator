let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Code. Debug. Repeat. - Unknown",
    "Never stop learning. - Albert Einstein",
    "Consistency beats talent. - Kevin Durant"
];

function newQuote(){
    let randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("Quote").innerText = quotes[randomIndex];
}