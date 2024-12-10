import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      navigate("/loginpage"); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="con">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
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
        <button onClick={handleSignUp} >Sign Up </button> <br />
        <p>
          Already have an account?{" "}
          <a href="/loginpage" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;