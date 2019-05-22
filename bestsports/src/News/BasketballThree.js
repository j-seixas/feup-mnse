import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
import YouTube from 'react-youtube';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon} from 'react-share';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./news.css";

class BasketballThree extends Component {
    render() {
        const shareUrl = 'http://www.bestsports.com/bballhouston';
        const title = 'Houston Rockets win Game 4 vs. Warriors to tie series 2-2';
        const opts = {
            height: '390',
            width: '750',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <YouTube
                                    videoId="FVJoir1HR9U"
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
                                    Houston Rockets win Game 4 vs. Warriors to tie series 2-2
                            </h1>
                                <p>
                                    James Harden scored 38 points and the Houston Rockets held on for a 112-108 win over the Golden State Warriors on Monday night to even their Western Conference semifinals series at 2-2. The Rockets were up by nine before the Golden State scored the next seven points, capped by a 3 from Stephen Curry, to get within 110-108 with 19 seconds left. Harden made one of two free throws with 11.5 seconds left. Kevin Durant missed a 3 after that. But the Warriors got the rebound and Curry also missed a 3-point attempt before Golden State was forced to foul Chris Paul.
                            </p>
                                <p>
                                    Houston made 17 of its 50 3-point attempts, while the Warriors shot just 8 of 33 from downtown with Curry making just 4 of his 14 attempts. The Rockets were up by nine after three and used an 8-2 run, with four points from Harden, to open the fourth and extend the lead to 101-86. Golden State used an 8-3 run, with six points from Draymond Green, to cut it to 104-94 midway through the quarter.
                            </p>
                                <p>
                                    Houston had a 10-point lead with about four minutes left before a 5-2 run, with a 3 from Curry, got them within 108-101. Green was shaken up when Harden inadvertently knocked him in the head on the follow through after he made a 3-pointer that put Houston up 71-59 with nine minutes left in the third quarter. Green fell to the court where he remained holding the left side of his head for a couple of minutes. The Warriors called a timeout and he collected himself and remained in the game. The lead grew to 77-60 before Golden State got going.
                            </p>
                            </Row>
                            <Row>
                                <FacebookShareButton
                                    url={shareUrl}
                                    quote={title}
                                    className="Demo__some-network__share-button">
                                    <FacebookIcon
                                        size={32}
                                        round />
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={shareUrl}
                                    title={title}
                                    className="Demo__some-network__share-button">
                                    <TwitterIcon
                                        size={32}
                                        round />
                                </TwitterShareButton>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BasketballThree;
