import React, {useState, useContext, useEffect} from "react";
import "./auth.css";
import API from '../api-service';
import { TokenContext } from "../index";
import {useCookies} from 'react-cookie';

import base2 from "../static/img/base-1@1xe.svg"
import bgWelBack from "../static/img/baninkg-app-illustration-01@2x.png"
import obj11 from "../static/img/object-12@2x.svg"
import obj14 from "../static/img/object-14@2x.svg"
import obj13 from "../static/img/object-13@2x.svg"

function Auth(props){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //const {token, setToken} = useContext(TokenContext);
    const [token, setToken] = useCookies(['mr-token']);
    const [isLoginView, setIsLoginView] = useState(true);

    useEffect( () => {
      console.log(token);
      if(token['mr-token']) window.location.href = './accounts'
    }, [token])


    const loginClicked = () => {
      API.loginUser({username, password})
      //.then(resp => setToken(resp.token))
      .then(resp => setToken('mr-token', resp.token))
      .catch(error => console.log(error))
    }

    const registerClicked = () => {
      API.registerUser({username, password})
      //.then(resp => setToken(resp.token))
      .then(resp => loginClicked())
      .catch(error => console.log(error))
    }
    const isDisabled = username.length === 0 || password.length === 0;
    return (
      <div className="App">
        <header className="App-header">
          <h1>WUNM</h1>        
        </header>
        <div className="Auth">
            {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}             
            <label htmlFor="username">User Name</label><br/>
            <input id="username" type="text" placeholder="User Name" value={username} onChange={evt => setUsername(evt.target.value)}/><br/>
            <label htmlFor="password">Password</label><br/>
            <input id="password" type="password" placeholder="Password" value={password} onChange={evt => setPassword(evt.target.value)}/><br/>
            { isLoginView ?<button onClick={loginClicked} disabled = {isDisabled}>Login</button> : <button onClick={registerClicked}>Register</button>}
            { isLoginView ?
              <p onClick={()=>setIsLoginView(false)}>You don't have an account? Register here!</p>:
              <p onClick={()=>setIsLoginView(true)}>You already have an account? Login here!</p>
            }            
        </div>
      </div>
    )
}

export default Auth;