import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, CardBody, CardImg, FormInput, Badge} from "shards-react";
import { NavLink } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, } from 'react-share';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

class App extends Component {
    cardStyle = {
        display: 'block',
        width: '20vw',
        height: '20vw'
    };

    render() {
        return (
            <div className="App">            
            <Container>
                <Row>
                    <Col>
                        <h1 className="titleScoreBar">Basketball<br></br>Scores</h1>
                        <Card small className="scoresWrapper">
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Vitória SC</p>
                                <Badge className="score" outline pill theme="dark">5 - 1</Badge>
                                <p className="rightTeam">Belenenses</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Chaves</p>
                                <Badge className="score" outline pill theme="dark">1 - 2</Badge>
                                <p className="rightTeam">Setúbal</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Nacional</p>
                                <Badge className="score" outline pill theme="dark">0 - 4</Badge>
                                <p className="rightTeam">FC Porto</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Rio Ave</p>
                                <Badge className="score" outline pill theme="dark">2 - 3</Badge>
                                <p className="rightTeam">SL Benfica</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Tottenham</p>
                                <Badge className="score" outline pill theme="dark">2 - 2</Badge>
                                <p className="rightTeam">Everton</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Man United</p>
                                <Badge className="score" outline pill theme="dark">0 - 2</Badge>
                                <p className="rightTeam">Cardiff City</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Watford</p>
                                <Badge className="score" outline pill theme="dark">1 - 4</Badge>
                                <p className="rightTeam">West Ham</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Southampton</p>
                                <Badge className="score" outline pill theme="dark">1 - 1</Badge>
                                <p className="rightTeam">Huddersfield</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Leicester City</p>
                                <Badge className="score" outline pill theme="dark">0 - 0</Badge>
                                <p className="rightTeam">Chelsea</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Fulham</p>
                                <Badge className="score" outline pill theme="dark">0 - 4</Badge>
                                <p className="rightTeam">Newcastle</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">SPAL</p>
                                <Badge className="score" outline pill theme="dark">1 - 2</Badge>
                                <p className="rightTeam">Napoli</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Roma</p>
                                <Badge className="score" outline pill theme="dark">2 - 0</Badge>
                                <p className="rightTeam">Juventus</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Bologna</p>
                                <Badge className="score" outline pill theme="dark">4 - 1</Badge>
                                <p className="rightTeam">Parma</p>
                            </CardBody>
                            <CardBody className="scoreLine" small>
                                <p className="leftTeam">Inter Milan</p>
                                <Badge className="score" outline pill theme="dark">2 - 0</Badge>
                                <p className="rightTeam">Chievo</p>
                            </CardBody>
                        </Card>
                    </Col>
                        <Col>
                            <Row>
                                <FormInput placeholder="Search..." />
                            </Row>
                            <Row>
                                <NavLink to="/footballnews">
                                    <Card>
                                        <CardImg top src="http://bit.ly/2LTJK4G" />
                                        <CardBody>
                                            <p>Juventus beat Fiorentina 2-1 and are the Serie A champions</p>
                                        </CardBody>
                                    </Card>
                                </NavLink>
                            </Row>
                            <Row>
                                <NavLink to="/footballcity">
                                    <Card>
                                        <CardImg top src="http://bit.ly/30igtnL" />
                                        <CardBody>
                                            <p>Manchester City are Premier League Champions!!</p>
                                        </CardBody>
                                    </Card>
                                </NavLink>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Button theme="secondary">Primary</Button>
                                <Button theme="secondary">Secondary</Button>
                                <Button theme="secondary">Success</Button>
                            </Row>
                            <Row>
                                <NavLink to="/footballbarca">
                                    <Card>
                                        <CardImg top src="http://bit.ly/2VFmR9C" />
                                        <CardBody>
                                            <p>Liverpool shockingly eliminate Barcelona</p>
                                        </CardBody>
                                    </Card>
                                </NavLink>
                            </Row>
                            <Row>
                                <NavLink to="/footballajax">
                                    <Card>
                                        <CardImg top src="https://cnn.it/2LHzs7R" />
                                        <CardBody>
                                            <p>Ajax victim of last minute goal heartbreaker</p>
                                        </CardBody>
                                    </Card>
                                </NavLink>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
