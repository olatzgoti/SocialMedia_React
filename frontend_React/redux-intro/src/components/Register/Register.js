import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const { first_name, last_name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="text"
        name="first_name"
        placeholder="first name required"
        value={first_name}
        onChange={onChange}
      />
      <input
        type="text"
        name="last_name"
        placeholder="last_name required"
        value={last_name}
        onChange={onChange}
      />
      <input type="email" name="email" value={email} onChange={onChange} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
