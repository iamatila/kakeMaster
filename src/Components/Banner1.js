import React, { Component } from 'react';

class Banner1 extends Component{
    render() {
        return(
            <div>
                <div className="container-fluid p-0">
                    <div className="site-content">
                        <div className="d-flex justify-content-center">
                            <div className="d-flex flex-column">
                                <h1 className="site-title">Bootstrap User Interface</h1>
                                <p className="site-desc">Insert anything you want... ;)</p>

                                <div className="d-flex flex-row">
                                    <input type="button" value="Cake Builder" className="btn site-btn px-4 py-3 mr-4 btn-dark" />
                                    {/* </input> */}
                                </div>
                            </div>
                    
                        </div>
                        

                    </div>
                </div>
            </div>
            
        )
    }
}

export default Banner1