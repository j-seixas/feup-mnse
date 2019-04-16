import React, { Component } from 'react';
import { Button } from "shards-react";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

class App extends Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Best Sports
            </a>
            </header>
            <Button theme="dark">Dark</Button>
        </div>
        );
    }
}

export default App;
