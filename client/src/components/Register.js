
import React, {useState} from 'react';
import axios from 'axios';

function Register() {

    const [user, setUser] = useState({ employeeNumber: '', firstName: '', lastName: '', email: '', password: ''})

    const handleRegister = () => {
        axios.post('http://localhost:3001/users/register', {
            employeeNumber: user.employeeNumber,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        }).then(response => {
            console.log(response.data)
        })
    };

    const handleTextChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    return(
        <div className='register'>
            <h3 className='register-sub-title'>New User Registration</h3>
            <label className='add-contract-input'>Employee Number:<input type='text' name='employeeNumber' placeholder='Enter employee ID' className='id-number' onChange={(e) => handleTextChange(e)}/></label>
            <label className='add-contract-input'>First Name: <input type='text' name='firstName' placeholder='Enter employee first name' className='firstName' onChange={(e) => handleTextChange(e)}/></label>
            <label className='add-contract-input'>Last Name:<input type='text' name='lastName' placeholder='Enter employee last name' className='lastName' onChange={(e) => handleTextChange(e)}/></label>
            <label className='add-contract-input'>Email: <input type='email' name='email' placeholder='Enter employee email' className='register-email' onChange={(e) => handleTextChange(e)}/></label>
            <labe className='add-contract-input'>Password: <input type='password' name='password' placeholder='Enter a password' className='register-password' onChange={(e) => handleTextChange(e)}/></labe>
            <button className='register-btn' onClick={() => handleRegister()}>Register</button>
        </div>
    )
};

export default Register;