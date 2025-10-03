let display = document.getElementById('display');
let index = -1;

let quotes = [
    {
        title: "Perseverance",
        AuthQuote: "It always seems impossible until it’s done.",
        AuthName: "Nelson Mandela",
    },
    {
        title: "Success",
        AuthQuote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        AuthName: "Winston Churchill",
    },
    {
        title: "Learning",
        AuthQuote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        AuthName: "Mahatma Gandhi",
    },
    {
        title: "Wisdom",
        AuthQuote: "The only true wisdom is in knowing you know nothing.",
        AuthName: "Socrates",
    },
    {
        title: "Courage",
        AuthQuote: "Do what you can, with what you have, where you are.",
        AuthName: "Theodore Roosevelt",
    },
    {
        title: "Innovation",
        AuthQuote: "Imagination is more important than knowledge.",
        AuthName: "Albert Einstein",
    },
    {
        title: "Motivation",
        AuthQuote: "Don’t let yesterday take up too much of today.",
        AuthName: "Will Rogers",
    },
    {
        title: "Leadership",
        AuthQuote: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
        AuthName: "Ronald Reagan",
    },
    {
        title: "Resilience",
        AuthQuote: "Fall seven times and stand up eight.",
        AuthName: "Japanese Proverb",
    },
    {
        title: "Creativity",
        AuthQuote: "You can’t use up creativity. The more you use, the more you have.",
        AuthName: "Maya Angelou",
    }
];



let displaQuote = (quote) => {
    display.innerHTML = '';
    let figure = document.createElement('figure');
    figure.innerHTML = `
        <blockquote class="blockquote">
            <strong> ${quote.title}</strong>
            <p>${quote.AuthQuote}</p>
        </blockquote>
        <figcaption class="blockquote-footer">
            <cite title="${quote.AuthName}">${quote.AuthName}</cite>
        </figcaption>
    `
    display.appendChild(figure);
}

const nextQuote=()=>{
    if(index >= quotes.length-1){
        index = -1;
    }
    displaQuote(quotes[++index]);
}

const prevQuote=()=>{
    if(index <= 0){
        index = quotes.length;  
    }
    displaQuote(quotes[--index])
}

nextQuote();