import React, { Component } from 'react';
import { Button } from "shards-react";
import background from './lebron.jpg';
import './LandingPage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

class Section extends Component {
    render() {
        return (
            <body>
                <div id="title"> BEST SPORTS </div>
                <div id="description"> For all your sport(ing) needs! </div>
                 <button id="browse" type="button">BROWSE</button> 
            </body>
        );
    }
}

export default Section;
