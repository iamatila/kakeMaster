import React, { Component } from 'react';

class LikeShare extends Component{
    render() {
        return(
            <div>
                <div class="section-2">
                    <div class="container-fluid">
                        <div class="d-flex justify-content-end">
                            <div class="d-flex flex-column m-4">
                                <h1 class="heading-1">Like & share</h1>
                                <p class="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                
                                <input type="button" value="Show" class="btn btn-danger" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default LikeShare;