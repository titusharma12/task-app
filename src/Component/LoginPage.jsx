import React, {useState} from 'react';
import '../App.css';

function LoginPage({ onLogin }) {
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [error,setError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
        console.log("dslfenkl", email, password)
    if(!email || !password){
        setError('Email and password are required');
    }else{
        setError('');
        onLogin(email,password);
    }};
  return (
    <div className='login-Page'>
        
        <form onSubmit={handleSubmit} className='form-sign'>
            <h4 className='heading'>Login</h4>
            <div className="login-email">
                <input type="email" placeholder='email'   value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="login-password">
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            {error && <p className='error'>{error}</p>}

            <button type ="submit" className='signup'>SIGN IN</button>
        </form>
    </div>
  );
}

export default LoginPage ;
