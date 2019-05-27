import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
import YouTube from 'react-youtube';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';
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
        const shareUrl = 'http://www.bestsports.com/footballcity';
        const title = 'Manchester City retains Premier League title with win over Brighton';
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
                                    videoId="WGaMRC15ri4"
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
                                    Manchester City retains Premier League title with win over Brighton
                                </h1>
                                <p>
                                    Despite going a goal down in the first half, Man City retained the title after defeating Brighton 4-1 at the Amex Stadium, meaning Liverpool's victory against Wolves was in vain. Sergio Aguero, Aymeric Laporte, Riyad Mahrez, and Ilkay Gundogan all scored for the visitors after Glenn Murray had given the home side the lead on 25 minutes. It's the first time a team has won back-to-back titles since Sir Alex Ferguson's Manchester United in 2009, and City's total of 98 points is the second highest haul in Premier League history -- two shy of the 100 points Pep Guardiola's men accrued last year.
                                </p>
                                <p>
                                    In a remarkable season, Man City went toe-to-toe with Liverpool as both sides refused to bow down in the season's closing stages. City's campaign concluded on a run of 14 consecutive wins. It was against Newcastle on January 29 that the light blues last dropped points, some three-and-a-half months before lifting the title. Liverpool's 97 points, meanwhile, would have been enough to take top spot in every Premier League season bar the two most recent. "I think it was the hardest and most satisfying," Man City captain Vincent Kompany told Sky Sports, reflecting on his three previous titles with the club. "Liverpool were exceptional. There didn't deserve to be a loser. But I'm so happy for the team. We've got an incredible desire."
                                </p>
                                <p>
                                    There was momentary panic for City when Murray headed in from a corner to give Brighton a shock lead, but that was erased barely a minute later when Sergio Aguero slotted the ball through Mat Ryan's legs to draw level. With Liverpool leading against Wolves, more goals were needed from the visitors. Laporte headed home unmarked from a corner to give his side a 2-1 lead 10 minutes before halftime, putting City firmly in the driving seat. Mahrez's right-footed strike on the edge of the area extended the lead midway through the second period, before Gundogan's sweetly-struck free-kick from 25 yards ultimately sealed the match -- and the title. Following the trophy lift on England's south coast, the City team is flying straight back to Manchester to celebrate at its home ground.
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
