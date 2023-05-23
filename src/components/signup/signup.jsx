import { React } from 'react';
import '../login/login.css';
import lock from "./padlock.png";
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='login-box'>
            <span className='lock-image'>
                <img className='lock' src={lock} alt="lock" />
            </span>
            <h2 className='title'>Sign in</h2>
            <span className='login-box_names-box'>
                <input className='data-inputs data-input-1 data-inputs_names' type="text" placeholder='First Name*' />
                <input className='data-inputs data-inputs_names' type="text" placeholder='Second Name*' />
            </span>
            <input className='data-inputs data-input-1' type="text" placeholder='Email Address*' />
            <input className='data-inputs last-input' type="text" placeholder='Password*' />
            <span className='remember'>
                <input type="checkbox" className='checkbox' name="Remember me" />
                <p>I want to receive inspiration, marketing promotions and updates via email</p>
            </span>
            <button className='signin-btn'>SIGN UP</button>
            <span className='link-text link-text_signup'> <Link to="/HomeWork20">Already have an account? Sign in</Link></span>
            <p className='copyright-text'>Copyright © My Website 2023.</p>
        </div>
    );
};


export default SignUp;

