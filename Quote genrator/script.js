var user_uiquote = document.querySelector("#user_ui");
let quotes = {
    "quote1": "The only way to do great work is to love what you do. - Steve Jobs",
    "quote2": "The purpose of our lives is to be happy. - Dalai Lama",
    "quote3": "Life is what happens when you're busy making other plans. - John Lennon",
    "quote4": "Don't let yesterday take up too much of today. - Will Rogers",
    "quote5": "You only live once, but if you do it right, once is enough. - Mae West",
    "quote6": "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "quote7": "Life is either a daring adventure or nothing at all. - Helen Keller",
    "quote8": "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "quote9": "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "quote10": "The good life is one inspired by love and guided by knowledge. - Bertrand Russell",
    "quote11": "The unexamined life is not worth living. - Socrates",
    "quote12": "Turn your wounds into wisdom. - Oprah Winfrey",
    "quote13": "The way to get started is to quit talking and begin doing. - Walt Disney",
    "quote14": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "quote15": "Life is really simple, but we insist on making it complicated. - Confucius",
    "quote16": "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "quote17": "Life is made of ever so many partings welded together. - Charles Dickens",
    "quote18": "Life is what we make it, always has been, always will be. - Grandma Moses",
    "quote19": "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "quote20": "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey"
};

var rd = Math.floor(Math.random()*21)+1; // random number between 1 and 5
var quote_rand = "quote"+`${rd}`;
user_uiquote.innerText = quotes[quote_rand]; // use bracket notation here
