import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
import YouTube from 'react-youtube';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon} from 'react-share';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./news.css";

class BasketballOne extends Component {
    render() {
        const shareUrl = 'http://www.bestsports.com/basketballnews';
        const title = 'Magic escape with the win in Game 1';

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
                        <Col >
                            <Row>
                                <YouTube
                                    videoId="yJbTlgwPx9U"
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
                                    Magic escape with the win in Game 1
                            </h1>
                                <p>
                                    For the Orlando Magic, the first game of the playoffs felt a lot like the final few weeks of the regular season: high stakes, small margins, and a big win at the end of the day.
                                    D.J. Augustin scored 25 points, including the tiebreaking 3-pointer with 3.5 seconds left, and the Magic beat the Toronto Raptors 104-101 in Game 1 of their Eastern Conference first-round series on Saturday.
                                    Kawhi Leonard got a final shot for Toronto, but missed the rim with his 3-pointer from the top.
                            </p>
                                <p>
                                    Orlando went 22-9 over the final 31 games of the season to clinch its first playoff berth since 2012. “I think it helps,” Magic coach Steve Clifford said of his team’s tough regular-season finish. “We’ve been playing games that we had to win and were meaningful games for a while.” Nikola Vucevic, who scored 11 points, said Orlando’s stretch drive helped the team’s mental preparation for the grind of the postseason.“Throughout this last month, we were able to fight through a lot of different adversity and it has kind of prepared us for the playoffs,” Vucevic said.And, when crunch time arrived in Game 1, Orlando was entirely unfazed.“We made a bunch of big plays in the last three or four minutes,” Clifford said.
                            </p>
                                <p>
                                    Aaron Gordon had 10 points and 10 rebounds, Evan Fournier scored 16 points and Jonathan Isaac had 11 as the No. 7-seeded Magic became the latest team to beat Toronto in the opening game of a playoff series. The Raptors are 2-14 in playoff openers.“We know who we are and this is one game,” Toronto’s Kyle Lowry said. “We’ve got to make sure we know who we are and execute what we can do. When we do what we are supposed to do, we are really, really good.”Leonard scored 25 points, Pascal Siakam had 24 and Fred VanVleet had 14 for the second-seeded Raptors, who reclaimed the lead after trailing by 16 points in the second quarter, but couldn’t hold on down the stretch.Toronto got 13 points apiece from Danny Green and Marc Gasol, but Lowry finished scoreless, missing all seven of his attempts. Lowry did have eight assists and seven rebounds.
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

export default BasketballOne;
