import React from 'react';

function Stats(props) {
        return(
            <div>
                <div class="carD">
                    <div class="d-flex flex-row">
                        <i class={props.icon}></i>
                        <div class="d-flex flex-column">
                            <h3 class="m-2">{props.name}</h3>
                            <p class="m-2">
                                {props.fulltext}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                            
            
        )

}

export default Stats;