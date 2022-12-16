import React from "react";
import Login from "../login/Login";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>SocialPedia.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            mollitia magnam a perspiciatis numquam consectetur adipisicing elit.
            Quibusdam, mollitia magnam atque! Impedit commodi ab voluptatem
            blanditiis tempore.
          </p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="type fullname..." />
            <input type="text" placeholder="type username..." />
            <input type="email" placeholder="type email..." />
            <input type="password" placeholder="type password..." />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
