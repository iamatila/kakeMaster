import React from 'react';

function DeliveryDate(){
    return(
        <div>
            <hr />
            <form action="#" className="ws-validate">
                <h2 className="fs-title" style={{ backgroundColor: 'brown', width: '40%', marginLeft: '315px' }}>
                    Delivery Date </h2>

                <div class="form-row format-date "> <span className="date-display"></span>

                    <input type="date" className="hide-replaced text-center" />
                </div>
                <div className="form-row">
                    <input type="submit" />
                </div>

                <input type="submit" name="submit" className="submit action-button" value="Submit" />
            </form>
        </div>
        
    )
    
}

export default DeliveryDate;