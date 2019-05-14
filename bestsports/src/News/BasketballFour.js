import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import YouTube from 'react-youtube';

class BasketballFour extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <YouTube
                                    videoId="LOX6rOKjsXo"
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                            </Row>
                            <Row>
                                <img width="200" height="300" src="https://i.pinimg.com/736x/ad/f8/5d/adf85d2c14d4f869f199140f5023c054.jpg" />
                                <img width="200" height="300" src="https://www.hoopsrumors.com/files/2017/05/USATSI_9842804.jpg" />
                                <img width="200" height="300" src="https://amp.businessinsider.com/images/5cba788eac92a1464643e1b3-750-1016.jpg" />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <h1>
                                    Kyrie Irving on Shooting Struggles in Bucks vs. Celtics Game 4: 'Who Cares?'
                            </h1>
                                <p>
                                    Boston Celtics star Kyrie Irving has continued to struggle from the field when his team needs him most in its second-round playoff series against the Milwaukee Bucks, but that apparently won't stop him from seeking his shot in Game 5. "Who cares? I'm a basketball player," Irving said after shooting just 7-of-22 from the field Monday, per Tim Bontemps of ESPN.com. "Prepare the right way ... The expectations on me are going to be sky-high. ... For me, the 22 shots? I should've shot 30."
                            </p>
                                <p>
                                    Milwaukee seized a 3-1 series lead with its 113-101 victory in Game 4. Since Boston won Game 1, Irving is an ugly 19-of-62 (30.6 percent) from the field. Irving also left the court before the final buzzer, though he said "the game was over," per Jay King of The Athletic. The point guard wanted to be the go-to option and emerge from LeBron James' shadow when he asked the Cleveland Cavaliers to trade him in 2017. This situation with the Celtics is exactly what he was looking for, as he is the unquestioned featured player for what should be a title contender.
                            </p>
                                <p>
                                    However, Giannis Antetokounmpo's star has shone brighter in this series and did so again Monday, when he tallied 39 points, 16 rebounds and four assists. He put his team on his back on the road as no other Buck scored more than 15 points and Khris Middleton shot just 4-of-19 from the field. Boston didn't need Irving to be a one-man show like Antetokounmpo. Rather, even a solid shooting performance from the 27-year-old likely would have been enough to tie the series considering each of Boston's other four starters scored 16 or more points. (Irving finished with 23.)
                            </p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BasketballFour;
