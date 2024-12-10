import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Q.css";

const Api = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&type=multiple"
        );
        const formattedData = response.data.results.map((q) => ({
          question: q.question,
          options: [...q.incorrect_answers, q.correct_answer].sort(
            () => Math.random() - 0.5
          ),
          correctAnswer: q.correct_answer,
          explanation: `The correct answer is: ${q.correct_answer}`,
        }));
        setQuizData(formattedData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load questions. Please try again later.");
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeUp();
    }
    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleTimeUp = () => {
    setFeedback(
      `Time's up! ${quizData[currentQuestion].explanation}`
    );
  };

  const handleSubmit = () => {
    const isCorrect =
      selectedAnswer === quizData[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setFeedback(
      isCorrect
        ? `Correct! ${quizData[currentQuestion].explanation}`
        : `Wrong! ${quizData[currentQuestion].explanation}`
    );
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setFeedback(null);
      setSelectedAnswer("");
      setTimeLeft(10);
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setFeedback(null);
    setScore(0);
    setIsQuizComplete(false);
    setTimeLeft(10);
  };

  if (loading) return <div className="loading">Loading quiz...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="con">
      {isQuizComplete ? (
        <div className="result-container">
          <h1>Quiz Complete!</h1>
          <p>Your Score: {score} / {quizData.length}</p>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question">
          <h2>
            Question {currentQuestion + 1} of {quizData.length}
          </h2>
          <p>{quizData[currentQuestion].question}</p>
          <div className="options">
            {quizData[currentQuestion].options.map((option, index) => (
              <label key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  disabled={feedback !== null}
                /> 
                <span>{option}</span><br />
              </label>
            ))}
          </div>
          <p className="timer">Time Left: {timeLeft}s</p>
          <button onClick={handleSubmit} disabled={!selectedAnswer || feedback !== null}>
            Submit
          </button>
          {feedback && <p className="feedback">{feedback}</p>}
          {feedback && (
            <button onClick={handleNext}>
              {currentQuestion < quizData.length - 1 ? "Next Question" : "Finish Quiz"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Api;