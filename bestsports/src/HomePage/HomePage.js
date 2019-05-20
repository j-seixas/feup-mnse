import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, CardBody, CardImg, Badge, CardImgOverlay, CardTitle } from "shards-react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './HomePage.css';
//import NavbarComponent from '../Components/NavbarComponent'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playingUrl: '',
            audio: null,
            playing: false
        }
    }

    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);
        if (!this.state.playing) {
            audio.play();
            this.setState({
                playingUrl: previewUrl,
                audio,
                playing: true
            })
        }
        else if (this.state.playing) {
            this.state.audio.pause();
            this.setState({
                playing: null,
                playingUrl: '',
                audio: null
            })
        }
    }

    pauseAudio() {
        this.state.audio.pause();
    }

    render() {
        return (
            <div className="App">
                <div className="scoreBar">
                    <Container>
                        <Col>
                            <h1 className="titleScoreBar">Basketball<br></br>Scores</h1>
                            <Card small className="scoresWrapper">
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">Philadelphia 76ers</p>
                                    <Badge className="score" outline pill theme="dark">102 - 101</Badge>
                                    <p className="rightTeam">Brooklyn Nets</p>
                                </CardBody>
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">Toronto Raptors</p>
                                    <Badge className="score" outline pill theme="dark">101 - 104</Badge>
                                    <p className="rightTeam">Orlando Magic</p>
                                </CardBody>
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">GS Warriors</p>
                                    <Badge className="score" outline pill theme="dark">121 - 104</Badge>
                                    <p className="rightTeam">LA Clippers</p>
                                </CardBody>
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">Denver Nuggets</p>
                                    <Badge className="score" outline pill theme="dark">96 - 101</Badge>
                                    <p className="rightTeam">SA Spurs</p>
                                </CardBody>
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">Boston Celtics</p>
                                    <Badge className="score" outline pill theme="dark">84 - 74</Badge>
                                    <p className="rightTeam">Indiana Pacers</p>
                                </CardBody>
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">POR Trail Blazers</p>
                                    <Badge className="score" outline pill theme="dark">104 - 99</Badge>
                                    <p className="rightTeam">OKC Thunder</p>
                                </CardBody>
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">Milwaukee</p>
                                    <Badge className="score" outline pill theme="dark">121 - 86</Badge>
                                    <p className="rightTeam">Detroit Pistons</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Container>
                </div>
                <div className="highlights">
                    <div className="newHighlight">
                        <NavLink to="/basketballnews">
                            <Card className="centerHighlight">
                                <CardImg top bottom src="http://bit.ly/2ZZO31G" />
                                <CardImgOverlay>
                                    <CardTitle>
                                        Magic stun No. 2 seed Raptors in final moments of Game 1
                                            </CardTitle>
                                    <Button size="lg" theme="light">
                                        Read More
                                                <FontAwesomeIcon icon="chevron-right" />
                                    </Button>
                                </CardImgOverlay>
                                
                            </Card>
                        </NavLink>

                    </div>
                    <div className="newHighlight">
                        <NavLink to="/footballnews">
                            <Card className="centerHighlight">
                                <CardImg top src="http://jornaldoluxemburgo.com/wp-content/uploads/2017/12/DOC.20171201.23347392.MA414.jpg" />
                                <CardImgOverlay>
                                    <CardTitle>
                                        Sporting “atropela” Belenenses SAD no Jamor (8-1) com hat-trick de Bruno Fernandes e regresso de Dost
                                            </CardTitle>
                                    <Button size="lg" theme="light">
                                        Read More
                                                <FontAwesomeIcon icon="chevron-right" />
                                    </Button>
                                </CardImgOverlay>
                            </Card>
                        </NavLink>

                    </div>
                    <div>
                        <Button theme="dark" onClick={() => this.playAudio("http://freesound.org/data/previews/191/191929_923993-lq.mp3")}>Play/Stop</Button>
                    </div>
                </div>
                <div className="scoreBar">
                    <Container>
                        <Col>
                            <h1 className="titleScoreBar">Football<br></br>Scores</h1>
                            <Card small className="scoresWrapper">
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">FC Porto</p>
                                    <Badge className="score" outline pill theme="dark">4 - 0</Badge>
                                    <p className="rightTeam">Desportivo das Aves</p>
                                </CardBody>
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">SC Sporting</p>
                                    <Badge className="score" outline pill theme="dark">8 - 1</Badge>
                                    <p className="rightTeam">Belenenses SAD</p>
                                </CardBody>
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">Moreirense</p>
                                    <Badge className="score" outline pill theme="dark">1 - 2</Badge>
                                    <p className="rightTeam">Rio Ave</p>
                                </CardBody>
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">Feirense</p>
                                    <Badge className="score" outline pill theme="dark">4 - 4</Badge>
                                    <p className="rightTeam">Desportivo Chaves</p>
                                </CardBody>
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">Marítimo</p>
                                    <Badge className="score" outline pill theme="dark">1 - 0</Badge>
                                    <p className="rightTeam">SC Braga</p>
                                </CardBody>
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">Tondela</p>
                                    <Badge className="score" outline pill theme="dark">1 - 3</Badge>
                                    <p className="rightTeam">Santa Clara</p>
                                </CardBody>
                                <CardBody className="scoreLine" small>
                                    <p className="leftTeam">Vitória SC</p>
                                    <Badge className="score" outline pill theme="dark">2 - 2</Badge>
                                    <p className="rightTeam">Nacional da Madeira</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Container>
                </div>
            </div>
        );
    }
}

export default App;
