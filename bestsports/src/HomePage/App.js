import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardImg} from "shards-react";
import './App.css';
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
                            <h1>Some Basketball Scores</h1>
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
                            <Card style={this.cardStyle}>
                                <CardImg top src="https://bdn-data.s3.amazonaws.com/uploads/2019/05/28558261_H24763019.JPG" />
                                <CardBody>
                                    <p>Os Celtics são porreiros</p>
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
                            <h1>Some Football Scores</h1>
                        </Row>
                        <Row>
                            FC Porto 2 - 0 FC Barcelona
                        </Row>
                        <Row>
                            SC Sporting 5 - 3 Liverpool
                        </Row>
                        <Row>
                            FC Porto 2 - 0 FC Barcelona
                        </Row>
                        <Row>
                            SC Sporting 5 - 3 Liverpool
                        </Row>
                        <Row>
                            FC Porto 2 - 0 FC Barcelona
                        </Row>
                        <Row>
                            SC Sporting 5 - 3 Liverpool
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default App;
