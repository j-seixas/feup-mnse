import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, } from 'react-share';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import YouTube from 'react-youtube';

class BasketballTwo extends Component {
    render() {
        const shareUrl = 'http://www.bestsports.com/bballphilly';
        const title = 'Philadelphia 76ers: embarrassing Game 1 loss to Brooklyn Nets';
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
                                    videoId="XE-d1SxNYdA"
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
                                    Philadelphia 76ers: embarrassing Game 1 loss to Brooklyn Nets
                            </h1>
                                <p>
                                    The Philadelphia 76ers were thoroughly outplayed in Game 1, setting a potentially troubling tone for the first-round series. Despite perceived matchup difficulties, the Philadelphia 76ers were heavy favorites against the Brooklyn Nets in Game 1. Momentum seemed to be on Philadelphia’s side, especially after Joel Embiid was cleared to play. The Sixers are the superior team on paper. It didn’t look that way on screen.
                            </p>
                                <p>
                                    After Embiid forged an early lead at the free throw line, Brooklyn was constant in their pressure on both ends. Ben Simmons and Tobias Harris no-showed, J.J. Redick was unceasingly exploited, and the bench did little to stem the tide. The Nets didn’t even get a good D’Angelo Russell game until the second half. Brooklyn’s defensive prowess, combined with a red-hot offensive attack, left the Sixers in unexpected disarray. The defensive issues many anticipated were worse than expected. It’s not time to panic. The Sixers are still favorites in the series and should come more prepared in Game 2. If anything, it’s a much-needed wakeup call, reminding the Sixers that ‘talenting’ their way through the postseason requires serious effort given the squad’s work-in-progress chemistry.
                            </p>
                                <p>
                                    Even so, the Sixers got a vintage Jimmy Butler performance and still struggled to keep pace with the sixth-seeded, inexperienced Nets. It wasn’t the most encouraging loss. It was even less encouraging before Toronto and Denver proceeded to drop their Game 1s later in the evening.
                            </p>
                            </Row>
                        </Col>
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
                </Container>
            </div>
        );
    }
}

export default BasketballTwo;
