// Array of programming languages
let languages = ["JavaScript", "Python", "Java", "C++", "Ruby", "PHP", "Swift", "C#", "Go", "TypeScript", "Rust"];

// Function to pick a random language
function pickRandomLanguage() {
    return languages[Math.floor(Math.random() * languages.length)];
}

// Function to check the user's guess
function guessLanguage(guess) {
    const targetLanguage = languages.find(language => language.toLowerCase() === guess.toLowerCase());
    if (targetLanguage) {
        console.clear()
        alert("Congratulations! You guessed it. The programming language was: " + targetLanguage);
        // Generate a new language and add it to the array
        const newLanguage = generateNewLanguage();
        languages.push(newLanguage);
    } else {
        alert("Sorry, that's not correct. Keep guessing!");
    }
}

// Function to generate a new language
function generateNewLanguage() {
    startGame();
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

// Start the game when the page loads
startGame();