import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, CardBody, CardImg, FormInput} from "shards-react";
import { NavLink } from "react-router-dom";
import NavbarComponent from '../Components/NavbarComponent'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

class App extends Component {
    render() {
        return (
            <div className="App">
            
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <h1>Recent Scores</h1>
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                        <Row>
                            Boston Celtics 108 - 107 Milwaukee Bucks
                        </Row>
                    </Col>

                    <Col>
                        <Row>
                            <FormInput placeholder="Search..." />
                        </Row>
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
                            <Card>
                            <NavLink to="/bballphilly">
                                <CardImg top src="http://bit.ly/2YaKeoE" />
                                <CardBody>
                                    <p>Brooklyn Nets escape with Game 1 win against 76ers.</p>
                                </CardBody>
                            </NavLink>
                        </Card>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                        <Button theme="secondary">Primary</Button>
                        <Button theme="secondary">Secondary</Button>
                        <Button theme="secondary">Success</Button>
                        </Row>
                        <Row>
                            <NavLink to="/bballhouston">
                                <Card>
                                    <CardImg top src="https://s.hdnux.com/photos/01/02/15/36/17356687/3/920x920.jpg" />
                                    <CardBody>
                                        <p>Houston Rockets beat Golden State behind Harden's 38 points</p>
                                    </CardBody>
                                </Card>
                            </NavLink>
                        </Row>
                        <Row>
                            <NavLink to="/bballceltics">
                                <Card>
                                    <CardImg top src="https://bdn-data.s3.amazonaws.com/uploads/2019/05/28558261_H24763019.JPG" />
                                    <CardBody>
                                        <p>Celtics on the verge of getting eliminated by the Bucks.</p>
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