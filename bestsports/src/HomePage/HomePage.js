import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, CardBody, CardImg, CardText } from "shards-react";
import { NavLink } from "react-router-dom";
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
                            <Row>
                                <h1>Some Basketball Scores</h1>
                            </Row>
                            <Row>
                                Philadelphia 76ers 102 - 111 Brooklyn Nets
                            </Row>
                            <Row>
                                Toronto Raptors 101 - 104 Orlando Magic
                            </Row>
                            <Row>
                                GS Warriors 121 - 104 LA Clippers
                            </Row>
                            <Row>
                                Denver Nuggets 96 - 101 SA Spurs
                            </Row>
                            <Row>
                                Boston Celtics 84 - 74 Indiana Pacers
                            </Row>
                            <Row>
                                POR Trail Blazers 104 - 99 OKC Thunder
                            </Row>
                            <Row>
                                Milwaukee Bucks 121 - 86 Detroit Pistons
                            </Row>
                        </Col>
                    </Container>
                </div>
                <div className="highlights">
                    <Container>
                        <Col>
                            <Row>
                                <NavLink to="/basketballnews">
                                    <Card>
                                        <CardImg top src="http://bit.ly/2ZZO31G" />
                                        <CardBody>
                                            <p>Magic stun No. 2 seed Raptors in final moments of Game 1</p>
                                        </CardBody>
                                    </Card>
                                </NavLink>
                            </Row>
                            <Row>
                                <NavLink to="/footballnews">
                                    <Card>
                                        <CardImg top src="http://jornaldoluxemburgo.com/wp-content/uploads/2017/12/DOC.20171201.23347392.MA414.jpg" />
                                        <CardBody>
                                            <p>Sporting “atropela” Belenenses SAD no Jamor (8-1) com hat-trick de Bruno Fernandes e regresso de Dost </p>
                                        </CardBody>
                                    </Card>
                                </NavLink>
                            </Row>
                            <Row>
                                <Button theme="dark" onClick={() => this.playAudio("http://freesound.org/data/previews/191/191929_923993-lq.mp3")}>Play/Stop</Button>
                            </Row>
                        </Col>
                    </Container>
                </div>
                <div className="scoreBar">
                    <Container>
                        <Col>
                            <Row>
                                <h1>Some Football Scores</h1>
                            </Row>
                            <Row>
                                <Card small className="scoresWrapper">
                                    <CardBody className="scoreLine" small>
                                        <p className="leftTeam">FC Porto</p>
                                        <p className="score">4 - 0</p>
                                        <p className="rightTeam">Desportivo das Aves</p>
                                          
                                    </CardBody>
                                    <CardBody className="scoreLine" small>
                                        <p className="leftTeam">SC Sporting</p>
                                        <p className="score">8 - 1</p>
                                        <p className="rightTeam">Belenenses SAD</p>
                                    </CardBody>
                                    <CardBody className="scoreLine" small>
                                        <p className="leftTeam">Moreirense</p>
                                        <p className="score">1 - 2</p>
                                        <p className="rightTeam">Rio Ave</p>
                                    </CardBody>
                                    <CardBody className="scoreLine" small>
                                        <p className="leftTeam">Feirense</p>
                                        <p className="score">4 - 4</p>
                                        <p className="rightTeam">Desportivo Chaves</p>
                                    </CardBody>
                                    <CardBody className="scoreLine" small>
                                        <p className="leftTeam">Marítimo</p>
                                        <p className="score">1 - 0</p>
                                        <p className="rightTeam">SC Braga</p>
                                    </CardBody>

                                </Card>
                                <Card small >
                                    <CardBody>
                                        SC Sporting 8 - 1 Belenenses SAD
                                    </CardBody>

                                </Card>
                                
                            </Row>
                            <Row>
                                SC Sporting 8 - 1 Belenenses SAD
                            </Row>
                            <Row>
                                Moreirense 1 - 2 Rio Ave
                            </Row>
                            <Row>
                                Feirense 4 - 4 Desportivo Chaves
                            </Row>
                            <Row>
                                Marítimo 1 - 0 SC Braga
                            </Row>
                            <Row>
                                Tondela 1 - 3 Santa Clara
                            </Row>
                            <Row>
                                Vitória SC 2 - 2 Nacional da Madeira
                            </Row>
                        </Col>
                    </Container>
                </div>
            </div>
        );
    }
}

export default App;
