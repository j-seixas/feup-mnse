import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, } from 'react-share';
import YouTube from 'react-youtube';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./news.css";

class App extends Component {
    cardStyle = {
        display: 'block',
        width: '10vw',
        height: '20vw',
    };

    render() {
        const shareUrl = 'http://www.bestsports.com/footballnews';
        const title = 'Cristiano Ronaldo claims first league title since moving to Italy';

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
                                    videoId="3Hv5UfZPMpA"
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                            </Row>
                            <Row>
                                <img width="200" alt="image1" height="300" src="http://bit.ly/2ZRAp0v" />
                                <img width="200" alt="image2" height="300" src="http://bit.ly/2ZRAp0v" />
                                <img width="200" alt="image3" height="300" src="http://bit.ly/2ZRAp0v" />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <h1>
                                    Cristiano Ronaldo claims first league title since moving to Italy
                                </h1>
                                <p>
                                    Juventus put the disappointment of a Champions League exit behind them as Massimiliano Allegri's side beat Fiorentina 2-1 to secure an eighth consecutive Serie A title. Playing in front of an expectant home crowd, Allegri's players needed just a point to secure the title but went one better after Alex Sandro's strike was doubled thanks to an own goal by German Pezzella in the second half. Having lost to minnows SPAL last time out, missing the chance to secure their latest league title, nerves kicked in early in Turin when Nikola Milenkovic scored the opening goal after six minutes.
                            </p>
                                <p>
                                    By claiming the Scudetto, Ronaldo became the first player in history to win Serie A, La Liga and the Premier League. It is a record as the Old Lady's dominance sees them become the first side to go eight titles undefeated in Europe's top five leagues. The disappointment of their European exit to Ajax at this ground back on Tuesday evening was, for 90 minutes at least, quickly forgotten as players, staff and supporters celebrated a piece of history.
                                </p>
                                <p>
                                    The five-time Ballon d'Or winner told DAZN: 'My future? I will be at Juventus next year 1000 per cent, I'm very happy for the Scudetto & the Super Cup. 'We have behaved well in the Champions League, next year it will be better.' There were title celebrations earlier in the day for Juventus as the women's team, including England's Eniola Aluko, wrapped up their domestic title with victory over Verona. Aluko got herself a goal as Juventus women ran out 3-0 winners on the day after earlier strikes from Petronella Ekroth and Cristiana Grielli ensured the whole club swept the board with titles.
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
