import React from 'react';
import Home from './Pages/Home'

import CakeBuilder from './Pages/CakeBuilder'
import SetReminder from "./Pages/SetReminder";
import Gallery from "./Pages/Gallery";
import AboutUs from "./Pages/AboutUs";
import ContactUs from './Pages/ContactUs';

import LandingPage from './Pages/LandingPage'

import {Switch, Route} from 'react-router-dom'

// import SplitLogin from './Components/SplitLogin'
// import Banner1 from './Components/Banner1'
// import ViewingLayers from './Components/ViewingLayers'
// import LikeShare from './Components/LikeShare'
// import Statistics from './Components/Statistics'
// import JoinUs from './Components/JoinUs'
// import Footer from './Components/Footer'

import './App.css'
import './App1.css'
import './App2.css'

// import ViewingLayers from './Components/ViewingLayers';



function App() {
    return (
        <div className="App">
            

        {/* <Header /> */}
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/cakeBuilder' component={CakeBuilder} />
                <Route path="/setReminder" component={SetReminder} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/aboutUs" component={AboutUs} />
                <Route path="/contactUs" component={ContactUs} />
            </Switch>

        </div>
    );
}

export default App;
