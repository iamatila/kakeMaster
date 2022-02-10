import React from 'react';
import { NavLink} from "react-router-dom";

let LoggedIn = false;

function isLoggedIn(){
    if (LoggedIn === true) {
        return (
            <div className='Logged'>
                <h1 className='text-center Loggedh1'>HELLO</h1>
                <NavLink to='/home' className="btn btn-danger Loggedlink">Continue</NavLink>
            </div>
        )} 
        else {
            return LandingPage();
        
    }
}

function LandingPage(){
        return(
            <div className="section-top">
                <div className="Login">
                    <div id="main">
                        <div id="Login">
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
                        </div>  

                        <div id="register_Customer">
                        <div id="customer-tab" class="active_">Cake Lovers</div>
                            <div class="form-group">
                                <input type="text" className="form-control form_m-control inputbox_ inputbox" 
                                id="Customer-firstname" placeholder="First Name" required />
                            </div>
                            <div class="form-group">
                                <input type="text" className="form-control form_m-control inputbox_ inputbox 
                                float-right f_r" id="Customer-lastname" placeholder="Last Name" required />
                            </div>
                            <div class="form-group">
                                <input type="text" className="form-control form_m-control inputbox_ inputbox" 
                                id="Customer-email" placeholder="E-mail" required />
                            </div>
                            <div class="form-group">
                                <input type="text" className="form-control form_m-control inputbox_ inputbox 
                                float-right f_r" id="Customer-phonenumber" placeholder="Phone Number" required />
                            </div>
                            <div class="form-group">
                                <input type="text" className="form-control form_m-control inputbox_ inputbox" 
                                id="Customer-address" placeholder="Address" required />
                            </div>
                            <div class="form-group">
                                <input type="text" className="form-control form_m-control inputbox_ inputbox 
                                float-right f_r" id="Customer-username" placeholder="Username @john" required />
                            </div>
                            <div class="form-group">
                                <input type="password" className="form-control form_m-control inputbox_ inputbox" 
                                id="Customer-password" placeholder="Password" required />
                            </div>
                            <div class="form-group">
                                <input type="password" className="form-control form_m-control inputbox_ inputbox 
                                float-right f_r" id="Customer-confirmpassword" placeholder="Confirm Password" required />
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btns btns-primary" value="Submit" />
                            </div>

                            <div class="textcenter registertext">Already have an account? <a href="Login.html">
                                Log in</a></div>
                            <div class="textcenter registertext">Create a Business Account <a href="Login.html">
                                For Baker</a></div>

                        </div>

                        <div id="register_Baker">
                            <div id="baker-tab" class="active_">Cake Makers</div>
                            <div class="form-group">
                                <input type="text" className="form-control form_m-control inputbox_ inputbox" 
                                id="baker-firstname" placeholder="First Name" required />
                            </div>
                            <div class="form-group">
                                <input type="text" className="form-control form_m-control inputbox_ inputbox 
                                float-right f_r" id="baker-lastname" placeholder="Last Name" required />
                            </div>
                            <div class="form-group">
                                <input type="text" className="form-control form_m-control inputbox_ inputbox" 
                                id="baker-email" placeholder="E-mail" required />
                            </div>
                            <div class="form-group">
                                <input type="text" className="form-control form_m-control inputbox_ inputbox 
                                float-right f_r" id="baker-username" placeholder="Username @john" required />
                            </div>
                            <div class="form-group">
                                <input type="text" className="form-control form_m-control inputbox_ inputbox" 
                                id="baker-phonenumber" placeholder="Phone Number" required />
                            </div>
                            <div class="form-group">
                                <input type="text" className="form-control form_m-control inputbox_ inputbox 
                                float-right f_r" id="baker-companyname" placeholder="Company Name" required />
                            </div>
                            <div class="form-group">
                                <input type="password" className="form-control form_m-control inputbox_ inputbox" 
                                id="baker-password" placeholder="Password" required />
                            </div>
                            <div class="form-group">
                                <input type="password" className="form-control form_m-control inputbox_ inputbox 
                                float-right f_r" id="baker-confirmpassword" placeholder="Confirm Password" required / >
                            </div>
                            <div class="form-group">
                                <textarea type="text" className="form-control form_m-control inputbox_ inputbox" 
                                id="baker-address" placeholder="Address" required></textarea>
                            </div>
                            <div class="form-group">
                                <textarea type="text" className="form-control form_m-control inputbox_ inputbox 
                                float-right f_r" id="baker-message" placeholder="About yourself and your company" required></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btns btns-primary" value="Submit" />
                            </div>
                            <div class="textcenter registertext">Already have an account? <a href="Login.html">
                                Log in</a></div>
                            <div class="textcenter registertext">Create a Customer Account <a href="Login.html">
                                For Customer</a></div>
                        </div>
                        

                    </div>
                </div>
            </div>
            
        );
}

export default isLoggedIn;