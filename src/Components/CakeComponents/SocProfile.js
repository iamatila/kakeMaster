import React from 'react';

function SocProfile(){
    return(
        <div>
            <hr />
            <h2 className="fs-title" style={{ backgroundColor: 'indigo', width: '40%', marginLeft: '315px' }}>
                Social Profiles</h2>
            <h3 className="fs-subtitle">Your presence on the social network</h3>
            <input id="me" type="text" name="email" placeholder="Email" />
            <input id="me" type="password" name="pass" placeholder="Password" />
            <input id="me" type="password" name="cpass" placeholder="Confirm Password" />
            <input id="me" type="text" name="twitter" placeholder="Twitter" />
            <input id="me" type="text" name="facebook" placeholder="Facebook" />
            <input id="me" type="text" name="gplus" placeholder="Google Plus" />

        </div>
        
    )
    
}

export default SocProfile;