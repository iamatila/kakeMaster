import React from 'react';
import Layers from './schema/Layers';

import viewLayers from '../InputArray/properties'


function vLayer(layer) {
    return (
        <Layers
            key={layer.id}
            src={layer.src}
            title={layer.title}
            text={layer.text}
        />
    )
}

function ViewingLayers() {
        return(
            <div>
                <div className="section-1">
                    <div className="container text-center">
                        <h1 className="heading-1">Fantastic Features</h1>
                        <h1 className="heading-2">& Different type of Template</h1>
                        <p className="para-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </p>

                        <div className="layer justify-content-center text-center layer">
                            {viewLayers.map(vLayer)}
                        </div>
                        

                    </div>
                </div>
            </div>
            
        )

}

export default ViewingLayers;