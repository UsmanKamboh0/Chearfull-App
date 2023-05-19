import React, { useState, useEffect, Fragment } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Register, clearErrors, loginuser, logout } from './Redux/Actions/UserAction'
import { Link, useLocation } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom';

import './login.css'
const Login = ({ location, history }) => {

    const dispatch = useDispatch();
    const alert = useAlert();
    let navigate = useNavigate();

    const { error, loading, isAnthentication } = useSelector(
        (state) => state.user
    );

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = user;
    const [avatar, setAvatar] = useState("/Profile.png");
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");


    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(loginuser(loginEmail, loginPassword));
    };

    location = useLocation();
    const redirect = location.search ? location.search.split("=")[1] : "/screenA";
    function logoutUser() {
        dispatch(logout());
        alert.success("Logout Successfully");
    }
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isAnthentication) {
            navigate(redirect);
        }
    }, [dispatch, error, alert, history, isAnthentication, redirect]);




    return (
        <Fragment>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form onSubmit={loginSubmit}>
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <input type="text" required value={loginEmail}
                     onChange={(e) => setLoginEmail(e.target.value)}/>


                    <label for="password">Password</label>
                    <input type="password"  required
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
/>

                        <button type="submit" value="Login">Log In</button>
                        {/* <div class="social">
                            <div class="go"><i class="fab fa-google"></i>  Google</div>
                            <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
                        </div> */}
                    </form>
         


        </Fragment>
    )
}

export default Login