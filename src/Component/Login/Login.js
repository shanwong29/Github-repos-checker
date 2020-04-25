import React from "react";
import InputForm from "../InputForm/InputForm";
import classes from "./Login.module.css";

const Login = ({ login, setTokenInput, tokenInput }) => {
  return (
    <InputForm
      onSubmitFn={(e) => login(e)}
      handleChange={(e) => setTokenInput(e.target.value)}
      name="token"
      type="password"
      value={tokenInput}
      placeholder="Paste your GitHub token"
      btnDisplay="Login"
    />
  );
};

export default Login;
