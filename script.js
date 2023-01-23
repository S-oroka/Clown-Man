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
let chosenWord = null
let pressedLetter = null
let guessedLetters = []
let guesses = 6

const cntBtn = document.getElementById("countries")
const occBtn = document.getElementById("occupations")
const carBtn = document.getElementById("cars")
const wordSpace = document.getElementById("wordSpace")
const letters = document.querySelectorAll(".letter")



//Functions

// For loop to determine which category button is clicked and return the words of that category.
// Take a random index of the wordlist and return the innertext
// takes chosenword, splits into individual indicies, and returns "_" for each letter
const chooseWord = () => {
    chosenWord = wordList.countries[Math.floor(Math.random() * wordList.countries.length)].toLowerCase();
    console.log(chosenWord);
    return chosenWord;
}

// Covers up the chosen word and displays it
const maskWord = (chosenWord) => {
    let word = chosenWord.split("");
    let wordSpaces = word.map((x) => {
        return x = "_";
    })
    wordSpace.innerHTML = wordSpaces
}

// Console log the letter for each button that is clicked
const displayLetter = () => {
    for (let i = 0; i < letters.length; i++) {
        letters[i].addEventListener("click", (e) => {
            pressedLetter = e.target.innerHTML.toLowerCase()
            guessedLetters.push(pressedLetter)
            if (chosenWord.includes(pressedLetter)) {
                console.log("Correct!");
            }
            else {
                console.log("Incorrect!")
            }
        }
    )}
}
    // if the pressed letter is within the string, console log Hello


    chooseWord()
    maskWord(chosenWord)
    displayLetter()




// If the inner text of the button with id "Letter" that is pressed, is within the chosen word, change that letter in masked word to the letter that was clicked.








// occBtn.addEventListener("click", () => {
//     chosenWord = wordList.occupations[Math.floor(Math.random() * wordList.occupations.length)];
//     let word = chosenWord.split("");
//     let wordSpaces = word.map((x) => {
//         return x = "_";
//     })
//     console.log(wordSpaces);
// })

// carBtn.addEventListener("click", () => {
//     chosenWord = wordList.carBrands[Math.floor(Math.random() * wordList.carBrands.length)];
//     let word = chosenWord.split("");
//     let wordSpaces = word.map((x) => {
//         return x = "_";
//     })
//     console.log(wordSpaces);
// })