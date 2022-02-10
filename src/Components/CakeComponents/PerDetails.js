import React from 'react';

function PerDetails(){
    return(
        <div>
            <hr />
            <h2 className="fs-title" style={{ backgroundColor: 'black', width: '40%', marginLeft: '310px' }}>
                Personal Details</h2>
            <h3 className="fs-subtitle">We will never sell it</h3>
            <input id="me" type="text" name="fname" placeholder="First Name" />
            <input id="me" type="text" name="lname" placeholder="Last Name" />
            <input id="me" type="text" name="phone" placeholder="Phone" />
            <textarea id="me" name="address" placeholder="Address"></textarea>
            
        </div>
        
    )
    
}

export default PerDetails;