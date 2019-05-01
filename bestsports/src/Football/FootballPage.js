import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, CardBody, CardImg, FormInput} from "shards-react";
import '../HomePage/App';
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
            <NavbarComponent/>
            
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
                        <Card style={this.cardStyle}>
                            <CardImg top src="https://main-bet.com/uploads/posts/2019-01/1547109034_sporting-lisbon-fc-porto-h2h-fc-porto-vs-sporting-cp-highlights.jpg" />
                                <CardBody>
                                    <p>Porto vs Sporting é uma merda</p>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row>
                        <Card style={this.cardStyle}>
                            <CardImg top src="https://main-bet.com/uploads/posts/2019-01/1547109034_sporting-lisbon-fc-porto-h2h-fc-porto-vs-sporting-cp-highlights.jpg" />
                                <CardBody>
                                    <p>Porto vs Sporting é uma merda</p>
                                </CardBody>
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
                        <Card style={this.cardStyle}>
                            <CardImg top src="https://main-bet.com/uploads/posts/2019-01/1547109034_sporting-lisbon-fc-porto-h2h-fc-porto-vs-sporting-cp-highlights.jpg" />
                                <CardBody>
                                    <p>Porto vs Sporting é uma merda</p>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row>
                        <Card style={this.cardStyle}>
                            <CardImg top src="https://main-bet.com/uploads/posts/2019-01/1547109034_sporting-lisbon-fc-porto-h2h-fc-porto-vs-sporting-cp-highlights.jpg" />
                                <CardBody>
                                    <p>Porto vs Sporting é uma merda</p>
                                </CardBody>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default App;
