import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


import Home from "./HomePage/HomePage";
import Basketball from "./Basketball/BasketballPage";
import Football from "./Football/FootballPage";
import BasketballNews from "./News/BasketballOne";
import BasketballNewsTwo from "./News/BasketballTwo";
import BasketballNewsThree from "./News/BasketballThree";
import BasketballNewsFour from "./News/BasketballFour";
import FootballNews from "./News/FootballOne";
import FootballNewsTwo from "./News/FootballTwo";
import FootballNewsThree from "./News/FootballThree";
import FootballNewsFour from "./News/FootballFour";
import NavbarComponent from './Components/NavbarComponent';

library.add(faChevronRight)

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
                    <Route path="/footballcity" component={FootballNewsTwo}/>
                    <Route path="/footballbarca" component={FootballNewsThree}/>
                    <Route path="/footballajax" component={FootballNewsFour}/>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;