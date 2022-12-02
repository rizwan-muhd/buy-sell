import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../olx-logo.png";
import "./Signup.css";
// import { useForm } from "react-hook-form";

export default function Signup() {
  const history = useHistory();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  const [error, setError] = useState("");
  const [userDetails, setuserDetails] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  // console.log("signup page");

  // console.log("name" + userDetails.name);

  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.value);

    const { name, value } = e.target;

    // console.log(name, value);

    setuserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:5000/api/signup";
      const { data: res } = await axios.post(url, userDetails);
      history.push("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        console.log(error);
      }
    }
    // console.log(userDetails);
    // axios.post(, userDetails).then(() => {
    //   history.push("/login");
    // });
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            placeholder="username"
            required
            // {...register("username", { required: true })}
            name="name"
            value={userDetails.name}
            onChange={handleChange}
          />
          <br />
          {/* {errors.username ? <p>Please check the Username</p> : null} */}
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            placeholder="email"
            required
            // {...register("email", {
            // required: true,
            // pattern:
            // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            // })}
            name="email"
            value={userDetails.email}
            onChange={handleChange}
          />
          <br />
          {/* {errors.email && <p>Please check the Email</p>} */}
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            placeholder="mobileno"
            required
            // {...register("mobileno")}
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
          />
          <br />
          {/* {errors.mobileno ? <p>Please check the Mobile no</p> : null} */}
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            required
            placeholder="password"
            // {...register("password", {
            //   required: true,
            //   pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            // })}
            name="password"
            value={userDetails.password}
            onChange={handleChange}
          />
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <br />
          <button type="submit">Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
