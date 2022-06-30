import React, { useState } from "react";

import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNo, setStepNo] = useState(0);
	const [Xturn, setXturn] = useState(true);
	const winner = calculateWinner(history[stepNo]);
	const currentTurn = Xturn ? "X" : "O";
	const handleClick = (i) => {
		const historyPoint = history.slice(0, stepNo + 1);
		const current = historyPoint[stepNo];
		const squares = [...current];

		if (winner || squares[i]) return;
		squares[i] = currentTurn;
		setHistory([...historyPoint, squares]);
		setStepNo([historyPoint.length]);
		setXturn(!Xturn);
	};

	return (
		<>
			<h1>Tic Tac Toe in React</h1>
			<Board allSquares={history[stepNo]} onClick={handleClick} />
			<h3>
				{winner ? `Winner: ${winner}` : `NextPLayer ${currentTurn}`}
			</h3>
		</>
	);
};

export default Game;
