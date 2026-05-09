import React, { useState } from "react";

const ROWS = 6;
const COLS = 7;
const AI = "🟡";
const PLAYER = "🔴";
const MAX_DEPTH = 6; // Hard difficulty

export default function ConnectFourAI() {
  const [board, setBoard] = useState(
    Array.from({ length: ROWS }, () => Array(COLS).fill(null))
  );
  const [turn, setTurn] = useState(PLAYER);
  const [winner, setWinner] = useState(null);

  // Drop piece into board
  const dropPiece = (board, col, piece) => {
    const newBoard = board.map((row) => [...row]);
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = piece;
        return newBoard;
      }
    }
    return null;
  };

  // Get valid columns
  const getValidMoves = (board) => {
    return [...Array(COLS).keys()].filter((c) => !board[0][c]);
  };

  // Check winner
  const checkWinner = (b, piece) => {
    const directions = [
      [0, 1], // horizontal
      [1, 0], // vertical
      [1, 1], // diag down-right
      [1, -1], // diag down-left
    ];

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (b[r][c] !== piece) continue;

        for (let [dr, dc] of directions) {
          let count = 0;
          for (let i = 0; i < 4; i++) {
            let nr = r + dr * i;
            let nc = c + dc * i;
            if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) break;
            if (b[nr][nc] === piece) count++;
          }
          if (count === 4) return true;
        }
      }
    }
    return false;
  };

  // Board score for AI
  const scorePosition = (board, piece) => {
    const opponent = piece === AI ? PLAYER : AI;
    let score = 0;

    // Center preference (best strategy in Connect Four)
    const centerCol = Math.floor(COLS / 2);
    let centerCount = 0;
    for (let r = 0; r < ROWS; r++) {
      if (board[r][centerCol] === piece) centerCount++;
    }
    score += centerCount * 4;

    const evaluateWindow = (window) => {
      let pieceCount = window.filter((c) => c === piece).length;
      let emptyCount = window.filter((c) => c === null).length;
      let oppCount = window.filter((c) => c === opponent).length;

      if (pieceCount === 4) score += 10000;
      else if (pieceCount === 3 && emptyCount === 1) score += 100;
      else if (pieceCount === 2 && emptyCount === 2) score += 10;

      if (oppCount === 3 && emptyCount === 1) score -= 150;
    };

    // Check all windows
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS - 3; c++) {
        evaluateWindow([board[r][c], board[r][c + 1], board[r][c + 2], board[r][c + 3]]);
      }
    }

    for (let r = 0; r < ROWS - 3; r++) {
      for (let c = 0; c < COLS; c++) {
        evaluateWindow([board[r][c], board[r + 1][c], board[r + 2][c], board[r + 3][c]]);
      }
    }

    for (let r = 0; r < ROWS - 3; r++) {
      for (let c = 0; c < COLS - 3; c++) {
        evaluateWindow([
          board[r][c],
          board[r + 1][c + 1],
          board[r + 2][c + 2],
          board[r + 3][c + 3],
        ]);
      }
    }

    for (let r = 3; r < ROWS; r++) {
      for (let c = 0; c < COLS - 3; c++) {
        evaluateWindow([
          board[r][c],
          board[r - 1][c + 1],
          board[r - 2][c + 2],
          board[r - 3][c + 3],
        ]);
      }
    }

    return score;
  };

  // Minimax with alpha-beta
  const minimax = (board, depth, alpha, beta, maximizing) => {
    const validCols = getValidMoves(board);

    if (depth === 0 || validCols.length === 0 || checkWinner(board, AI) || checkWinner(board, PLAYER)) {
      if (checkWinner(board, AI)) return [null, 999999];
      if (checkWinner(board, PLAYER)) return [null, -999999];
      return [null, scorePosition(board, AI)];
    }

    if (maximizing) {
      let value = -Infinity;
      let bestCol = validCols[Math.floor(Math.random() * validCols.length)];

      for (let col of validCols) {
        const nextBoard = dropPiece(board, col, AI);
        const [, newScore] = minimax(nextBoard, depth - 1, alpha, beta, false);
        if (newScore > value) {
          value = newScore;
          bestCol = col;
        }
        alpha = Math.max(alpha, value);
        if (alpha >= beta) break;
      }
      return [bestCol, value];
    } else {
      let value = Infinity;
      let bestCol = validCols[Math.floor(Math.random() * validCols.length)];

      for (let col of validCols) {
        const nextBoard = dropPiece(board, col, PLAYER);
        const [, newScore] = minimax(nextBoard, depth - 1, alpha, beta, true);
        if (newScore < value) {
          value = newScore;
          bestCol = col;
        }
        beta = Math.min(beta, value);
        if (alpha >= beta) break;
      }
      return [bestCol, value];
    }
  };

  // Player move
  const handleClick = (col) => {
    if (winner || turn !== PLAYER) return;

    const newBoard = dropPiece(board, col, PLAYER);
    if (!newBoard) return;

    if (checkWinner(newBoard, PLAYER)) {
      setBoard(newBoard);
      setWinner(PLAYER);
      return;
    }

    setBoard(newBoard);
    setTurn(AI);

    setTimeout(() => aiMove(newBoard), 200);
  };

  // AI move
  const aiMove = (currentBoard) => {
    const [col] = minimax(currentBoard, MAX_DEPTH, -Infinity, Infinity, true);
    const newBoard = dropPiece(currentBoard, col, AI);

    if (checkWinner(newBoard, AI)) {
      setBoard(newBoard);
      setWinner(AI);
      return;
    }

    setBoard(newBoard);
    setTurn(PLAYER);
  };

  const reset = () => {
    setBoard(Array.from({ length: ROWS }, () => Array(COLS).fill(null)));
    setWinner(null);
    setTurn(PLAYER);
  };

 return (
  <div className="text-center mt-10 px-6 py-6 dark:bg-gray-900" >

    <h2 className="text-2xl font-bold">Connect Four vs AI</h2>

    {winner ? (
      <h3 className="text-xl mt-2">{winner} wins! Congrats! 🎉</h3>
    ) : (
      <h3 className="text-xl mt-2">Turn: {turn}</h3>
    )}

    {/* Game Grid */}
    <div
      className="
        grid
        justify-center
        mt-6
        gap-2
        grid-cols-7
        max-w-[420px]
        mx-auto
        sm:max-w-[500px]
      "
    >
      {board.map((row, r) =>
        row.map((cell, c) => (
          <div
            key={`${r}-${c}`}
            onClick={() => handleClick(c)}
            className={`
              aspect-square 
              rounded-full 
              bg-blue-800 
              flex items-center justify-center 
              text-3xl sm:text-4xl
              cursor-pointer
              active:scale-95
              transition
            `}
          >
            {cell}
          </div>
        ))
      )}
    </div>

    <button
      onClick={reset}
      className="mt-6 px-6 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md hover:bg-gray-400 dark:hover:bg-gray-800 transition cursor-pointer"
    >
      Reset Game
    </button>
  </div>
);
}