import { useState, useEffect, useRef } from "react";

const useWordGame = (startingTime) => {
	const [text, setText] = useState("");
	const [timeRemaining, setTimeRemaining] = useState(startingTime);
	const [isTimeRunning, setIsTimeRunning] = useState(false);
	const [wordCount, setWordCount] = useState(0);
	const inputRef = useRef(null);

	// useEffect for the timer
	// only going to rerun useEffect if the time changes
	useEffect(() => {
		if (isTimeRunning && timeRemaining > 0) {
			setTimeout(() => {
				setTimeRemaining((time) => time - 1);
			}, 1000);
		} else if (timeRemaining === 0) {
			endGame();
		}
		// the dependencies tells usEffect when it should run
		// as the button is changing setIsTimeRunning, we need to add that as a 2nd dependency
	}, [timeRemaining, isTimeRunning]);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const calculateWordCount = (text) => {
		// splitting each word up with a space
		const wordsArr = text.trim().split(" ");
		// filtering so we ignore a space
		const filteredWords = wordsArr.filter((word) => word !== "");
		return filteredWords.length;
	};

	const startGame = () => {
		setIsTimeRunning(true);
		setTimeRemaining(startingTime);
		setText("");
		setWordCount(0);
		// manually changing disable to false, so when the start button is clicked, focus will move to the text area
		inputRef.current.disabled = false;
		inputRef.current.focus();
	};

	const endGame = () => {
		setIsTimeRunning(false);
		// displaying the word count when the timer is 0
		setWordCount(calculateWordCount(text));
	};

	return {
		inputRef,
		handleChange,
		text,
		isTimeRunning,
		timeRemaining,
		startGame,
		wordCount,
	};
};

export default useWordGame;
