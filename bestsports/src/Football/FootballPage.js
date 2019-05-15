import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, CardBody, CardImg, FormInput} from "shards-react";
import { NavLink } from "react-router-dom";
import NavbarComponent from '../Components/NavbarComponent'
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
                        <Row>
                            <h1>Recent Scores</h1>
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
                        <Row>
                            FC Porto 0 - 0 SC Sporting
                        </Row>
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
