import React from "react";
import Input from './Input';

function Login(props) {
  return (
    <div>
      <form className="form">
        <h1>Welcome!</h1>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!props.isRegistered && (
          <Input type="password" placeholder="Confirm Password" />
        )}
        <button type="submit">
          { props.isRegistered ? "Login" : "Sign Up" }
        </button>
      </form>
    </div>
  );
}

export default Login;
