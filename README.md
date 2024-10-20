# Chess in Angular

Welcome to **Chess in Angular**! This project is a web-based chess game built using Angular, showcasing the classic game of chess with modern web technologies.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Project Structure](#project-structure)

## Introduction

This project is an implementation of a chess game using **Angular**. The goal of this project is to provide a fully functional chess game with user-friendly interactions and basic gameplay features. It aims to demonstrate best practices in Angular development, component-based architecture, and game logic implementation.

## Features

- Full implementation of chess rules and moves (including castling, en passant, and pawn promotion).
- Interactive and responsive user interface.
- Validates moves and enforces turn-based gameplay.
- Highlights available moves for the selected piece.
- Drag-and-drop functionality for moving pieces.
- Display of captured pieces for both players.
- Supports resetting the game.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RushdaMansuri/Chess_in_Angular.git
   cd Chess_in_Angular
   ```
2. **Install the dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   ng serve
   ```

Navigate to http://localhost:4200/ in your browser to view the application.

## Usage

Once the application is up and running:

1. Start a new game by clicking the "New Game" button.
2. Select and move pieces by clicking or dragging them to valid squares. Valid moves will be highlighted.
3. Restart the game anytime by clicking the "Reset" button.

## Technologies Used

- Angular: A platform and framework for building single-page client applications using HTML and TypeScript.
- TypeScript: A superset of JavaScript that compiles to clean JavaScript output.
- CSS: For styling the components and the game interface.
- HTML5: To structure the application layout.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure your contributions align with the project's goals and code style.

## Project Structure

The project structure follows a standard Angular application layout. Here are the key folders and files:

```bash
Chess_in_Angular/
 ├── src/
 │   ├── app/
 │   │   ├── components/        # Contains the components for the chessboard and pieces
 │   │   ├── models/            # Contains the chess model classes and interfaces
 │   │   ├── services/          # Game logic and move validation services
 │   │   ├── app.component.html # Main application template
 │   │   ├── app.component.ts   # Main application component
 │   ├── assets/                # Images and assets for chess pieces
 │   ├── environments/          # Environment configuration files
 │   └── index.html             # Main HTML file for the application
 ├── angular.json               # Angular CLI configuration
 ├── package.json               # Project dependencies
 ├── README.md                  # Project documentation
```
