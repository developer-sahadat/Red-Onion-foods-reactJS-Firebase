import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo2.png";
import auth from "../../../Firebase/Init";
const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  console.log(user);
  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div className="m-5">
        <div className="container">
          <img
            style={{
              width: "300px",
              margin: " 20px auto",
              display: "block",
            }}
            src={logo}
            alt=""
          />
          <form className="input-form" onSubmit={submitHandler}>
            <input type="email" ref={emailRef} placeholder="email"></input>
            <br></br>
            <input
              type="password"
              ref={passwordRef}
              placeholder="password"
            ></input>
            <br></br>
            <button className="btn-sign">Login in</button>
          </form>
          <p className="text-center mt-3">
            <Link className="text-danger  text-decoration-none" to="/signUp">
              Create New Account?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
