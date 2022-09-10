import React from "react";
import useWordGame from "./Hooks/useWordGame";
import "./App.css";

function App() {
	const {
		inputRef,
		handleChange,
		text,
		isTimeRunning,
		timeRemaining,
		startGame,
		wordCount,
	} = useWordGame(15);

	return (
		<>
			<h1>How fast do you type?</h1>
			<textarea
				name=""
				id=""
				cols="50"
				rows="20"
				ref={inputRef}
				disabled={!isTimeRunning}
				onChange={handleChange}
				value={text}
			></textarea>
			<h4>Time Remaining: {timeRemaining}</h4>
			<button disabled={isTimeRunning} onClick={startGame}>
				Start
			</button>
			<h1> Word Count: {wordCount}</h1>
		</>
	);
}

export default App;
