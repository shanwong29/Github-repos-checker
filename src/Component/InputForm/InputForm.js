import React from "react";
import "./InputForm.css";

const InputForm = ({
  onSubmitFn,
  name,
  label,
  value,
  type,
  placeholder,
  btnDisplay,
  variant,
}) => {
  return (
    <>
      <label className="inputForm__label" htmlFor={name}>
        {label}
      </label>
      <form onSubmit={onSubmitFn} className={`inputForm inputForm__${variant}`}>
        <input
          name={name}
          type={type}
          value={value}
          placeholder=" "
          className="inputForm__input"
        />
        <span className="inputForm__placeholder">{placeholder}</span>
        <button className="inputForm__btn">{btnDisplay}</button>
      </form>
    </>
  );
};

export default InputForm;
