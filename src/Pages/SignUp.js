import React, { Component } from 'react';
import { NavLink} from "react-router-dom";


class SignUp extends Component{
    render() {
        return(
            <div className="section-top">
                <div class="Login">
                    <main id="main">

                        <div id="Login-tab" class="active_ ">Log In</div>
                        <p className='pade'> Log in for both Customers and Bakers</p>
                        <div id="loginform">
                            <div className="form-group pad">
                                <input type="text" class="form-control formControl inputbox" id="email" 
                                    placeholder="E-mail" />
                            </div>
                            <div className="form-group pad">
                                <input type="password" class="form-control formControl inputbox" id="password" 
                                    placeholder="Password" />
                            </div>
                            <div className="form-group pad">
                                <NavLink to='/home' className="btn btnn btnn-primary">Continue</NavLink>
                            </div>
                        </div>
                        <div className="textcenter logintext pad">
                            <NavLink to='/home' className="nav-link y">Not you? Login with a different account</NavLink>
                            <NavLink to='/home' className="nav-link y">Need an account? Sign up now</NavLink>
                        </div>
                    </main>    
                </div>
            </div>
            
        )
    }
}

export default SignUp;