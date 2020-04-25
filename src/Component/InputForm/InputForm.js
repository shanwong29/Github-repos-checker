import React from "react";

const InputForm = ({
  onSubmitFn,
  name,
  label,
  value,
  type,
  placeholder,
  btnDisplay,
}) => {
  return (
    <form onSubmit={onSubmitFn}>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} placeholder={placeholder} value={value} />
      <button>{btnDisplay}</button>
    </form>
  );
};

export default InputForm;
