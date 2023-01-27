# **Pangea**
### Date 1/21/2023
### By: Jakub Soroka
#### [LinkedIn](https://www.linkedin.com/in/jakubsoroka) | [Send me an Email](mailto:jsorokaGIS@gmail.com)
***
## ***Description***
###  Welcome to Pangea, a game where you test your word country skills! This game has you guess the correct letters to discover the hidden country names. However, you only have a certain amount of guesses. If you don't guess the word in the amount of guesses given, you lose and Earth once again gets turned into Pangea! 
<br/>

## [Click to play Pangea!](https://pangea.surge.sh)

<br/>

![Pangea Gif](https://media4.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif?cid=ecf05e47ea87fe7y37voiejtjis2k9o57o2p90tnikpb9xm9&rid=giphy.gif&ct=g)

***
## ***Technologies***
* JavaScript
* HTML
* CSS
* MarkDown
* VS Code
***

## ***My Project's Journey*** ##
* To start, I created 2 empty HTML files, one for a cover and one for the actual game, a CSS file and a Javascript file.
* In my HTML files, I added boiler plates and set up a basic outline for what my pages would look like and addded buttons representing each letter in the alphabet.
* Next, in my JS file, I added some global variables to store inputs such as the guess count and chosen word and created an array of words I would choose.
* After this, I created some DOM elemtents and started writing my main code block.
* The main code essentially takes each button and assigns an event listener to it, returning the innerHTML. If the chosen word includes that HTML (meaning that letter), it runs an if statement. This if statement goes through each letter in the chosen word and wherever that letter is, it takes that index and replaces the clicked letter into it.
* I then have multiple if statements declaring different texts depending on how many guesses it took the user to answer.
* If the selected letter was not in the chosen word, I decresed the guesses by 1 and updated the picture to reflect how many guesses were left.
* I also made sure to not decrese the guess count after a correct letter was selected
* Finally, I added a reset function which was linked to the reset button at the bottom of the game page.
***
## ***Checklist***
* [X] Utilize flexbox or grid
* [X] Include 2 HTML files with navigation between them
* [X] Minimum 2 even handlers
* [X] 20 meaningful git commits
* [X] Properly indented and spaced, no commented out code
* [X] Display proper use of global variables and function parameters
* [X] Use camelCase for Javascript variables
* [X] Be deployed on Surge
* [X] Remove console.logs
***
## ***Resources*** #

### Preview Image: [Pangea Gif](https://media1.giphy.com/media/7gFhELYUTxsvC/giphy.gif?cid=790b7611b59e9be62e4407195e3a4ded6000e436cbed43ad&rid=giphy.gif&ct=g)

### Task Manager: [Trello Board](https://trello.com/invite/b/5Jjki0q3/ATTI11d99b05d6ebf797865b190f32202122371B6927/project-1)