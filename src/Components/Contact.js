import React, { Component } from 'react';

class Contact extends Component{
    render() {
        return(
            <div>
                <hr/>

                <div className="CakeBuilder">

                        <form id="msform">
                            <h1 className="fs-title">Contact Us</h1>
                            <h4 className="fs-subtitle"> We'd love to help!</h4>
                            <h6 className="fs-subtitle">Feel free to  let us know if you have any questions,
                            comments or messages, Please don't hesitate to let us know. </h6>
                            <input id="me" className="dee" type="text" name="name" placeholder="Name" />
                            <input id="me" type="text" name="email" placeholder="E-mail" />
                            <input id="me" type="text" name="subject" placeholder="Subject" />
                            <textarea id="me" name="message" placeholder="Message"></textarea>

                            <input type="submit" name="submit" class="submit action-button" value="Submit" />

                        </form>
                    </div>


                {/* <hr/> */}
            </div>
            
        )
    }
}

export default Contact;