import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    console.warn(name, email, password);
    const body = { name, email, password };
    let result;
    await axios
      .post("http://localhost:5000/register", body)
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        alert(err)
      });

    // console.warn(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    navigate("/");
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputbox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <input
        className="inputbox"
        type="text"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="Enter Email"
      />

      <input
        className="inputbox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={collectData} className="appbutton" type="button">
        Sign Up
      </button>
    </div>
  );
};
export default Signup;
