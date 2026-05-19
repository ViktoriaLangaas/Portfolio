import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Trophy,
  Bot,
  User,
  RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const ROWS = 6;
const COLS = 7;
const AI = "🟡";
const PLAYER = "🔴";
const MAX_DEPTH = 6;
const STORAGE_KEY = "connect-four-history";

export default function ConnectFourAI() {
  const { language } = useLanguage();

  const translations = {
    en: {
      back: "Back to portfolio",
      title: "Connect Four vs AI",
      subtitle:
        "A Connect Four game built with React featuring a Minimax AI with alpha-beta pruning.",
      playerWonTitle: "You defeated the AI!",
      aiWonTitle: "The AI won this round",
      playerWonText:
        "Impressive strategy. You found a winning sequence.",
      aiWonText:
        "The AI outplayed you this time. Try another round.",
      yourTurn: "Your turn",
      aiThinking: "AI is thinking...",
      reset: "Reset Game",
      history: "Match History",
      you: "You",
      ai: "AI",
      wins: "Wins",
      totalGames: "Total Games",
      recentResults: "Recent Results",
      noGames: "No games played yet.",
      youWon: "You won",
      aiWon: "AI won",
    },

    no: {
      back: "Tilbake til porteføljen",
      title: "Fire på rad mot AI",
      subtitle:
        "Et Fire på rad-spill bygget med React og en Minimax-AI med alpha-beta pruning.",
      playerWonTitle: "Du slo AI-en!",
      aiWonTitle: "AI-en vant denne runden",
      playerWonText:
        "Imponerende strategi. Du fant en vinnende kombinasjon.",
      aiWonText:
        "AI-en spilte bedre denne gangen. Prøv en ny runde.",
      yourTurn: "Din tur",
      aiThinking: "AI-en tenker...",
      reset: "Start på nytt",
      history: "Kamphistorikk",
      you: "Deg",
      ai: "AI",
      wins: "Seiere",
      totalGames: "Totale spill",
      recentResults: "Siste resultater",
      noGames: "Ingen spill spilt enda.",
      youWon: "Du vant",
      aiWon: "AI vant",
    },
  };

  const t = translations[language];

  const [board, setBoard] = useState(
    Array.from({ length: ROWS }, () => Array(COLS).fill(null))
  );

  const [turn, setTurn] = useState(PLAYER);
  const [winner, setWinner] = useState<string | null>(null);

  const [stats, setStats] = useState({
    playerWins: 0,
    aiWins: 0,
    totalGames: 0,
    history: [] as string[],
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setStats(JSON.parse(saved));
    }
  }, []);

  const saveStats = (updatedStats: typeof stats) => {
    setStats(updatedStats);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStats));
  };

  const updateWinnerStats = (winnerPiece: string) => {
    const updated = {
      ...stats,
      totalGames: stats.totalGames + 1,

      playerWins:
        winnerPiece === PLAYER
          ? stats.playerWins + 1
          : stats.playerWins,

      aiWins:
        winnerPiece === AI
          ? stats.aiWins + 1
          : stats.aiWins,

      history: [winnerPiece, ...stats.history].slice(0, 10),
    };

    saveStats(updated);
  };

  const dropPiece = (
    board: any[][],
    col: number,
    piece: string
  ) => {
    const newBoard = board.map((row) => [...row]);

    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = piece;
        return newBoard;
      }
    }

    return null;
  };

  const getValidMoves = (board: any[][]) => {
    return [...Array(COLS).keys()].filter((c) => !board[0][c]);
  };

  const checkWinner = (b: any[][], piece: string) => {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
    ];

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (b[r][c] !== piece) continue;

        for (let [dr, dc] of directions) {
          let count = 0;

          for (let i = 0; i < 4; i++) {
            let nr = r + dr * i;
            let nc = c + dc * i;

            if (
              nr < 0 ||
              nr >= ROWS ||
              nc < 0 ||
              nc >= COLS
            )
              break;

            if (b[nr][nc] === piece) count++;
          }

          if (count === 4) return true;
        }
      }
    }

    return false;
  };

  const scorePosition = (board: any[][], piece: string) => {
    const opponent = piece === AI ? PLAYER : AI;

    let score = 0;

    const centerCol = Math.floor(COLS / 2);

    let centerCount = 0;

    for (let r = 0; r < ROWS; r++) {
      if (board[r][centerCol] === piece) centerCount++;
    }

    score += centerCount * 4;

    const evaluateWindow = (window: any[]) => {
      let pieceCount = window.filter(
        (c) => c === piece
      ).length;

      let emptyCount = window.filter(
        (c) => c === null
      ).length;

      let oppCount = window.filter(
        (c) => c === opponent
      ).length;

      if (pieceCount === 4) score += 10000;
      else if (pieceCount === 3 && emptyCount === 1)
        score += 100;
      else if (pieceCount === 2 && emptyCount === 2)
        score += 10;

      if (oppCount === 3 && emptyCount === 1)
        score -= 150;
    };

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS - 3; c++) {
        evaluateWindow([
          board[r][c],
          board[r][c + 1],
          board[r][c + 2],
          board[r][c + 3],
        ]);
      }
    }

    for (let r = 0; r < ROWS - 3; r++) {
      for (let c = 0; c < COLS; c++) {
        evaluateWindow([
          board[r][c],
          board[r + 1][c],
          board[r + 2][c],
          board[r + 3][c],
        ]);
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

  const minimax = (
    board: any[][],
    depth: number,
    alpha: number,
    beta: number,
    maximizing: boolean
  ): [number | null, number] => {
    const validCols = getValidMoves(board);

    if (
      depth === 0 ||
      validCols.length === 0 ||
      checkWinner(board, AI) ||
      checkWinner(board, PLAYER)
    ) {
      if (checkWinner(board, AI))
        return [null, 999999];

      if (checkWinner(board, PLAYER))
        return [null, -999999];

      return [null, scorePosition(board, AI)];
    }

    if (maximizing) {
      let value = -Infinity;

      let bestCol =
        validCols[
          Math.floor(Math.random() * validCols.length)
        ];

      for (let col of validCols) {
        const nextBoard = dropPiece(board, col, AI);

        const [, newScore] = minimax(
          nextBoard,
          depth - 1,
          alpha,
          beta,
          false
        );

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

      let bestCol =
        validCols[
          Math.floor(Math.random() * validCols.length)
        ];

      for (let col of validCols) {
        const nextBoard = dropPiece(
          board,
          col,
          PLAYER
        );

        const [, newScore] = minimax(
          nextBoard,
          depth - 1,
          alpha,
          beta,
          true
        );

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

  const handleClick = (col: number) => {
    if (winner || turn !== PLAYER) return;

    const newBoard = dropPiece(board, col, PLAYER);

    if (!newBoard) return;

    if (checkWinner(newBoard, PLAYER)) {
      setBoard(newBoard);
      setWinner(PLAYER);
      updateWinnerStats(PLAYER);
      return;
    }

    setBoard(newBoard);
    setTurn(AI);

    setTimeout(() => aiMove(newBoard), 250);
  };

  const aiMove = (currentBoard: any[][]) => {
    const [col] = minimax(
      currentBoard,
      MAX_DEPTH,
      -Infinity,
      Infinity,
      true
    );

    const newBoard = dropPiece(
      currentBoard,
      col!,
      AI
    );

    if (checkWinner(newBoard, AI)) {
      setBoard(newBoard);
      setWinner(AI);
      updateWinnerStats(AI);
      return;
    }

    setBoard(newBoard);
    setTurn(PLAYER);
  };

  const reset = () => {
    setBoard(
      Array.from({ length: ROWS }, () =>
        Array(COLS).fill(null)
      )
    );

    setWinner(null);
    setTurn(PLAYER);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-gray-950 dark:to-slate-900 text-gray-900 dark:text-white px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-blue-500 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all shadow-sm"
          >
            <ArrowLeft size={18} />
            {t.back}
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl p-6">
            <div className="text-center mb-6">
              <h1 className="text-4xl font-black tracking-tight mb-2">
                {t.title}
              </h1>

              <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                {t.subtitle}
              </p>
            </div>

            {winner ? (
              <div
                className={`mb-6 rounded-2xl p-6 border text-center shadow-lg ${
                  winner === PLAYER
                    ? "bg-green-100 dark:bg-green-950 border-green-400"
                    : "bg-red-100 dark:bg-red-950 border-red-400"
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Trophy className="w-8 h-8" />

                  <h2 className="text-3xl font-black tracking-tight">
                    {winner === PLAYER
                      ? t.playerWonTitle
                      : t.aiWonTitle}
                  </h2>
                </div>

                <p className="text-lg opacity-80">
                  {winner === PLAYER
                    ? t.playerWonText
                    : t.aiWonText}
                </p>
              </div>
            ) : (
              <div className="mb-6 rounded-2xl bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-900 p-4 text-center">
                <h2 className="text-xl font-bold">
                  {turn === PLAYER
                    ? t.yourTurn
                    : t.aiThinking}
                </h2>
              </div>
            )}

            <div className="grid justify-center gap-2 grid-cols-7 mx-auto max-w-[420px] sm:max-w-[520px]">
              {board.map((row, r) =>
                row.map((cell, c) => (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => handleClick(c)}
                    className="aspect-square rounded-full bg-blue-700 dark:bg-blue-900 flex items-center justify-center text-3xl sm:text-4xl border border-blue-500 dark:border-blue-700 shadow-md hover:scale-105 active:scale-95 transition-all"
                  >
                    {cell}
                  </button>
                ))
              )}
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all font-medium shadow-md"
              >
                <RotateCcw size={18} />
                {t.reset}
              </button>
            </div>
          </div>

          <aside className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl p-6 sticky top-6">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              {t.history}
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl bg-green-100 dark:bg-green-950 p-4 border border-green-300 dark:border-green-900">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-5 h-5" />
                  <span className="font-semibold">
                    {t.you}
                  </span>
                </div>

                <p className="text-4xl font-black">
                  {stats.playerWins}
                </p>

                <p className="text-sm opacity-70">
                  {t.wins}
                </p>
              </div>

              <div className="rounded-2xl bg-red-100 dark:bg-red-950 p-4 border border-red-300 dark:border-red-900">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-5 h-5" />
                  <span className="font-semibold">
                    {t.ai}
                  </span>
                </div>

                <p className="text-4xl font-black">
                  {stats.aiWins}
                </p>

                <p className="text-sm opacity-70">
                  {t.wins}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-4 mb-6 border border-gray-200 dark:border-gray-700">
              <p className="text-sm uppercase tracking-wide opacity-60 mb-1">
                {t.totalGames}
              </p>

              <p className="text-3xl font-black">
                {stats.totalGames}
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-lg">
                {t.recentResults}
              </h3>

              {stats.history.length === 0 ? (
                <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-4 text-sm text-gray-500 dark:text-gray-400">
                  {t.noGames}
                </div>
              ) : (
                <div className="space-y-2">
                  {stats.history.map((result, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 border ${
                        result === PLAYER
                          ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900"
                          : "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-medium">
                        {result === PLAYER ? (
                          <>
                            <User size={18} />
                            {t.youWon}
                          </>
                        ) : (
                          <>
                            <Bot size={18} />
                            {t.aiWon}
                          </>
                        )}
                      </div>

                      <span className="text-xl">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}