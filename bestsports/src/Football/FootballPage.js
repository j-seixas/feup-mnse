import React, { Component } from 'react';
import { Container, Col, Card, CardBody, CardImg, Badge } from "shards-react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./FootballPage.css"

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="scoreBar">
                    <Container>
                        <Col>
                            <h1 className="titleScoreBar">Football<br></br>Scores</h1>
                            <Card small className="scoresWrapper">
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Vitória SC</p>
                                    <Badge className="score" outline pill theme="dark">5 - 1</Badge>
                                    <p className="rightTeam">Belenenses</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Chaves</p>
                                    <Badge className="score" outline pill theme="dark">1 - 2</Badge>
                                    <p className="rightTeam">Setúbal</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Nacional</p>
                                    <Badge className="score" outline pill theme="dark">0 - 4</Badge>
                                    <p className="rightTeam">FC Porto</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Rio Ave</p>
                                    <Badge className="score" outline pill theme="dark">2 - 3</Badge>
                                    <p className="rightTeam">SL Benfica</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Tottenham</p>
                                    <Badge className="score" outline pill theme="dark">2 - 2</Badge>
                                    <p className="rightTeam">Everton</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Man United</p>
                                    <Badge className="score" outline pill theme="dark">0 - 2</Badge>
                                    <p className="rightTeam">Cardiff City</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Watford</p>
                                    <Badge className="score" outline pill theme="dark">1 - 4</Badge>
                                    <p className="rightTeam">West Ham</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Southampton</p>
                                    <Badge className="score" outline pill theme="dark">1 - 1</Badge>
                                    <p className="rightTeam">Huddersfield</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Leicester City</p>
                                    <Badge className="score" outline pill theme="dark">0 - 0</Badge>
                                    <p className="rightTeam">Chelsea</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Fulham</p>
                                    <Badge className="score" outline pill theme="dark">0 - 4</Badge>
                                    <p className="rightTeam">Newcastle</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">SPAL</p>
                                    <Badge className="score" outline pill theme="dark">1 - 2</Badge>
                                    <p className="rightTeam">Napoli</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Roma</p>
                                    <Badge className="score" outline pill theme="dark">2 - 0</Badge>
                                    <p className="rightTeam">Juventus</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Bologna</p>
                                    <Badge className="score" outline pill theme="dark">4 - 1</Badge>
                                    <p className="rightTeam">Parma</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Inter Milan</p>
                                    <Badge className="score" outline pill theme="dark">2 - 0</Badge>
                                    <p className="rightTeam">Chievo</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Container>
                </div>

                <div className="news">
                    <div className="new">
                        <NavLink to="/footballnews">
                            <Card>
                                <CardImg top src="http://bit.ly/2LTJK4G" />
                                <CardBody>
                                    <p>Juventus beat Fiorentina 2-1 and are the Serie A champions</p>
                                </CardBody>
                            </Card>
                        </NavLink>

                    </div>
                    <div className="new">
                        <NavLink to="/footballcity">
                            <Card>
                                <CardImg top src="http://bit.ly/30igtnL" />
                                <CardBody>
                                    <p>Manchester City are Premier League Champions!!</p>
                                </CardBody>
                            </Card>
                        </NavLink>
                    </div>



                    <div className="new">
                        <NavLink to="/footballbarca">
                            <Card>
                                <CardImg top src="http://bit.ly/2VFmR9C" />
                                <CardBody>
                                    <p>Liverpool shockingly eliminate Barcelona</p>
                                </CardBody>
                            </Card>
                        </NavLink>
                    </div>
                    <div className="new">
                        <NavLink to="/footballajax">
                            <Card>
                                <CardImg top src="https://cnn.it/2LHzs7R" />
                                <CardBody>
                                    <p>Ajax victim of last minute goal heartbreaker</p>
                                </CardBody>
                            </Card>
                        </NavLink>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
