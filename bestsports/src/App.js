import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Home from "./HomePage/HomePage";
import Basketball from "./Basketball/BasketballPage";
import Football from "./Football/FootballPage";
import BasketballNews from "./News/BasketballHighOne";
import FootballNews from "./News/FootballHigh1";
import NavbarComponent from './Components/NavbarComponent';
import BasketballNewsTwo from "./News/BasketballHighTwo";
import BasketballNewsThree from "./News/BasketballThree";
import BasketballNewsFour from "./News/BasketballFour";

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
                    <Route path="/bballphilly" component={BasketballNewsTwo}/>
                    <Route path="/bballhouston" component={BasketballNewsThree}/>
                    <Route path="/bballceltics" component={BasketballNewsFour}/>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;