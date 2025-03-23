import React from "react";
import { useState } from "react";
export default function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [flag,setFlag] = useState(false)
  const validateUser = () => {
    if (user === "john@gmail.com" && password === "1234") {
      console.log("Valid User");
      setFlag(true)
    }
    else {
      console.log("Invalid User")
    }
  };
  return (
    <div>
      <p>
        <input
          type="text"
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username"
        ></input>
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
      </p>
      <button onClick={validateUser}>Login</button>
    </div>
  );
}
