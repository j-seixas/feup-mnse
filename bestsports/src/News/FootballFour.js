import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
import YouTube from 'react-youtube';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, } from 'react-share';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./news.css";

class App extends Component {
    cardStyle = {
        display: 'block',
        width: '10vw',
        height: '20vw'
    };

    render() {

        const shareUrl = 'http://www.bestsports.com/footballajax';
        const title = 'Tottenham stuns Ajax to make Champions League final';

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
                                    videoId="dDFFSIUhfKo"
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                            </Row>
                            <Row >
                                <img width="200" height="300" src="http://bit.ly/2ZRAp0v" />
                                <img width="200" height="300" src="http://bit.ly/2ZRAp0v" />
                                <img width="200" height="300" src="http://bit.ly/2ZRAp0v" />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <h1>
                                    Tottenham stuns Ajax to make Champions League final
                                </h1>
                                <p>
                                    Lucas Moura scored a dramatic last-minute winner to send Tottenham Hotspur into the Champions League final for the first time in its history after an astonishing comeback against Ajax in Amsterdam. Trailing 2-0 at the interval and 3-0 overall, Moura scored three times in the second half, including a last-gasp winner, to set up an all-English final against Liverpool in Madrid next month. "It's impossible to explain what I'm feeling," Brazilian Moura told BT Sport after the game on Wednesday. "We gave everything on the pitch and deserved this moment -- we are family. "Football is amazing, its gives us moments like this. We cannot imagine. It's the best moment in my life, and in my career."
                                </p>
                                <p>
                                    On the 59 minute mark, Tottenham drew level on the night as Moura displayed fabulous skill to control the ball inside the penalty area before rifling the ball past Onana once again. Shell-shocked, Ajax tried to respond. Both teams, by now clearly exhausted and drunk on emotion, poured forward in a frantic end to the contest. Ziyech, who was hugely impressive throughout, went close for the home side hitting the post with a shot as Tottenham left space in behind in an attempt to find a winner.
                                </p>
                                <p>
                                    But that winner appeared to have escaped from its clutches when Jan Vertonghen could only send his header against the crossbar before having his subsequent effort blocked on the line. When the fourth official signaled a minimum of five minutes of stoppage time to be play, Ajax's players appeared to collectively shrink by an inch. Tottenham sensed its moment and once again it was Moura with the final meaningful kick of the contest, driving a stake through Ajax hearts by firing home from 16-yards. Cue silence but for a few thousand souls from north London, drunk on delirium and no doubt a beer or two who must have had to pinch themselves to make sure it was real.
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

export default App;
