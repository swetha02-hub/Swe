import React from "react";
import { BrowserRouter, Route, Routes ,Link } from "react-router-dom";
import Auth from "./Auth"
import LoginPage from "./LoginPage";
import QuizPage from "./QuizPage";
import "./Q.css"
const App1 = () => {
  return (
    <>
<BrowserRouter>
    <header>
        <nav className='nav'>
        <ul>
       <li><Link to="/">Signup</Link></li>
        <li><Link to="/loginpage">LoginPage</Link></li>
        <li><Link to="/quizpage">QuizPage</Link></li>
        </ul>
        </nav>
        <h3>QUIZ COMPETITION</h3>
    </header>
      <Routes>
        <Route path="/" element={<Auth/>} ></Route>
        <Route path="/loginpage" element={<LoginPage/>} ></Route>
        <Route path="/quizpage" element={<QuizPage/>} ></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
};

export default App1;