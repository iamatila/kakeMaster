import React from 'react';

import Countrys from './CakeComponents/Countrys'
import Shapes from './CakeComponents/Shapes'
import Sizes from './CakeComponents/Sizes'
import Layers from './CakeComponents/Layers'
import Contents from './CakeComponents/Contents'
import SocProfile from './CakeComponents/SocProfile'
import Test from './CakeComponents/Test'
import PerDetails from './CakeComponents/PerDetails'
import DeliveryDate from './CakeComponents/DeliveryDate'

function CakesMaker() {
    
    function sendChange(event) {
        event.preventDefault();
        alert('got it');
    };

    return(
        <div>
            <div className="CakeBuilder">

                <form id="ms_form" onSubmit= {sendChange}>
                {/* <!-- progressbar--> */}
                    {/* <ul id="progressbar">
                        <li id='li' className="active">Country and State</li>
                        <li id='li'>Shapes & Sizes</li>
                        <li id='li'>Layers & Contents </li>
                        <li id='li'>Social Profiles</li>
                        <li id='li'>TEST</li>
                        <li id='li'>Personal Details</li>
                        <li id='li'>Date and Time</li>
                    </ul> */}
                
            
                {/* <!--fieldset--> */}
                <fieldset>

                    <Countrys />

                    <Shapes />
            
                    <Sizes />
                    
                    <Layers />

                    <Contents />

                    <SocProfile />

                    <Test />

                    <PerDetails />

                    <DeliveryDate />

                </fieldset>
                
            </form>

            </div>
            
        </div>
        
    )
    
}

export default CakesMaker;