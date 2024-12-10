import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore"
import { Link } from "react-router-dom";

const QuizDashboard = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const quizCollection = collection(db, "quizzes");
      const quizSnapshot = await getDocs(quizCollection);
      setQuizzes(quizSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Quiz Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="p-4 border rounded">
            <h2 className="text-xl font-bold">{quiz.title}</h2>
            <p>{quiz.description}</p>
            <Link to={`/quiz/${quiz.id}`} className="text-blue-500">
              Start Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizDashboard;