import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from './firebase'
import firebase from 'firebase'
import { login } from './features/userSlice'
import './Login.css'
function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png" alt="gmail"/>
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
