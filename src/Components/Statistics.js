import React, { Component } from 'react';
import Stats from './schema/Stats';

import {statis} from '../InputArray/properties'

function manyStats(st){
    return(
        <Stats
            key={st.id}
            icon={st.icon}
            name={st.name}
            fulltext={st.fulltext}
        />
    )
}

class Statistics extends Component{
    render() {
        return(
            <div>
                <div class="section-3">
                    <div class="container">

                        <div class="layer">
                            {statis.map(manyStats)}
                            {/* <div class="col-md-4"> */}
                                {/* <div class="d-flex flex-row"> */}
                                    {/* <i class="fas fa-question fa-3x m-2"></i>
                                    <div class="d-flex flex-column">
                                        <h3 class="m-2">24/7 Support</h3>
                                        <p class="m-2">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </div> */}
                                {/* </div> */}
                            {/* </div> */}
                            {/* <div class="col-md-4">
                                <div class="d-flex flex-row">
                                    <i class="fas fa-seedling fa-3x m-2"></i>
                                    <div class="d-flex flex-column">
                                        <h3 class="m-2">Marketing</h3>
                                        <p class="m-2">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="d-flex flex-row">
                                    <i class="fas fa-rocket fa-3x m-2"></i>
                                    <div class="d-flex flex-column">
                                        <h3 class="m-2">Speed</h3>
                                        <p class="m-2">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-2">
                                <div class="col-md-4">
                                    <div class="d-flex flex-row">
                                        <i class="fas fa-user-shield fa-3x m-2"></i>
                                        <div class="d-flex flex-column">
                                            <h3 class="m-2">Authorized</h3>
                                            <p class="m-2">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="d-flex flex-row">
                                        <i class="fas fa-search fa-3x m-2"></i>
                                        <div class="d-flex flex-column">
                                            <h3 class="m-2">SEO</h3>
                                            <p class="m-2">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="d-flex flex-row">
                                        <i class="fas fa-sliders-h fa-3x m-2"></i>
                                        <div class="d-flex flex-column">
                                            <h3 class="m-2">Customize</h3>
                                            <p class="m-2">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                    </div>
                </div>
            </div>
            
        )
    }
}

export default Statistics;