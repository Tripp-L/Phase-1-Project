Casino Games!

This is a page where a user can play free casino games!
As a user, I want to:
See a list of images that represent different casino games. Have easy access to go play that game. Have an easy way to find the game I'm looking for. Be able to comment and rate each game.

Deliverables:

- Make a GET to 'fetch' all casino games.
- Make a 'card' to include description of game and button for url link.
- Make a 'dropdown' button to filter games by first letter of game category.
  -Make a 'submit' button for rating and comments.

"EventListeners":

- 'click' for each image to display description of the game.
- 'click' for URL link to take user to that game.
- 'change' dropdown to filter game categories by first letter.
- 'submit' to add rating and comments.

Stretches:

- Make a 'like button' that will increase likes for each game.
- Make a 'form' to add a new game.
- Make a 'button' that when 'clicked' will go to the next game (or if enough games, button will go to next page of games).

How it all works:

1. Fetching Game Data:

   - The code starts by fetching game data from the specified URL (http://localhost:3000/games).

- It uses 'fetch' to make an HTTP GET request to the server.
  - Once the response is received, it is converted to JSON format using res.json().

2. Displaying Games ('displayGames' function):

   - After receiving the game data in JSON format, the 'displayGames' function is called.
   - This function takes an array of game objects ('gameArr') as input.
   - It first finds the containers where game cards and the filtered game list will be displayed ('imgContainer' ).
   - For each game object in the array, it creates a game card using the 'createGameCard' function and appends it to the 'imgContainer'.
   - It sets up event listeners for the dropdown menu ('dropDown') to filter games by the selected letter, and for the game form ('gameForm') and review form ('reviewForm') to handle form submissions.

3. Creating Game Cards ('createGameCard' function):

   - This function takes a game object (gameObj) as input and creates a card element (div) for that game.
   - It creates elements for displaying the game type, name, image, play button, like button, and likes count.
   - Event listeners are added to the play button to redirect the user to the game URL when clicked, and to the like button to increment the likes count when clicked.

4. Handling Form Data (collectFormData function):

   - This function takes a form element (form) as input and collects data from its fields.
   - It uses FormData to extract key-value pairs of form data and stores them in an object (data), which is then returned.

5. Adding New Games (addNewGameToPage function):

   - When a user submits the game form, the form data is collected and passed to this function.
   - It creates a new game object with the provided data and adds it to the page by creating a new game card using the createGameCard function.

6. Adding Reviews (addReviewToPage and createReviewCard functions):

   - Similar to adding new games, when a user submits the review form, the form data is collected and passed to addReviewToPage.
   - 'addReviewToPage' creates a review card using createReviewCard and appends it to the reviews container.

7. Filtering Games (filterGames and displayFilteredGames functions):

   - When the user selects a letter from the dropdown menu, the filterGames functions called.
   - It filters the game array (gameArr) based on the selected letter using Array.filter.
   - The filtered games are then passed to displayFilteredGames, which updates the game list (gameList) with the filtered games.

Overall, the code fetches game data from a server, displays game cards and a filtered game list on the webpage, handles form submissions for adding new games and reviews, and allows users to filter games by the first letter of their types.
