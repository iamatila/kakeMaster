import React from 'react';

import Header from '../Components/Header'
import Banner1 from '../Components/Banner1'
import ViewingLayers from '../Components/ViewingLayers'
import LikeShare from '../Components/LikeShare'
import Statistics from '../Components/Statistics'
import JoinUs from '../Components/JoinUs'
import Footer from '../Components/Footer'


function App() {
    return (
        <div className="App">

            <Header />
            <Banner1 />
            <ViewingLayers />
            <LikeShare />
            <Statistics />
            <JoinUs />
            <Footer />
        </div>
    );
}

export default App;
