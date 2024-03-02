import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth/authSlice'
import '../Register/Register.scss'
const Login = ()=>{

    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const {email, password} = formData

    const onChange = (e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))}

    const dispatch = useDispatch()

    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(login(formData))
        console.log('formData', formData)
    }

    return(
            <form onSubmit={onSubmit} className="form">
                <div className="fields">
                     <input type="text" name="email" placeholder='email required' value={email} onChange={onChange}/>
                    <input type="password" name="password" placeholder='password required' value={password}  onChange={onChange}/>
                    <button type="submit">Login</button>
                </div>
            </form>
    )
}

export default Login