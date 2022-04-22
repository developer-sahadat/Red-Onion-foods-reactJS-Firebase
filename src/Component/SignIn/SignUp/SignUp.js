import React, { useRef, useState } from "react";
import "./SignUp.css";
import logo from "../../../Assets/images/logo2.png";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Init";
import Spinners from "../../Shear/Spinner/Spinner";

const SignUp = () => {
  const name4Ref = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  console.log(user);

  const submitHandler = (e) => {
    e.preventDefault();

    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      console.log("hell;o");
      const name = name4Ref.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      createUserWithEmailAndPassword(email, password);
    } else {
      alert("Your Password didn't match");
    }
  };

  if (loading) {
    return <Spinners />;
  }

  let errorMessage;
  if (error) {
    errorMessage = error.message;
  }
  return (
    <div className="m-5">
      <div className="container">
        <img
          style={{ width: "300px", margin: " 20px auto", display: "block" }}
          src={logo}
          alt=""
        />
        <p className="text-center text-danger">{errorMessage}</p>
        <form className="input-form" onSubmit={submitHandler}>
          <input required ref={name4Ref} type="text" placeholder="Name"></input>
          <br></br>
          <input
            required
            type="email"
            placeholder="email"
            ref={emailRef}
          ></input>
          <br></br>
          <input
            required
            ref={passwordRef}
            type="password"
            placeholder="password"
          ></input>
          <br></br>
          <input
            required
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
          ></input>
          <br></br>
          <button className="btn-sign">Sign Up</button>
        </form>
        <p className="text-center mt-3">
          <Link className="text-danger  text-decoration-none" to="/login">
            already have an account?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
