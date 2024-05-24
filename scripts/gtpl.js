// Array of programming languages
let languages = [
    "ABC",
    "Assembly",
    "Bash",
    "Batch",
    "C#",
    "C++",
    "Clojure",
    "CoffeeScript",
    "CSS",
    "CSV",
    "Dart",
    "F#",
    "Go",
    "Groovy",
    "HLSL",
    "HTML",
    "Java",
    "JavaScript",
    "JSON",
    "JSX",
    "Julia",
    "Kotlin",
    "Less",
    "Lua",
    "Makefile",
    "Markdown",
    "MDX",
    "Mermaid",
    "MJML",
    "Perl",
    "PHP",
    "PowerShell",
    "Pug",
    "Python",
    "R",
    "Raku",
    "Razor",
    "Ruby",
    "Rust",
    "SCSS",
    "SQL",
    "Swift",
    "TOML",
    "TSX",
    "Twig",
    "TypeScript",
    "VBS",
    "WAT",
    "XML",
    "YAML",
    "Zig"
];  

// Function to pick a random language
function pickRandomLanguage() {
    return languages[Math.floor(Math.random() * languages.length)];
}

// Function to check the user's guess
function guessLanguage(guess) {
    const lowercaseGuess = guess.toLowerCase();
    const targetLanguage = languages.find(language => language.toLowerCase() === lowercaseGuess);
    if (targetLanguage) {
        alert("Congratulations! You guessed it. The programming language was: " + targetLanguage);
        restart();
    } else {
        alert("Sorry, that's not correct. Keep guessing!");
    }
}

// Function to generate a new language
function generateNewLanguage() {
    return pickRandomLanguage();
}

// Function to load a snippet from a file
function loadSnippet(language) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `../snippets/${language.toLowerCase()}.txt`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const snippet = xhr.responseText;
            console.log(snippet);
        }
    };
    xhr.send();
}

// Function to start the game
function startGame() {
    const targetLanguage = pickRandomLanguage();
    console.log("I'm thinking of a programming language. Can you guess what it is?");
    console.log("Type 'guessLanguage('language')' to guess.")

    // Listen for user input in the console
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            const guess = prompt("Enter your guess:").trim();
            guessLanguage(guess);
        }
    });

    // Load a snippet of code for the target language
    loadSnippet(targetLanguage);
}

function restart() {
    console.clear();
    startGame();
}

// Start the game when the page loads
restart();