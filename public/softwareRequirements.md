# Software Requirements

We hope to create a game that is a source of fun and entertainment.

Who couldn't use a little more educational entertainment in their life.

Creating an environment where people can enjoy learning while playing.

## in-scope

Netlify deployment, Heroku deployment, Auth0 system, MongoDB

## out-scope

Writing our own appropriate measure to approve quiz content.

## MVP

Create a quiz,save a quiz on MongoDB, edit a quiz, delete a quiz, take a quiz, get questions from an API, display an about us page, Auth0

### Stretch

Multiplayer, global stats, personal stats, sharing a quiz with everyone on the public page.

## Functional Requirements
https://trello.com/b/PRIB97xY/top-of-the-heap

## Data Flow

A new player joins us on the about us page. They use a user's email to find the quiz they want from the list of quizzes the email's owner created. The player can now take the selected quiz. The player decides to make a quiz of their own. The quiz is successfully created, and the now host leaves the page. The host can return later and search for their quiz by id. The host notices a typo, and edits the quiz. The host decides that the quiz they created isn't one they want to keep so they delete it. Now without a quiz they decide to create a new quiz using generated trivia questions, and finally store that on our database.

## Non-functional

Auth0 will act as the main security feature. Using program architecture with Auth0 tokens we should be able to reduce risk. As we hope to reach our stretch goal of adding in a multiplayer feature, we planned out our UI to accommodate the adjustments that will likely be included later.
