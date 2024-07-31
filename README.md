# Todo List Application

## Overview
This is a Todo List application built using React.js. It allows users to create, update, mark as done, and search tasks. The tasks are displayed in an expandable list format showing the description and timestamp of the last update when expanded.

## Features
- Create Task: Add new tasks.
- Update Task: Edit existing tasks.
- Mark as Done: Mark tasks as completed.
- Search Tasks: Filter tasks based on a search query.
- Expandable List: Display tasks with additional details when expanded.
- URL Parameters: Handle search functionality via URL parameters.

## System Design
 - React.js: Used for building the frontend user interface.
 - Dummy JSON Data: Used as a data repository.
 - URL Parameters: Managed using react-router-dom for search functionality.

## Implementation
 The application consists of three main components:
 - TaskList: Displays the list of tasks.
 - Task: Displays individual tasks with options to mark as done, edit, and expand for more details.
 - TaskForm: Form to add new tasks.

## Future Enhancements
 - Add user authentication.
 - Implement backend with a database to persist tasks.
 - Enhance UI with more styling options.

## Setup and Run
 - git clone https://github.com/Vipinm8924/ToDoListApp.git
 - cd ToDoListApp
 - npm install
 - npm install react-router-dom
 - npm start
