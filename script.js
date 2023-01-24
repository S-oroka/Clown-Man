// 1. function to start the game
// 2. Create array to type letters into
// 3. We need to create dictionary that has a bunch of words

const wordList = {
    countries: ["Azerbaijan", "Ethiopia", "Nicaragua", "Venezuela", "Djibouti", "Antigua", "Iceland", "Tajikistan", "Tuvalu", "Argentina", "Germany", "Togo", "Palau"],
    occupations: ["Neurologist", "Pediatrician", "Othopedist", "Software Engineer", "Teacher", "Lawyer", "Counselor", "Psychaiatrist"],
    carBrands: ["Renault", "Volvo", "Audi", "Fiat", "Alfa Romeo", "Chevrolet", "Genesis", "Rolls Royce", "Volkswagen", "Citroen"]
}


let playerInput = null
let wordSpaces = null
let chosenWord = wordList.countries[Math.floor(Math.random() * wordList.countries.length)].toLowerCase();
let maskedWord = chosenWord.replace(/[a-z]/g, " _")
let pressedLetter = null
let guessedLetters = []
let guesses = 6

const cntBtn = document.getElementById("countries")
const occBtn = document.getElementById("occupations")
const carBtn = document.getElementById("cars")
const wordSpace = document.getElementById("wordSpace")
const letters = document.querySelectorAll(".letter")

wordSpace.innerHTML = maskedWord

// Console log the letter for each button that is clicked
const displayLetter = () => {
    for (let i = 0; i < letters.length; i++) {
        letters[i].addEventListener("click", (e) => {
            pressedLetter = e.target.innerHTML.toLowerCase()
            guessedLetters.push(pressedLetter)
            if (chosenWord.includes(pressedLetter)) {
                let word = chosenWord.split("");
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === pressedLetter) {
    
                    }
                }
            }
            else {

                guesses -= 1
            }
        }
        )
    }
}
// if the pressed letter is within the string, console log Hello


displayLetter()



