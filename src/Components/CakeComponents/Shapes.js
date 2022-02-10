import React, { useState } from 'react';
import Cake_Round from "../../Pictures/Custom_Cake_Round.jpg"
import Square_cake from "../../Pictures/Custom_square_cake.jpg"
import Rectangle_cake from "../../Pictures/Custom_rectangle_cake.jpg"
import Bundt_cake from "../../Pictures/Custom_bundt_cake.jpg"
import Loaf_cake from "../../Pictures/Custom_loaf_cake.jpg"
import Jellyroll_cake from "../../Pictures/Custom_jellyroll_cake.jpg"
import Love_cake from "../../Pictures/Custom_love_cake.jpg"


function Shapes(){
    // var cakeshape = document.getElementsByClassName('cakeshape');
    // var cs = '';
    // var i = 0;

    // for (i; i < 3; i++){
    //     if (cakeshape[i].selected === true){
    //         cs += cakeshape[i].value + ' ';
    //     }

    //     alert(cs);
    // }

    const [shape, setShape] = useState({
        name: "",
    });

    function handleChange(event){
        setShape({name: event.target.value});
    };
    

    return(
        <div>
            <hr />
            <h2 className="fs-title" style={{ backgroundColor: 'orange', width: '20%', marginLeft: '420px' }}>
                Shapes </h2>
            <h3 className="fs-subtitle">Pick your Cake shape {shape} </h3>

            <div className="cc-selector-2">

                {/* <div id="sc"> */}
                    <label className="shape cakeShape" for="squarecake">
                    <input type="radio" id="squarecake" onChange={handleChange} name="cakeshape" value="squarecake" />
                        <img src={Square_cake} alt="Square Cake" />
                        <div>Square <br/>Cake</div>
                    </label>
                {/* </div> */}

                {/* <div id="rc"> */}
                    <label className="shape cakeShape" for="roundcake">
                        <input id="roundcake" type="radio" onChange={handleChange} name="cakeshape" value="roundcake" />
                        <img src={Cake_Round} alt="Round Cake" />
                        <div>Round <br/>Cake</div>
                    </label>
                {/* </div> */}

                {/* <div id="rec"> */}
                    <label className="shape cakeShape" for="rectanglecake">
                        <input id="rectanglecake" type="radio" onChange={handleChange} name="cakeshape" value="rectanglecake" />
                        <img src={Rectangle_cake} alt="Rectangle Cake" />
                        <div>Rectangle <br/>Cake</div>
                    </label>
                {/* </div> */}

                {/* <div id="bc"> */}
                    <label className="shape cakeShape" for="bundtcake">
                    <input id="bundtcake" type="radio" onChange={handleChange} name="cakeshape" value="bundtcake" />
                        <img src={Bundt_cake} alt="Bundt Cake" />
                        <div>Bundt <br/>Cake</div>
                    </label>
                {/* </div> */}

                {/* <div id="lc"> */}
                    <label className="shape cakeShape" for="loafcake">
                    <input id="loafcake" type="radio" onChange={handleChange} name="cakeshape" value="loafcake" />
                        <img src={Loaf_cake} alt="Loaf Cake" />
                        <div>Loaf <br/>Cake</div>
                    </label>
                {/* </div> */}

                {/* <div id="jrc"> */}
                    <label className="shape cakeShape" for="jellyrollcake">
                    <input id="jellyrollcake" type="radio" onChange={handleChange} name="cakeshape" value="jellyrollcake" />
                        <img src={Jellyroll_cake} alt="Jelly Roll Cake" />
                        <div>Jelly Roll <br/>Cake</div>
                    </label>
                {/* </div> */}

                {/* <div id="lsc"> */}
                    <label className="shape cakeShape" for="loveshapecake">
                    <input id="loveshapecake" type="radio" onChange={handleChange} name="cakeshape" value="loveshapecake" />
                        <img src={Love_cake} alt="Love Shape Cake" />
                        <div>Love Shape <br/>Cake</div>
                    </label>
                {/* </div> */}

                {/* <div id="osc"> */}
                    <label className="shape cakeShape" for="othershapecake">
                    <input id="othershapecake" type="radio" onChange={handleChange} name="cakeshape" value="othershapecake" />
                        <img src={Square_cake} alt="Other Shape Cake" />
                        <div>Other Shape <br/>Cake</div>
                    </label>
                {/* </div> */}
            </div>

        </div>
        
    )
    
}

export default Shapes;