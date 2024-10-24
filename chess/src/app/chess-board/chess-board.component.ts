import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chess-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent {
  board: string[][] = [];
  selectedPiece: { row: number, col: number } | null = null;
  currentPlayer: 'white' | 'black' = 'white'; // Keep track of the current player

  constructor() {
    this.initializeBoard();
  }

  initializeBoard(): void {
    this.board = [
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
    ];
  }

  // Handle selecting a piece
  selectPiece(row: number, col: number): void {
    const piece = this.board[row][col];
    if (this.isPieceSelectable(piece)) {
      this.selectedPiece = { row, col };
    } else if (this.selectedPiece) {
      this.movePiece(row, col);
    }
  }

  // Check if the piece belongs to the current player
  isPieceSelectable(piece: string): boolean {
    if (this.currentPlayer === 'white') {
      return piece === piece.toUpperCase() && piece !== ' ';
    } else {
      return piece === piece.toLowerCase() && piece !== ' ';
    }
  }

  // Move the piece if valid
  movePiece(targetRow: number, targetCol: number): void {
    if (this.selectedPiece) {
      const { row, col } = this.selectedPiece;

      // For simplicity, just allow any move to an empty square or opponent's piece
      if (this.isValidMove(row, col, targetRow, targetCol)) {
        // Perform the move
        this.board[targetRow][targetCol] = this.board[row][col];
        this.board[row][col] = ' ';
        this.switchPlayer();
      }

      // Deselect the piece after moving
      this.selectedPiece = null;
    }
  }

  // Simple move validation (expand as needed)
  isValidMove(fromRow: number, fromCol: number, toRow: number, toCol: number): boolean {
    const targetPiece = this.board[toRow][toCol];
    if (targetPiece === ' ' || this.isOpponentPiece(targetPiece)) {
      return true; // Valid move if the target is empty or has an opponent's piece
    }
    return false;
  }

  // Check if the piece is an opponent's piece
  isOpponentPiece(piece: string): boolean {
    if (this.currentPlayer === 'white') {
      return piece === piece.toLowerCase();
    } else {
      return piece === piece.toUpperCase();
    }
  }

  // Switch player after each move
  switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';
  }
}
