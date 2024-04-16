# Sample Idea App Backend

This repository contains the backend code for a sample Idea App, built using Node.js and Express.js. It demonstrates CRUD operations for managing ideas.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js ([Download Node.js](https://nodejs.org/))
- npm (Node Package Manager, usually installed with Node.js)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/sample-idea-app-backend.git
Navigate to the project directory:



cd sample-idea-app-backend
Install dependencies:


npm install
Usage
To start the server, run:


npm start
The server will start running at http://localhost:3000.

API Endpoints
Create an Idea
URL: /ideas
Method: POST
Request Body:
json
Copy code
{
    "title": "Your Idea Title",
    "description": "Your Idea Description"
}
Response: Returns the newly created idea object.
Get All Ideas
URL: /ideas
Method: GET
Response: Returns an array of all ideas.
Get an Idea by ID
URL: /ideas/:id
Method: GET
Response: Returns the idea object corresponding to the provided ID.
Update an Idea
URL: /ideas/:id
Method: PUT
Request Body: Include the fields to be updated.
json
Copy code
{
    "title": "Updated Idea Title",
    "description": "Updated Idea Description"
}
Response: Returns the updated idea object.
Delete an Idea
URL: /ideas/:id
Method: DELETE
Response: Returns a success message upon deletion.
Testing
API endpoints are tested using Mocha and Chai.

To run the tests, use:


npm test
