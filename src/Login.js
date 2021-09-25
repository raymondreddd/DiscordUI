import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import {auth, provider} from "./firebase" 

function Login() {
    const signIn = () =>{
        //ffff
        auth.signInWithPopup(provider).catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png" alt="dd" />
            </div>

            <Button onClick={signIn}>
                Sign In
            </Button>      
        </div>
    )
}

export default Login
