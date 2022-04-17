import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Paper, InputBase, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { ColorButton, CustomInputBox } from "../../Components/MicroComponents/MicroComponents";

export default function Login(props) {
    const {setUser, setLogin} = props;
    
    const [userName, setUserName] = React.useState('eve.holt@reqres.in');
    const [userPassword, setUserPassword] = React.useState('cityslicka');
    const [loginError, setError] = React.useState(false);
    const [errorCode, setErrorCode] = React.useState('');

    const navigate = useNavigate();

    const onLogin = () => {
        axios.post('https://reqres.in/api/login', {
            "email": userName,
            "password": userPassword
        }).then(response => {
            console.log(response);
            if (response.data.token) {
                setUser(response.data.token);
                setLogin(true);
                navigate("/user");
            }
        }).catch(error => {
            console.log("Error", error);
            setError(prev => true);
            setErrorCode(error);
            setTimeout(() => setError(false), 3000);
        })
    }

    return (
        <div className="window-container">
            <h1 className="logo-text">Saturdays</h1>
            <Paper className="form-container" variant="outlined">
                <div className="form-input-container">
                    <CustomInputBox 
                        placeholder="user id" 
                        className='form-elements form-input'
                        value={userName}
                        onChange={prev => setUserName(prev.target.value)}
                    />
                    <CustomInputBox 
                        placeholder="password"
                        type="password"
                        className='form-elements form-input'
                        value={userPassword}
                        onChange={prev => setUserPassword(prev.target.value)}
                    />
                    <Link to="/register" className="signup-link router-link">SignUp Instead?</Link>
                </div>
                <ColorButton className='form-elements form-button' endIcon={<LoginRoundedIcon/>} onClick={onLogin}>Login</ColorButton>
            </Paper>
            {loginError &&  <Alert variant="filled" severity="error" className="alert">
                {`${errorCode}`}
            </Alert>}
        </div>
    )
}
