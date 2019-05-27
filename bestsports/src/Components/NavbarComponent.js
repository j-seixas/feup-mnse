import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from "shards-react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import "./navbar.css";

class NavbarComponent extends Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            dropdownOpen: false,
            collapseOpen: false,
            gif: null,
            height: null,
            playingUrl: '',
            audio: null,
            playing: false,
            idAnimation: null,
            audiofile: null
        };
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
            }
        });
    }

    componentDidMount() {
        this.handlegifs();
    }


    handlegifs() {
        if (window.location.href.search('football') !== -1) {
            this.setState({
                gif: "http://www.animatedimages.org/data/media/165/animated-football-and-soccer-image-0098.gif",
                height: "60",
                audiofile: require("../Assets/football.mp3")

            });
        } else if (window.location.href.search('basketball') !== -1 || window.location.href.search('bball') !== -1) {
            this.setState({
                gif: "https://www.fg-a.com/sports/basketball-slam-dunk-2018.gif",
                height: "80",
                audiofile: require("../Assets/basketball.mp3")
            });
        } else {
            this.setState({
                gif: null,
                height: null,
                audiofile: require("../Assets/homepage.wav")
            });
        }
    }


    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);
        if (!this.state.playing) {
            audio.play();
            this.setState({
                playingUrl: previewUrl,
                audio,
                playing: true,
                idAnimation: "animation"
            })
        }
        else if (this.state.playing) {
            this.state.audio.pause();
            this.setState({
                playing: null,
                playingUrl: '',
                audio: null,
                idAnimation: "animation-ended"
            })
        }
    }

    pauseAudio() {
        this.state.audio.pause();
    }

    render() {
        return (
            <Navbar type="dark" theme="dark" expand="md">
                <NavbarBrand href="/">BestSports</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} />

                <div>
                    <Button theme="dark" onClick={() => this.playAudio(this.state.audiofile)}>Play/Stop</Button>
                </div>
                <img id={this.state.idAnimation} src={this.state.gif} height={this.state.height}></img>


                <Nav navbar className="ml-auto">
                    <Search></Search>
                </Nav>


                <Nav navbar className="ml-auto">
                    <NavItem>
                        <NavLink to="/">
                            <Button theme="dark">
                                Home
                                </Button>

                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/basketball">
                            <Button theme="dark">
                                Basketball
                                </Button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/football">
                            <Button theme="dark">
                                Football
                                </Button>
                        </NavLink>
                    </NavItem>
                </Nav>

            </Navbar>
        );
    }
}

export default NavbarComponent;