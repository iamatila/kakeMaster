import React from 'react';
import Header from "../Components/Header";
import Footer from '../Components/Footer'
import CakesMaker from '../Components/CakesMaker'

function CakeBuilder() {
    return (
        
        <div>
            <Header />
            <CakesMaker />
            <Footer />
        </div>

    );
}

export default CakeBuilder;