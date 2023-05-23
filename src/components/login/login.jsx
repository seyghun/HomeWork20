import { React } from 'react';
import './login.css';
import lock from "./padlock.png";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-box'>
            <span className='lock-image'>
                <img className='lock' src={lock} alt="lock" />
            </span>
            <h2 className='title'>Sign in</h2>
            <input className='data-inputs data-input-1' type="text" placeholder='Email Address*' />
            <input className='data-inputs' type="text" placeholder='Password*' />
            <span className='remember-2'>
                <input type="checkbox" className='checkbox' name="Remember me" />
                <p>Remember me</p>
            </span>
            <button className='signin-btn'>SIGN IN</button>
            <span className='link-text'>
                <a href="!#">Forgot password?</a>
                <Link to="/signup" >Don't have an account? Sign up</Link>
            </span>
            <p className='copyright-text'>Copyright © My Website 2023</p>
        </div>
    );
};

export default Login;

