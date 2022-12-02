import axios from "axios";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import Logo from "../../olx-logo.png";
import "./Login.css";

function Login() {
  // const History = useHistory();
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // const email = e.target.value;
    // const password = e.target.value;
    const { name, value } = e.target;
    // console.log(email);
    // console.log(password);

    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:5000/api/login";
      const { data: res } = await axios.post(url, loginData);
      localStorage.setItem("token", res.data);
      console.log(res.data);

      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    // console.log(loginData);
    // axios
    //   .post("", loginData)
    //   .then(() => {
    //     History.push("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={handleChange}
          />
          <br />
          {error && <p>{error}</p>}
          <br />
          <button>Login</button>
        </form>
        <a href="/signup">Signup</a>
      </div>
    </div>
  );
}

export default Login;
