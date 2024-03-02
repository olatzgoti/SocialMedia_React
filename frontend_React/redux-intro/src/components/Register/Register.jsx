import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/authSlice'
import { notification } from 'antd'
import './Register.scss'


const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2:"",
  });

  const { first_name, last_name, email, password, password2 } = formData;
  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords does not match",
      })}
    else  {
      dispatch(register(formData))
      console.log("formData", formData);
    }}

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="fields">
          <input type="text" name="first_name" placeholder="first name required" value={first_name} onChange={onChange} />
          <input type="text" name="last_name" placeholder="last_name required" value={last_name} onChange={onChange} />
          <input type="email" name="email" placeholder="email required" value={email} onChange={onChange} />
          <input type="password" name="password" placeholder="password required" value={password} onChange={onChange} />
          <input type="password2" name="password2" placeholder="repeat password" value={password2} onChange={onChange}/>

          <button type="submit"> Register </button>
      </div>
    </form>
  )
}

export default Register
