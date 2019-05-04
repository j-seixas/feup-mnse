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
                        <Card style={this.cardStyle}>
                            <NavLink to="/basketballnews">
                                <CardImg top src="https://bdn-data.s3.amazonaws.com/uploads/2019/05/28558261_H24763019.JPG" />
                                <CardBody>
                                    <p>Os Celtics são porreiros</p>
                                </CardBody>
                            </NavLink>
                        </Card>
                        </Row>
                        <Row>
                        <Card style={this.cardStyle}>
                            <NavLink to="/basketballnews">
                                <CardImg top src="https://bdn-data.s3.amazonaws.com/uploads/2019/05/28558261_H24763019.JPG" />
                                <CardBody>
                                    <p>Os Celtics são porreiros</p>
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
                        <Card style={this.cardStyle}>
                            <NavLink to="/basketballnews">
                                <CardImg top src="https://bdn-data.s3.amazonaws.com/uploads/2019/05/28558261_H24763019.JPG" />
                                <CardBody>
                                    <p>Os Celtics são porreiros</p>
                                </CardBody>
                            </NavLink>
                        </Card>
                        </Row>
                        <Row>
                        <Card style={this.cardStyle}>
                            <NavLink to="/basketballnews">
                                <CardImg top src="https://bdn-data.s3.amazonaws.com/uploads/2019/05/28558261_H24763019.JPG" />
                                <CardBody>
                                    <p>Os Celtics são porreiros</p>
                                </CardBody>
                            </NavLink>
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
