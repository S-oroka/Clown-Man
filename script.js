// 1. function to start the game
// 2. Create array to type letters into
// 3. We need to create dictionary that has a bunch of words

const wordList = {
    countries: ["Azerbaijan", "Ethiopia", "Nicaragua", "Venezuela", "Djibouti", "Antigua and Barbuda", "Faroe Islands", "Iceland", "Tajikistan", "Tuvalu", "Argentina", "Germany", "Togo", "Palau"],
    occupations: ["Neurologist", "Pediatrician", "Othopedist", "Software Engineer", "Teacher", "Lawyer", "Counselor", "Psychaiatrist"],
    carBrands: ["Renault", "Volvo", "Audi", "Fiat", "Alfa Romeo", "Chevrolet", "Genesis", "Rolls Royce", "Volkswagen", "Citroen"]
}


let playerInput = null
let wordSpaces = null
let chosenWord = null

const cntBtn = document.getElementById("countries")
const occBtn = document.getElementById("occupations")
const carBtn = document.getElementById("cars")




//Functions

// For loop to determine which category button is clicked and return the words of that category.
// Take a random index of the wordlist and return the innertext
const chooseWord = (e) => {
    cntBtn.addEventListener("click", () => {
        chosenWord = wordList.countries[Math.floor(Math.random() * wordList.countries.length)];
        let word = chosenWord.split("");
        let wordSpaces = word.map((x) => {
            return x = "_";
        })
        console.log(wordSpaces);
    })

    occBtn.addEventListener("click", () => {
        chosenWord = wordList.occupations[Math.floor(Math.random() * wordList.occupations.length)];
        let word = chosenWord.split("");
        let wordSpaces = word.map((x) => {
            return x = "_";
        })
        console.log(wordSpaces);
    })

    carBtn.addEventListener("click", () => {
        chosenWord = wordList.carBrands[Math.floor(Math.random() * wordList.carBrands.length)];
        let word = chosenWord.split("");
        let wordSpaces = word.map((x) => {
            return x = "_";
        })
        console.log(wordSpaces);
    })
}

chooseWord()
// document.getElementsByClassName("category").addEventListener("click", (e) => {
//     if (EventTarget.id === "countries") {
//         chosenWord = wordList.countries[Math.floor(Math.random() * wordList.countries.length)];
//         return chosenWord;
//     }
//     else if (EventTarget.id === "occupations") {
//         chosenWord = wordList.occupations[Math.floor(Math.random() * wordList.occupations.length)];
//         return chosenWord;
//     }
//     else if (EventTarget.id === "cars") {
//         chosenWord = wordList.carBrands[Math.floor(Math.random() * wordList.carBrands.length)];
//         return chosenWord;
//     }
// })

// console.log(chosenWord);


// takes chosenword, splits into individual indicies, and returns "_" for each letter
chooseWord()