/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import joinUs from '../Pictures/patrick-fore.jpg'

class JoinUs extends Component{
    render() {
        return(
            <div>
                <div class="section-4 bg-dark">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7">
                                <img src={joinUs} alt="Image-7" width="590"/>
                            </div>
                            <div class="col-md-5">
                                <h1 class="text-white">Don't Know Where To Start From?</h1>
                                <a href="hdh">Join Us</a>
                                <p class="para-1">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                        when an unknown printer took a galley of type and scrambled it to make a type 
                                        specimen book. It has survived not only five centuries, but also the leap into 
                                        electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default JoinUs;