import React from 'react';

function Countrys(){
    return(
        <div>
            <h2 className="fs-title" style={{ backgroundColor: 'red', width: '40%', marginLeft: '325px'}}>
                Country and State</h2>
            <h3 className="fs-subtitle">Please choose your country and state</h3>

            <div className="cs text-center">

                Select Country (with states):   <select id="country" name="country"></select>
                Select State: <select name="state" id="state"></select>
            </div>
        </div>
        
    )
    
}

export default Countrys;