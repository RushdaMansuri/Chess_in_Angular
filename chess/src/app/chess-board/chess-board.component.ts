import { Component } from '@angular/core';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css'],
  standalone: true
})
export class ChessBoardComponent {

  board: string[][] = [];

  constructor() {
    this.initializeBoard();
  }

  // Initialize the board with a 2D array representing rows and columns of the chessboard
  initializeBoard(): void {
    this.board = [
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],  // First row for black pieces
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],  // Second row for black pawns
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],  // Empty row
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],  // Empty row
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],  // Empty row
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],  // Empty row
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],  // Second row for white pawns
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']   // First row for white pieces
    ];
  }
}
