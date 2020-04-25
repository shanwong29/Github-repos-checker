import React from "react";

const InputForm = ({
  onSubmitFn,
  label,
  value,
  type,
  placeholder,
  btnDisplay,
  handleChange,
}) => {
  return (
    <form onSubmit={onSubmitFn}>
      <label htmlFor={label}>{label}</label>
      <input
        name={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <button>{btnDisplay}</button>
    </form>
  );
};

export default InputForm;
