import React from "react";

import Square from "./Square";

const Board = ({ allSquares, onClick }) => (
	<div className="board">
		{allSquares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick(i)}></Square>
		))}
	</div>
);

export default Board;
