import React from 'react';
import round_cake2 from "../../Pictures/round_cake2.jpg"; // with import
import round_cake4 from "../../Pictures/round_cake4.jpg"; // with import

function Contents(){
    return(
        <div>
            <hr />
            <h2 className="fs-title" style={{ backgroundColor: 'blue', width: '20%', marginLeft: '420px' }}>
                Content</h2>
            <div >
                <p>Click how types of cake you want. If you picked more than one layer, pick the different type of cake you
                    want not more than four(4) types, or simply pick one(1) and the entire layers in the cake will be the
                    one(1) you picked.
                        </p>
                <label className="cake_content">
                    <input type="checkbox" id="Chocolate_Cake" name="cake_content" value="Chocolate_Cake" />
                    <img src={round_cake4} alt="Cake Shapes" />
                    <div>Chocolate Cake</div>
                </label>
                <label className="cake_content">
                    <input type="checkbox" id="Sponge_Cake" name="cake_content" value="Sponge_Cake" />
                    <img src={round_cake2} alt="Cake Shapes" />
                    <div>Sponge Cake</div>
                </label>
                <label className="cake_content">
                    <input type="checkbox" id="Red_Velvet_Cake" name="cake_content" value="Red_Velvet_Cake" />
                    <img src={round_cake4} alt="Cake Shapes" />
                    <div>Red Velvet Cake</div>
                </label>
                <label className="cake_content">
                    <input type="checkbox" id="Carrot_Cake" name="cake_content" value="Carrot_Cake" />
                    <img src={round_cake2} alt="Cake Shapes" />
                    <div>Carrot Cake</div>
                </label>
                <label className="cake_content">
                    <input type="checkbox" id="Chiffon_Cake" name="cake_content" value="Chiffon_Cake" />
                    <img src={round_cake4} alt="Cake Shapes" />
                    <div>Chiffon Cake</div>
                </label>
                <label className="cake_content">
                    <input type="checkbox" id="Angel_Food_Cake" name="cake_content" value="Angel_Food_Cake" />
                    <img src={round_cake2} alt="Cake Shapes" />
                    <div>Angel Food Cake</div>
                </label>
                <label className="cake_content">
                    <input type="checkbox" id="Biscuit_Cake" name="cake_content" value="Biscuit_Cake" />
                    <img src={round_cake4} alt="Cake Shapes" />
                    <div>Biscuit Cake</div>
                </label>
                <label className="cake_content">
                    <input type="checkbox" id="Pound_Cake" name="cake_content" value="Pound_Cake" />
                    <img src={round_cake2} alt="Cake Shapes" />
                    <div>Pound Cake</div>
                </label>
                <label className="cake_content">
                    <input type="checkbox" id="Butter_Cake" name="cake_content" value="Butter_Cake" />
                    <img src={round_cake4} alt="Cake Shapes" />
                    <div>Butter Cake</div>
                </label>
                <label className="cake_content">
                    <input type="checkbox" id="Baked_Flourless_Cake" name="cake_content" value="Baked_Flourless_Cake" />
                    <img src={round_cake2} alt="Cake Shapes" />
                    <div>Baked Flourless Cake</div>
                </label>
                <label className="cake_content">
                    <input type="radio" id="Unbaked_Flourless_Cake" name="cake_content" value="Unbaked_Flourless_Cake" />
                    <img src={round_cake4} alt="Cake Shapes" />
                    <div>Unbaked Flourless Cake</div>
                </label>
                <label className="cake_content">
                    <input type="radio" id="Genoise_Cake" name="cake_content" value="Genoise_Cake" />
                    <img src={round_cake2} alt="Cake Shapes" />
                    <div>Genoise Cake</div>
                </label>
            </div>
        </div>
        
    )
    
}

export default Contents;