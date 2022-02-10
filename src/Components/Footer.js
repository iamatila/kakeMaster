import React, { Component } from 'react';

class Footer extends Component{
    render() {
        return(
            <footer>
                <div className="section-5 text-center">
                    <h4 id="footer">Subscribe</h4>

                    <div className="form-inline justify-content-center">
                        <input type="text" name="Email" id="email" 
                            placeholder="Email" size="40" className="form-control px-4 py-2" />
                        <input type="button" value="Submit" 
                            className="btn btn-danger m-2 px-4 py-2" />
                    </div>

                            <div className="social" id="f1">
                                <div className="d-flex flex-row justify-content-center">
                                    <i className="fab fa-facebook-f m-2"></i>
                                    <i className="fab fa-twitter m-2"></i>
                                    <i className="fab fa-instagram m-2"></i>
                                    <i className="fab fa-youtube m-2"></i>
                                </div>
                            </div>

                            <hr />
                                <h5> Kakemasters &copy;</h5>
                </div>
            </footer>
            
        )
    }
}

export default Footer;