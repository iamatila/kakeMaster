import React from 'react';

function Layers(props) {
        return(
            <div>
                    <div className="card carD">
                        <img src={props.src} alt="Image1" className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">{props.title}</h4>
                                <p className="card-text">{props.text}</p>
                            </div>
                    </div>
            </div>
                            
            
        )

}

export default Layers;