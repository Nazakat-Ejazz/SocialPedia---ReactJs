import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            mollitia magnam a perspiciatis numquam consectetur adipisicing elit.
            Quibusdam, mollitia magnam atque! Impedit commodi ab voluptatem
            blanditiis tempore.
          </p>
          <span>Don't have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="type username..." />
            <input type="password" placeholder="type password..." />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
