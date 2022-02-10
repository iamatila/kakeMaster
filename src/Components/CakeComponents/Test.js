import React from 'react';

function Test(){
    return(
        <div>
            <hr />
            <h2 className="fs-title" style={{ backgroundColor: 'violet', width: '20%', marginLeft: '410px' }}>
                Test</h2>
            <h3 className="fs-subtitle">We will never sell it</h3>
            <input id="me" type="text" name="fname" placeholder="your First Name" />
            <input id="me" type="text" name="lname" placeholder="your Last Name" />
            <input id="me" type="text" name="phone" placeholder="your Phone" />
            <textarea id="me" name="address" placeholder="your Address"></textarea>
            
            {/* <input type="button" name="previous" className="previous action-button" value="Previous" />
            <input type="button" name="next" className="next action-button" value="Next" /> */}
        </div>
        
    )
    
}

export default Test;