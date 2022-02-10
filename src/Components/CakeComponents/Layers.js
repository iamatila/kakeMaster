import React from 'react';
import one_layer from "../../Pictures/one_layer.jpg"; // with import
import two_layer from "../../Pictures/two_layer.jpg"; // with import
import three_layer from "../../Pictures/three_layer.jpg"; // with import
import four_layer from "../../Pictures/four_layer.jpg"; // with import
import five_layer from "../../Pictures/five_layer.jpg"; // with import


function Layers(){
    return(
        <div>
            <hr />
            <div >
                <h2 className="fs-title" style={{ backgroundColor: 'green', width: '20%', marginLeft: '420px' }}>
                    Layers</h2>
                <label className="cake_layers">
                    <input type="radio" id="One_layer" name="cake_content" value="One_layer" />
                    <img src={one_layer} alt="Cake Layers" />
                    <div>One Layer</div>
                </label>
                <label className="cake_layers">
                    <input type="radio" id="Two_layers" name="cake_content" value="Two_layers" />
                    <img src={two_layer} alt="Cake Layers" />
                    <div>Two Layers</div>
                </label>
                <label className="cake_layers">
                    <input type="radio" id="Three_layers" name="cake_content" value="Three_layers" />
                    <img src={three_layer} alt="Cake Layers" />
                    <div>Three Layers</div>
                </label>
                <label className="cake_layers">
                    <input type="radio" id="Four_layers" name="cake_content" value="Four_layers" />
                    <img src={four_layer} alt="Cake Layers" />
                    <div>Four Layers</div>
                </label>
                <label className="cake_layers">
                    <input type="radio" id="Five_layers" name="cake_content" value="Five_layers" />
                    <img src={five_layer} alt="Cake Layers" />
                    <div>Five Layers</div>
                </label>
            </div>

        </div>
        
    )
    
}

export default Layers;