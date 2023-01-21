// 1. function to start the game
// 2. Create array to type letters into
// 3. We need to create dictionary that has a bunch of words

const wordList = ["Hello", "Dang", "Beastly"]
let inputBox = document.getElementById("inputBox")
let playerInput = null
let wordSpaces = null
let chosenWord = null

//Functions

// Take a random index of the wordlist and return the innertext
const genRandomWord = (wordList) => {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
};

// For each letter of the word, create an empty array containing the length of that word    
const createSpaces = (chosenWord) => {
    wordSpaces = new Array(chosenWord.length)
    console.log(wordSpaces)
};



// Need something that creates inputs for every space in wordSpaces

// 
const typeLetter = (chooseLetter) => {
    playerInput = chooseLetter.addEventListener("keydown", (e) => {
        console.log(playerInput)
    }
    )
}


genRandomWord(wordList)
createSpaces(chosenWord)
typeWord(playerInput)