import React, { Component } from 'react';
import { Container, Col, Card, CardBody, CardImg, Badge } from "shards-react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./BasketballPage.css"
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="scoreBar">
                    <Container>
                        <Col>
                            <h1 className="titleScoreBar">Basketball<br></br>Scores</h1>
                            <Card small className="scoresWrapper">
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Houston Rockets</p>
                                    <Badge className="score" outline pill theme="dark">112 - 108</Badge>
                                    <p className="rightTeam">GS Warriors</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Toronto Raptors</p>
                                    <Badge className="score" outline pill theme="dark">125 - 89</Badge>
                                    <p className="rightTeam">Philadelphia 76ers</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Denver Nuggets</p>
                                    <Badge className="score" outline pill theme="dark">124 - 98</Badge>
                                    <p className="rightTeam">POR Trail Blazers</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Milwaukee Bucks</p>
                                    <Badge className="score" outline pill theme="dark">116 - 91</Badge>
                                    <p className="rightTeam">Boston Celtics</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">GS Warriors</p>
                                    <Badge className="score" outline pill theme="dark">104 - 99</Badge>
                                    <p className="rightTeam">Houston Rockets</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Philadelphia 76ers</p>
                                    <Badge className="score" outline pill theme="dark">112 - 101</Badge>
                                    <p className="rightTeam">Toronto Raptors</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">POR Trail Blazers</p>
                                    <Badge className="score" outline pill theme="dark">119 - 108</Badge>
                                    <p className="rightTeam">Denver Nuggets</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Houston Rockets</p>
                                    <Badge className="score" outline pill theme="dark">113 - 118</Badge>
                                    <p className="rightTeam">GS Warriors</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Denver Nuggets</p>
                                    <Badge className="score" outline pill theme="dark">96 - 100</Badge>
                                    <p className="rightTeam">POR Trail Blazers</p>
                                </CardBody>
                                <CardBody className="scoreLine">
                                    <p className="leftTeam">Toronto Raptors</p>
                                    <Badge className="score" outline pill theme="dark">92 - 90</Badge>
                                    <p className="rightTeam">Philadelphia 76ers</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Container>
                </div>

                <div className="news">
                    <div className="new">
                        <NavLink to="/basketballnews">
                            <Card>
                                <CardImg top src="http://bit.ly/2ZZO31G" />
                                <CardBody>
                                    <p>Magic stun No. 2 seed Raptors in final moments of Game 1</p>
                                </CardBody>
                            </Card>
                        </NavLink>
                    </div>
                    <div className="new">
                        <NavLink to="/bballceltics">
                            <Card>
                                <CardImg top src="https://bdn-data.s3.amazonaws.com/uploads/2019/05/28558261_H24763019.JPG" />
                                <CardBody>
                                    <p>Celtics on the verge of getting eliminated by the Bucks.</p>
                                </CardBody>
                            </Card>
                        </NavLink>
                    </div>
                    <div className="new">
                        <NavLink to="/bballphilly">
                            <Card>
                                <CardImg top src="http://bit.ly/2YaKeoE" />
                                <CardBody>
                                    <p>Brooklyn Nets escape with Game 1 win against 76ers.</p>
                                </CardBody>
                            </Card>
                        </NavLink>
                    </div>
                    <div className="new">
                        <NavLink to="/bballhouston">
                            <Card>
                                <CardImg top src="https://s.hdnux.com/photos/01/02/15/36/17356687/3/920x920.jpg" />
                                <CardBody>
                                    <p>Houston Rockets beat Golden State behind Harden's 38 points</p>
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
