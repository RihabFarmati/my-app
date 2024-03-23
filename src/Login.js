import React, { useState } from 'react';
import './Login.css';
import AuthService from './services/authentication-service';
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    const { username, password } = login;

    const onInputChange = e => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const submit = async e => {
        e.preventDefault();
        AuthService.login(username, password);
        if (localStorage.getItem("auth")) {
            navigate('/store')
        }
    }

    return (
        <div className="Main-container">
            <div className="Login-container">
                <h2>Login</h2>
                <form className="Login-form" onSubmit={e => submit(e)}>
                    <div>
                        <input type="text" name="username" placeholder="Username" value={username} onChange={e => onInputChange(e)} required />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={e => onInputChange(e)} required />
                    </div>
                    <button type="button" onClick={submit}>Login</button>
                </form>
            </div>
        </div>

        
    );
}
