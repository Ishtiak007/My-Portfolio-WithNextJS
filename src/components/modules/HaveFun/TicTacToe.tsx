/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="max-w-md mx-auto text-center p-6 bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">🎮 Tic Tac Toe</h2>
      <div className="grid grid-cols-3 justify-items-center gap-2">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="size-20 text-2xl font-bold text-teal-600 border border-gray-400 rounded-lg hover:bg-gray-100"
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="mt-4 text-lg">
        {winner ? (
          <p className="text-green-600 font-semibold">{winner} wins! 🎉</p>
        ) : board.every(Boolean) ? (
          <p className="text-yellow-600 font-semibold">It's a draw! 🤝</p>
        ) : (
          <p className="text-gray-700">Next Player: {isXNext ? "X" : "O"}</p>
        )}
      </div>

      <button
        onClick={resetGame}
        className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition"
      >
        Restart Game
      </button>
    </div>
  );
};

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default TicTacToe;
