# WDI_PROJECT_1 

##CONOR MCGREGOR THEMED WHACK-A-MOLE

This is my first project from my Web Development Immersive course at General Assembly. The task was to build a fully functional game using the skills we've learnt till now. I decided to make a whack-a-mole game and give it a Conor Mcgregor theme as he is a rising star in current popular culture. 

You can play the game here: [***Conor McGregor's Whack-A-Bum***](https://conor-whack-a-bum.herokuapp.com/) 

![alt text](http://imgur.com/BCl9r92.png "Conor McGregor Whack-A-Bum Start Screen") 

![alt text](http://imgur.com/CCcbzU6.png "Conor McGregor Whack-A-Bum Mid Game") 

###How to play
To play this game you must hit all the pictures of Eddie Alvarez (the fighter/bum), as they pop up and by doing so you reduce his health. If you miss Eddie or if you hit the picture of the ring girl or Dana White, you lose health. To win you must reduce Eddie's health to zero. If you however lose all of your health, you lose. 

###What was used 

To build the game I utilised HTML5, CSS, Javascript and JQuery. 

###Approach to building the game

Wrote Pseudocode then continued to use objective orienteated programming to systematically build the functions which created the games. 

###Wins 

For the most part I was able to quickly and effectively organise and put the code together to create the game and win logic. 

I am also quite happy with the theme of the game as Conor McGregor is popular in modern culture and the game would appeal to a real audience, as opposed to it being just a simple game that may have good coding but doesn't have any meaning to it.  

###Challenges faced 

One of the challenges I initially faced was getting the moles to conituously pop up without the prompt of the start button. I was able to overcome this challenge by creating an "if else" statement that stated that if neither the computer nor the player are dead, the game should go back and loop through the create and append mole functions. 

This new "if else" function gave birth to a new problem however as even after one of the players health was reduced to zero, it would loop through the mole function one more time and create an additional unneccessary mole. I managed to solve this problem by evoking the "if else" statement right before another mole is picked and by creating another variable with value "true" that would be set to "false" if the player won or lost and putting it as a condition for the pick mole function to run.

###Future plans for the game 

In the future I hope to:

Make the game more of a story mode style game. The game would start with Conor's first fight in the UFC and continue through his career to modern day. 

Make the site responsive to other devices and browser sizes. 

Redesign the game so that the background is a UFC cage and the fighters (moles) are popping up around the cage to be hit. 