import React, { useState } from 'react';
import "./RegisterForm.css";
import imgSignUp from "./imgSignUp.png";

export function RegisterForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: 'ok',
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
            <div className="formContainer">
                <form className="form_Signup" onSubmit={handleSubmit}>
                <h2 className="signUph2"> <span className='span'>NEBULA</span></h2>

                    <h3 className='signUph3'>Discover a universe of rewards every time you travel. First-class journeys, exclusive benefits, and much more.</h3>
                    <input
                        onChange={handleInputChange}
                        value={formData.fullName}
                        name="fullName"
                        placeholder="Full Name"
                        className="inputSignUp"
                        type="text"
                    />
                    <input
                        onChange={handleInputChange}
                        value={formData.email}
                        name="email"
                        placeholder="Email"
                        className="inputSignUp"
                        type="email"
                    />
                    <input
                        onChange={handleInputChange}
                        value={formData.password}
                        name="password"
                        placeholder="Password"
                        className="inputSignUp"
                        type="password"
                    />
                    <input
                        onChange={handleInputChange}
                        value={formData.confirmPassword}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="inputSignUp"
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
                        <button type="submit" className="buttonSignup">Sign Up</button>
                        <p className="buttonorLogin" color="white">Or <span>Login</span></p>
                    </div>
                </form>
            </div>
        </>
    );
}
