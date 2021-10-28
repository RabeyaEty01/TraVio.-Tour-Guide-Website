import React from 'react';
import { Link,useHistory ,useLocation } from 'react-router-dom';
import loginImg from '../../../images/login.jpg';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';
const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location =useLocation();
    const history = useHistory();
    const redirect_uri= location.state?.from ||'/home';
        
        const handleGoogleLogin =()=>{
             signInUsingGoogle()
              .then(result => {
               history.push(redirect_uri);
            })
           
        }

    return (
        <section className="Form my-4 mx-5">
            <div className="container">
                <div className="row login-form-row no-gutters">
                    <div className="col-lg-5">
                        <img className=" img-fluid login-img" src={loginImg} alt="" />
                    </div>
                    <div className="col-lg-7 px-5 pt-5 text-start">
                        <h1 className="fw-bold py-3 ">Logo</h1>
                        <h4>Sign into your account</h4>
                        <form>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="email" placeholder="Email-Address" className="form-control my-3 p-4" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="password" placeholder="****************" className="form-control my-3 p-4" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <button type="button" className="btn1 mt-3 my-3">Login</button>
                                </div>
                            </div>

                            <p>Don't have an account? <Link href="#">Register here</Link></p>

                            <h5 className="fw-bold">
                            OR</h5>

                            <div className="form-row">
                                <div className="col-lg-7">
                                    <button onClick={handleGoogleLogin} type="button" className="btn1 mt-3 mb-5"><i class="fab fa-google "></i> Sign In With Google</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;