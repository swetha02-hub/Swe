import React, { useState } from "react";
import { auth } from "./firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
      navigate("/quizpage"); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="con">
      <h1>Login</h1>
      <div className="w-80 bg-white p-6 rounded shadow-md">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br />
        <button onClick={handleLogin} >Login</button> <br />
        
      </div>
    </div>
  );
};

export default LoginPage;