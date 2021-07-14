import React, { useContext } from "react";
import "./Login.css";
import { AuthContext } from "../Contexts/Auth/Auth";

function Login() {
  const { metodos } = useContext(AuthContext);

  return (
    <div className = "LoginConatainer">
    <div className = "LoginContainer-Login">
      <h2>Inicia sesion</h2>
      <button onClick={metodos.sessionConGoogle}><span>Google</span></button>
    </div>
    </div>
  );
}

export default Login;