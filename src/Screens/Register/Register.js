import React from 'react';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import { ColorButton, CustomInputBox } from "../../Components/MicroComponents/MicroComponents";
import axios from "axios";

export default function Register() {
  const [userEmail, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const registerUser = () => {
    if (confirmPassword.length < 6 || confirmPassword !== password) {
      return;
    }
    axios.post('https://reqres.in/api/register', {
      email: userEmail,
      password
    }).then(res => {
      console.log(res);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="window-container">
      <h1 className="logo-text">Saturdays</h1>
      <Paper className="form-container" variant="outlined">
        <div className="form-input-container">
          <CustomInputBox 
            placeholder='email' 
            className='form-elements form-input' 
            type="text" 
            onChange={(prev) => setEmail(prev.target.value)}         
          />
          <CustomInputBox 
            placeholder='password' 
            type="password" 
            className='form-elements form-input' 
            onChange={(prev) => setPassword(prev.target.value)}
           />
          <CustomInputBox 
            placeholder='confirm password'
            type="password" 
            className='form-elements form-input'
            onChange={(prev) => setConfirmPassword(prev.target.value)}
           />
          <Link to="/login" className="signup-link router-link">Signin Instead?</Link>
        </div>
        <ColorButton className='form-elements form-button' endIcon={<HowToRegRoundedIcon />}>Register</ColorButton>
      </Paper>
    </div>
  )
}
