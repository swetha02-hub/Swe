import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Learn from './Learn';
import Learncomo from './Learncomp';
import Summa from './Summa';
import Parent from './props/Parent';
import Child1 from './Props1/Child1';
import Parent1 from './impact/Parent1';
import Event from './Hooks/Event';
import Hook1 from './Hooks/Hook1';
import Change from './Fav color/Change';
import Task from './Todo/Task';
import Bmi from './impact/Asserts/cal/Bmi';
import Bmical from './calc/Bmical';
import Form from './Hook2/Form';
import Effect from './Hook2/Effect';
import Pro from './Fetch/Pro';
import Parent12 from './useRef/Parent12';
import Ref from './useRef/Ref';
import T from './table/T';
import R from './Hook4/R';
import Sir from './Hook4/Sir';
import Routing from './Routing/Routing';
import Myinput from './Custom Hook/Myinput';
import Myfetch from './Custom Hook/Myfetch';
import Product from './Custom Hook/Product';
import Navbar from './Nav/Navbar';
import Auth from './quiz/Auth';
import QuizPage from './quiz/QuizPage';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './quiz/LoginPage';
import App1 from './quiz/App1';
import Api from './quiz/Api';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <Api/> */}
  {/* <BrowserRouter>
  <LoginPage/>
  </BrowserRouter> */}
  <App1/>
  {/* <Auth/> */}
  {/* <QuizPage /> */}
  {/* <Navbar/> */}
  {/* <Product/> */}
 {/* <Myfetch/> */}
  {/* <Myinput/> */}
  {/* <Routing/> */}
  {/* <Sir/> */}
  {/* <R/> */}
  {/* <T/> */}
  {/* <Ref/> */}
  {/* <Parent12/> */}
  {/* <Pro/> */}
  {/* <Effect/> */}
  {/* <Form/> */}
  {/* <Bmical/> */}
  {/* <Bmi/> */}
  {/* <Task/> */}
  {/* <Change/> */}
  {/* <Hook1/> */}
  {/* <Event/> */}
  {/* <Parent1/> */}
  {/* <Parent/> */}
  {/* <Child1/> */}
    {/* <Learn/>  */}
    {/* <Learncomo/>
    <Summa/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
