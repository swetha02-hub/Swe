import React, { useState, useEffect } from "react";
import "./Q.css"

const QuizPage = () => {
  const quizData = [
    
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris",
      explanation: "Paris is the capital of France.",
    },
    
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
      correctAnswer: "Shakespeare",
      explanation: "'Hamlet' was written by William Shakespeare."
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
      explanation: "Mars is known as the Red Planet due to its reddish appearance."
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
      correctAnswer: "Da Vinci",
      explanation: "The Mona Lisa was painted by Leonardo da Vinci."
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      correctAnswer: "Pacific",
      explanation: "The Pacific Ocean is the largest ocean on Earth."
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7",
      explanation: "There are seven continents on Earth."
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "Korea", "Thailand"],
      correctAnswer: "Japan",
      explanation: "Japan is known as the Land of the Rising Sun."
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Avocado", "Lemon", "Cucumber"],
      correctAnswer: "Avocado",
      explanation: "The main ingredient in guacamole is avocado."
    },
  ];
    
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); 

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
      "Time's up! " +
        quizData[currentQuestion].explanation +
        " The correct answer was " +
        quizData[currentQuestion].correctAnswer
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
        ? "Correct! " + quizData[currentQuestion].explanation
        : "Wrong! " + quizData[currentQuestion].explanation
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

  return (
    <div>
      {isQuizComplete ? (
        <div>
          <h1 className="text-2xl font-bold">Quiz Complete!</h1>
          <p className="text-lg my-4">Your Score: {score} / {quizData.length}</p>
          <button
            className="bg-blue-500 px-4 py-2 rounded"
            onClick={handleRestart}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div id="i">
          <h2 className="text-xl font-bold">
            Question {currentQuestion + 1} of {quizData.length}
          </h2>
          <p className="my-4">{quizData[currentQuestion].question}</p>
          <div className="space-y-4">
            {quizData[currentQuestion].options.map((option, index) => (
              <div key={index}>
               <label> 
                   <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                    disabled={feedback !== null} 
                  /> 
         <span className="ml-8">{option}</span>
                </label>
              </div>
          
            ))}
          </div>
          <p className="my-2 font-bold">
            Time Left: {timeLeft} seconds
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded my-4"
            onClick={handleSubmit}
            disabled={!selectedAnswer || feedback !== null}
          >
            Submit
          </button>
          {feedback && <p className="text-lg font-semibold">{feedback}</p>}
          {feedback && (
            <button
              className=" px-4 py-2 rounded mt-4"
              onClick={handleNext}
            >
              {currentQuestion < quizData.length - 1 ? "Next Question" : "Finish Quiz"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizPage;