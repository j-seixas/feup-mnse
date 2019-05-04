import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Home from "./HomePage/HomePage";
import Basketball from "./Basketball/BasketballPage";
import Football from "./Football/FootballPage";
import BasketballNews from "./News/BasketballHigh1";
import FootballNews from "./News/FootballHigh1";
import NavbarComponent from './Components/NavbarComponent';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <NavbarComponent/>

                    <Route path="/" component={Home} exact/>
                    <Route path="/basketball" component={Basketball}/>
                    <Route path="/football" component={Football}/>
                    <Route path="/basketballnews" component={BasketballNews}/>
                    <Route path="/footballnews" component={FootballNews}/>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;