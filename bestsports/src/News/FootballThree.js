import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
import YouTube from 'react-youtube';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon} from 'react-share';
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
        const shareUrl = 'http://www.bestsports.com/footballbarca';
        const title = 'Liverpool stun Barcelona to overcome deficit and reach UCL final';

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
                                    videoId="InBilN26lLg"
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                            </Row>
                            <Row>
                                <img width="200" height="300" src="http://bit.ly/2ZRAp0v" />
                                <img width="200" height="300" src="http://bit.ly/2ZRAp0v" />
                                <img width="200" height="300" src="http://bit.ly/2ZRAp0v" />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <h1>
                                    Liverpool stun Barcelona to overcome deficit and reach UCL final
                                </h1>
                                <p>
                                    Liverpool produced one of the greatest comebacks in Champions League history to beat Barcelona 4-0 on Tuesday, overturning a three-goal first-leg deficit and advancing to their second successive final with a 4-3 aggregate victory. Two goals each from stand-in forward Divock Origi and halftime substitute Georginio Wijnaldum left Lionel Messi and Barcelona utterly shell-shocked by a Liverpool performance full of passion, belief and determination. Jurgen Klopp's side will play the winner of Wednesday's other semifinal between Ajax Amsterdam and Tottenham Hotspur, with the Dutch side leading 1-0 from the first leg in London.
                                </p>
                                <p>
                                    "Unbelievable. I don't think many people gave us a chance," Liverpool captain Jordan Henderson said. "Before the game we knew that it would be difficult but it was still possible, of course. It's amazing. We knew that at Anfield we could do something special." Liverpool become only the third team in the history of the European Cup or Champions League to come from three goals down after the first leg of a semifinal and progress after Panathinaikos in 1970-71 and Barcelona themselves in 1985-86. For Barca, who went out on away goals to AS Roma in the quarterfinals last year after winning the first leg 4-1, it was a bitter night that will raise many questions for coach Ernesto Valverde.
                                </p>
                                <p>
                                    Liverpool grabbed an extraordinary fourth goal with a quickly taken corner from Alexander-Arnold, catching the Barca defence asleep with a low ball that was turned in at the near post by Origi. That sent Anfield wild, but then Klopp's side suddenly found themselves needing to switch mindset and defend a lead as Barca slipped, belatedly, into their trademark possession game. Yet with Virgil Van Dijk and Joel Matip outstanding in the centre of defence and Brazilian Fabinho making some crucial interventions in midfield, Liverpool held on for one of their most famous wins. Klopp's side, who lost to Real Madrid in last year's final in Kiev, remain in with a chance of a double triumph as they head into Sunday's final round of Premier League games trailing leaders Manchester City by just a point.
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
