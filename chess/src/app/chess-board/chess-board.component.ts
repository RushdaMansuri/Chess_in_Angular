import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit {
  board: string[][] = [];
  selectedPiece: { row: number; col: number } | null = null;

  ngOnInit(): void {
    this.initializeBoard();
  }

  initializeBoard(): void {
    this.board = [
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];
  }

  onCellClick(rowIndex: number, colIndex: number): void {
    if (this.selectedPiece) {
      this.movePiece(rowIndex, colIndex);
    } else if (this.board[rowIndex][colIndex]) {
      this.selectedPiece = { row: rowIndex, col: colIndex };
    }
  }

  movePiece(targetRow: number, targetCol: number): void {
    if (!this.selectedPiece) return;
    const { row, col } = this.selectedPiece;
    this.board[targetRow][targetCol] = this.board[row][col];
    this.board[row][col] = '';
    this.selectedPiece = null;
  }
}
