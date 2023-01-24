// 1. function to start the game
// 2. Create array to type letters into
// 3. We need to create dictionary that has a bunch of words

const wordList = {
    countries: ["Azerbaijan", "Ethiopia", "Nicaragua", "Venezuela", "Djibouti", "Antigua", "Iceland", "Tajikistan", "Tuvalu", "Argentina", "Germany", "Togo", "Palau"],
    occupations: ["Neurologist", "Pediatrician", "Othopedist", "Software Engineer", "Teacher", "Lawyer", "Counselor", "Psychaiatrist"],
    carBrands: ["Renault", "Volvo", "Audi", "Fiat", "Alfa Romeo", "Chevrolet", "Genesis", "Rolls Royce", "Volkswagen", "Citroen"]
}


let wordSpaces = null
let chosenWord = wordList.countries[Math.floor(Math.random() * wordList.countries.length)].toLowerCase();
let maskedWord = chosenWord.replace(/[a-z]/g, "_")
let maskedLetters = maskedWord.split("")
let pressedLetter = null
let guessedLetters = []
let guesses = 6
console.log(chosenWord);

const cntBtn = document.getElementById("countries")
const occBtn = document.getElementById("occupations")
const carBtn = document.getElementById("cars")
const wordSpace = document.getElementById("wordSpace")
const letters = document.querySelectorAll(".letter")
const remainGuess = document.getElementById("guessesRemaining")
const resetButton = document.getElementById("reset")

remainGuess.innerHTML = "Remaining Guesses: " + guesses
wordSpace.innerHTML = maskedLetters


// Console log the letter for each button that is clicked
const displayLetter = () => {
    for (let i = 0; i < letters.length; i++) {
        letters[i].addEventListener("click", (e) => {
            pressedLetter = e.target.innerHTML.toLowerCase()
            guessedLetters.push(pressedLetter)
            if (chosenWord.includes(pressedLetter)) {
                for (let i = 0; i < chosenWord.length; i++) {
                    // for every letter in chosen word, if that index is = the letter pressed
                    // the index of masked letters is also equal to the letter pressed
                    if (chosenWord[i] === pressedLetter) {
                        maskedLetters[i] = pressedLetter
                        wordSpace.innerHTML = maskedLetters
                        if (guesses >= 0 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "You win! Press the button below to restart!"
                        }

                    }
                }
            }
            else {
                guesses -= 1
                remainGuess.innerHTML = "Remaining Guesses: " + guesses
                if (guesses <= 0) {
                    remainGuess.innerHTML = "You lose :( Try again!"

                }
            }
        }
        )
    }
}

const reset = () => {
    resetButton.addEventListener('click', () => {
        let wordSpaces = null
        let chosenWord = wordList.countries[Math.floor(Math.random() * wordList.countries.length)].toLowerCase();
        let maskedWord = chosenWord.replace(/[a-z]/g, "_")
        let maskedLetters = maskedWord.split("")
        let pressedLetter = null
        let guessedLetters = []
        let guesses = 6
        console.log(chosenWord);
        remainGuess.innerHTML = "Remaining Guesses: " + guesses
        wordSpace.innerHTML = maskedLetters
    })
}

// if the pressed letter is within the string, console log Hello
// for every index in maskedword, replace the _ with the pressed letter within chosenWord
// grab the index of the pressed letter in chosenWord and store it in variable



displayLetter()
reset()


