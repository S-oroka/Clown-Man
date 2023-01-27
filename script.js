// 1. function to start the game
// 2. Create array to type letters into
// 3. We need to create dictionary that has a bunch of words

const wordList = {
    countries: ["Azerbaijan", "Ethiopia", "Nicaragua", "Venezuela", "Djibouti", "Antigua", "Iceland", "Tajikistan", "Tuvalu", "Argentina", "Germany", "Togo", "Palau"],
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
const image = document.querySelector("img")

remainGuess.innerHTML = "Remaining Guesses: " + guesses
wordSpace.innerHTML = maskedLetters


// Console log the letter for each button that is clicked
const startGame = () => {
    for (let i = 0; i < letters.length; i++) {
        letters[i].addEventListener("click", (e) => {
            letters[i].style.display = "none"
            pressedLetter = e.target.innerHTML.toLowerCase()
            guessedLetters.push(pressedLetter)
            if (chosenWord.includes(pressedLetter)) {
                for (let i = 0; i < chosenWord.length; i++) {
                    // for every letter in chosen word, if that index is = the letter pressed
                    // the index of masked letters is also equal to the letter pressed
                    if (chosenWord[i] === pressedLetter) {
                        maskedLetters[i] = pressedLetter
                        wordSpace.innerHTML = maskedLetters
                        if (guesses === 0 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "You win! But the Earth almost turned into Pangea again!"
                            }
                        else if (guesses === 1 && !maskedLetters.includes("_")) {
                                remainGuess.innerHTML = "You win! But the Earth almost turned into Pangea again!"
                        }
                        else if (guesses === 2 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "You win! The Earth was mostly saved!"
                        }
                        else if (guesses === 3 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "You win! The Earth changed quite a bit!"
                        }
                        else if (guesses === 4 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "You win! The Earth shifted a bit though!"
                        }
                        else if (guesses === 5 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "Amazing job! You saved the Earth from moving!"
                        }
                        else if (guesses === 6 && !maskedLetters.includes("_")) {
                            remainGuess.innerHTML = "Amazing job! You saved the Earth from moving!"
                        }
                    }
                }
            }
            else {
                guesses -= 1
                if (guesses === 5) {
                    image.src = "/Users/jakubsoroka/Desktop/Bootcamp/Projects/Clown-Man/Pangea Pics/1.jpg"
                    
                }
                else if (guesses === 4) {
                    image.src = "/Users/jakubsoroka/Desktop/Bootcamp/Projects/Clown-Man/Pangea Pics/2.jpg"
                    
                }
                else if (guesses === 3) {
                    image.src = "/Users/jakubsoroka/Desktop/Bootcamp/Projects/Clown-Man/Pangea Pics/3.jpeg"
                }
                else if (guesses === 2) {
                    image.src = "/Users/jakubsoroka/Desktop/Bootcamp/Projects/Clown-Man/Pangea Pics/4.jpg"
                }
                else if (guesses === 1) {
                    image.src = "/Users/jakubsoroka/Desktop/Bootcamp/Projects/Clown-Man/Pangea Pics/4.jpg"
                }
                else if (guesses === 0) {
                    image.src = "/Users/jakubsoroka/Desktop/Bootcamp/Projects/Clown-Man/Pangea Pics/5.jpg"
                }
                // if letter has been clicked, don't subtract from guesses
                remainGuess.innerHTML = "Remaining Guesses: " + guesses
                if (guesses <= 0) {
                    remainGuess.innerHTML = "You lose, Earth has turned into Pangea :( Try again!"

                }
            }
        }
        )
    }
}

const reset = () => {
    resetButton.addEventListener('click', () => {
        location.reload()
    })
}

// if the pressed letter is within the string, console log Hello
// for every index in maskedword, replace the _ with the pressed letter within chosenWord
// grab the index of the pressed letter in chosenWord and store it in variable



startGame()
reset()

