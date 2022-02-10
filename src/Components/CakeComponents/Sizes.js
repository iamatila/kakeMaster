import React from 'react';

function Sizes(){
    return(
        <div>
                <hr />
            <div className="cake_size">
                <h2 className="fs-title" style={{ backgroundColor: 'yellow', width: '20%', marginLeft: '420px' }}>
                    Size</h2>
                <div className="round_cake text-center">
                    <label id="cakez" for="round_cake">Round Cake</label>
                    <input id="cakesize" type="radio" name="size" value="6*2 inches" checked />6*2 inches
                    <input id="cakesize" type="radio" name="size" value="8*1 1/2 inches" />8*1 1/2 inches
                    <input id="cakesize" type="radio" name="size" value="8*2 inches" />8*2 inches
                    <input id="cakesize" type="radio" name="size" value="9*1 1/2 inches" />9*1 1/2 inches
                    <input id="cakesize" type="radio" name="size" value="9*2 inches" />9*2 inches
                    <input id="cakesize" type="radio" name="size" value="10*2 inches" />10*2 inches
                    </div>
                <div className="square_cake">
                    <label id="cakez" for="square_cake">Square Cake</label>
                    <input id="cakesize" type="radio" name="size" value="8*8*1 1/2 inches" />8*8*1 1/2 inches
                    <input id="cakesize" type="radio" name="size" value="8*8*2 inches" />8*8*2 inches
                    <input id="cakesize" type="radio" name="size" value="9*9*1 1/2 inches" />9*9*1 1/2 inches
                    <input id="cakesize" type="radio" name="size" value="9*9*2 inches" />9*9*2 inches
                    <input id="cakesize" type="radio" name="size" value="10*10*2 inches" />10*10*2 inches
                    </div>
                <div className="loaf_cake">
                    <label id="cakez" for="loaf_cake">Loaf Cake</label>
                    <input id="cakesize" type="radio" name="size" value="8*4*2 1/2 inches" />8*4*2 1/2 inches
                    <input id="cakesize" type="radio" name="size" value="8 1/2*4 1/2*2 1/2 inches" />8 1/2*4 1/2*2 1/2 inches
                    <input id="cakesize" type="radio" name="size" value="9*5*3 inches" />9*5*3 inches
                    </div>
                <div className="bundt_cake">
                    <label id="cakez" for="bundt_cake">Bundt Cake</label>
                    <input id="cakesize" type="radio" name="size" value="7 1/2*3 inches" />7 1/2*3 inches
                    <input id="cakesize" type="radio" name="size" value="9*3 inches" />9*3 inches
                    <input id="cakesize" type="radio" name="size" value="10*3 1/2 inches" />10*3 1/2 inches
                    </div>
                <div className="rectangle_cake">
                    <label id="cakez" for="rectangle_cake">Rectangle Cake</label>
                    <input id="cakesize" type="radio" name="size" value="11*7*2 inches" />11*7*2 inches
                    <input id="cakesize" type="radio" name="size" value="13*9*2 inches" />13*9*2 inches
                    </div>
                <div className="jellyroll_cake">
                    <label id="cakez" for="jellyroll_cake">Jelly Roll Cake</label>
                    <input id="cakesize" type="radio" name="size" value="10 1/2*15 1/2*1 inches" />10 1/2*15 1/2*1 inches
                    <input id="cakesize" type="radio" name="size" value="12 1/2*17 1/2*1 inches" />12 1/2*17 1/2*1 inches
                    </div>
                <div className="love_cake">
                    <label id="cakez" for="love_cake">Love Cake</label>
                    <input id="cakesize" type="radio" name="size" value="8*2 1/2 inches" />8*2 1/2 inches
                    </div>

            </div>

        </div>
        
    )
    
}

export default Sizes;