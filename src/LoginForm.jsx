import React, { useState } from 'react';
import "./LoginForm.css";
import imgSignUp from "./imgSignUp.png";

export function LoginForm() {
    const [formData, setFormData] = useState({
    
        email: '',
        password: '',
        
        rememberPassword: false
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <img className="imgSignUp" src={imgSignUp} alt="" />
            <div className="formLoginContainer">
                <form className="form_Login" onSubmit={handleSubmit}>
                <h2 className="Loginh2"> <span className='span'>NEBULA</span></h2>

                    <h3 className='signUph3'>Discover a universe of rewards every time you travel. First-class journeys, exclusive benefits, and much more.</h3>
                 
                    <input
                        onChange={handleInputChange}
                        value={formData.email}
                        name="email"
                        placeholder="Email"
                        className="inputLogin"
                        type="email"
                    />
                    <input
                        onChange={handleInputChange}
                        value={formData.password}
                        name="password"
                        placeholder="Password"
                        className="inputLogin"
                        type="password"
                    />
                   
                    <label className='rememberMeTxt'>
                        Remember password
                        <input
                            onChange={handleInputChange}
                            checked={formData.rememberPassword}
                            name="rememberPassword"
                            className="checkbox18yo"
                            type="checkbox"
                        />
                    </label>
                    <div className="formButtons">
                        <button type="submit" className="buttonSignup">Login</button>
                        <p className="buttonorLogin" color="white">Or <span>Sign Up</span></p>
                    </div>
                </form>
            </div>
        </>
    );
}