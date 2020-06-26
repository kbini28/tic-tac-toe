
# Tic-Tac-Toe Client Application

This application allows the client to play a classic game of tic-tac-toe in the browser. This game is created using a single-page application, allowing for a smooth and user-friendly interface.

The application allows the user to create a new account, then sign in to the game. Clicking the 'New Game' button will reveal a new game board, and the game board displays an X for player one and an O for player two in alternating fashion. When a player reaches three in a row, the game ends and displays a message that X or O has won the game, depending on who has three in a row. In the event of a tie, the game displays a tie message, declaring everyone a loser!

## Important Links


* [GitHub Repository](https://github.com/kbini28/tic-tac-toe)
* [Application](kbini28.github.io/tic-tac-toe/)


## Planning Story

My plan for building the game app was to start with the authentication. Allowing a user to create an account and sign in to the app are the first steps to playing, so they were the most important features to start with, followed by change password and finally sign out. I constructed a basic gameboard using Bootstrap to create the boxes, along with an event handler to record and update the API with each click. This was without a doubt the most difficult part, as I spent several days creating the basic logic getting the game to record x and o on the board, then preventing a space from being overwritten, and finally updating the game logic to declare a winner. I found that my own logic was different than the way the game logic should be written, which became my biggest pain point. Once I was able to find the correct order of operations (with much appreciated help from classmates and instructors), the rest of the game fell into place quite nicely. I should have kept all of the CSS and styling until the end, but I chose to stlye my app "after-hours". It helped ease the pressure of not having a completed project, but also caused headaches, as I ended up with extra class and ID labels, and very specific style code that could have been organized and executed better if it was all done at once (after the main pieces were all constructed).

### User Stories

  * As a user, I want to see my win stats to know if player 1 or player 2 is better.
  * As a user, I want to choose my own game piece.
  * As a user, I want a visually pleasing game board.
  * As a user, I want automatic responses to starting a new game, clicking the game board, etc.
  * As a user, I want a game board with a fast response, no loading.

I learned later during project planning that my user stories were a bit too narrowed in, and should include more basic goals, like "As a user, I want to sign in."

### Technologies Used

  * HTML
  * CSS/SASS and Bootstrap
  * JavaScript
  * jQuery

### Unsolved Problems

My biggest regret as I mentioned was styling sporadically. I would like to fix many of the styling aspects to clean up my code and my game board/buttons.
I was not able to toggle a few of the buttons that I would have liked - specifically figuring out how to toggle the game index button to show all games once, and then hide them when clicked a second time.

### Wireframe

[Wireframe](https://i.imgur.com/4PUmQKG.png)
