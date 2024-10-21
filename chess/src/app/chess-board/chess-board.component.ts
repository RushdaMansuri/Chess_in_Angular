import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor and other directives

@Component({
  selector: 'app-chess-board',
  standalone: true,  // Make sure it's standalone
  imports: [CommonModule],  // Add CommonModule to imports
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent {

  board: string[][] = [];

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
}
