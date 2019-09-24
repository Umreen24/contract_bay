import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthHeader} from '../utils/setAuthHeader';

function Login(props) {

    const [user, setUser] = useState({email: '', password: ''})

    const handleLogin = () => {
        axios.post('http://localhost:3001/users/login', {
            email: user.email,
            password: user.password
        }).then(response => {
            const token = response.data.token
            localStorage.setItem('jwt', token)
            setAuthHeader(token)
            props.onAuthenticated(token)
        })
    };

    const handleTextChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value 
        })
    };

    return (
        <div className='login'>
            <h3 className='login-sub-title'>User Login</h3>
            <input type='email' name='email' placeholder='Enter email' className='email-login' onChange={(e) => handleTextChange(e)}/>
            <input type='password' name='password' placeholder='Enter password' className='password-login' onChange={(e) => handleTextChange(e)}/>
            <button className='login-btn' onClick={() => handleLogin()}>Login</button>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuthenticated: (token) => dispatch({
            type: 'IS_AUTHENTICATED', token: token
        })
    }
};

export default connect(null, mapDispatchToProps)(Login);