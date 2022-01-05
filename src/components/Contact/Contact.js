import React, { useState } from 'react';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

import './Contact.css';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();



const Contact = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState('false');
    const auth = getAuth();

    const toggleLogIn = e => {
        setIsLogin(e.target.checked)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
            })

    }

    // Google Sign In
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    }
    return (
        <div className='contact-name'>

            <div style={{ width: '600px', display: 'flex' }}>
                <img src="https://image.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg" alt="" />
            </div>
            <div style={{ display: 'flex', marginLeft: '150px', marginTop: '50px', }}>

                <form onSubmit={handleRegistration} className='form'>
                    <h5>Fell Free Contact With Us</h5>
                    <h3 style={{ color: '#86c64Ded', fontFamily: 'arial', fontWeight: 'bold' }}>Please <span style={{ color: 'red' }}>{isLogin ? 'Login' : 'Register'}</span></h3>

                    <div style={{ marginBottom: '30px' }}>
                        <input onBlur={handleEmailChange} style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '8px', paddingBottom: '8px', width: '450px', border: '2px solid #86c64D', borderRadius: '10px', boxShadow: '5px 5px 2px grey' }} placeholder='Email' type="text" required />
                    </div>

                    <div onBlur={handlePasswordChange} style={{ marginBottom: '30px' }}>
                        <input style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '8px', paddingBottom: '8px', width: '450px', border: '2px solid #86c64D', borderRadius: '10px', boxShadow: '5px 5px 2px grey' }} type="password" name="" placeholder='password' id="" required />
                    </div>

                    <div>
                        <input onChange={toggleLogIn} type="checkbox" name="" id="" />

                        <label> Already Registerd?</label>
                        <a style={{ marginLeft: '190px', textDecoration: 'none' }} href="">Please Login</a>
                    </div>

                    <div style={{ color: 'red' }}>{error}</div>
                    <button style={{ backgroundColor: '#86c64D', border: '1px solid white', borderRadius: '5px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '5px', paddingBottom: '5px', boxShadow: '5px 5px 2px white', marginLeft: '180px', fontSize: '20px', fontWeight: '500px', color: 'white' }}>Send</button>



                    <div>

                        <div style={{ marginLeft: '90px', marginBottom: '20px' }}>-----Or use one of these options-----</div>

                        <button style={{ marginLeft: '110px', paddingLeft: '15px', paddingRight: '15px', paddingTop: '5px', paddingBottom: '5px', borderRadius: '5px', border: '2px solid red', boxShadow: '5px 5px 2px gray', }} onClick={handleGoogleSignIn}> <span style={{ fontSize: '26px', color: 'red', fontFamily: 'Arial', fontWeight: 'bold' }}>G</span> Sign up with google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;