import React from "react";
import "./SignUp.css";
import logo from "../../../Assets/images/logo2.png";

const SignUp = () => {
  return (
    <div className="m-5">
      <div className="container">
        <img
          style={{ width: "300px", margin: " 20px auto", display: "block" }}
          src={logo}
          alt=""
        />
        <form className="input-form">
          <input type="text" placeholder="Name"></input>
          <br></br>
          <input type="email" placeholder="email"></input>
          <br></br>
          <input type="password" placeholder="password"></input>
          <br></br>
          <input type="password" placeholder="Confirm Password"></input>
          <br></br>
          <button className="btn-sign">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
