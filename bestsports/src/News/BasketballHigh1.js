import React, { Component } from 'react';
import { Container, Row, Col} from "shards-react";
import NavbarComponent from '../Components/NavbarComponent'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

class App extends Component {
    cardStyle = {
        display: 'block',
        width: '10vw',
        height: '20vw'
    };

    render() {
        return (
            <div className="App">
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <video width="600" height="400" controls>
                                <source src="mov_bbb.mp4" type="video/mp4"/>
                                Your browser does not support HTML5 video.
                            </video>
                        </Row>
                        <Row>
                            <img width="200" height="300"src="https://i1.wp.com/elitetrack.com/wp-content/uploads/2013/10/dee_brown_no_look_dunk.jpg?fit=400%2C550&ssl=1" />
                            <img width="200" height="300" src="https://i1.wp.com/elitetrack.com/wp-content/uploads/2013/10/dee_brown_no_look_dunk.jpg?fit=400%2C550&ssl=1" />
                            <img width="200" height="300" src="https://i1.wp.com/elitetrack.com/wp-content/uploads/2013/10/dee_brown_no_look_dunk.jpg?fit=400%2C550&ssl=1" />
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h1>
                                Highlight #1
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus at metus quis lacinia. Sed eget facilisis nisl. Morbi sit amet dictum erat, ut imperdiet eros. Nulla vel enim nec sem molestie finibus nec eget purus. Suspendisse aliquet aliquet cursus. Maecenas nec volutpat urna. Curabitur aliquam leo sed nisl finibus, sed ultricies diam luctus. Nam ultricies metus aliquet lorem egestas porta. 
                            </p>
                            <p>
                                Duis consequat eu augue sit amet viverra. Duis ultrices fringilla vestibulum. Praesent placerat lacus pretium orci eleifend ultricies. Praesent ut aliquet nulla, sit amet molestie quam. Nunc suscipit tincidunt eros, lacinia interdum tellus feugiat tristique. Cras sit amet laoreet libero. Nullam pulvinar nibh ex, sed faucibus sapien efficitur sit amet. Morbi vitae dui ante. Phasellus ullamcorper bibendum dui. Quisque pharetra gravida tortor, quis ultricies diam sollicitudin at. Fusce vulputate, nisi a fringilla sodales, velit quam tincidunt nisi, bibendum fringilla libero eros non purus. In hac habitasse platea dictumst. Quisque ac diam cursus, fermentum felis non, tempor ipsum. Ut rutrum interdum ante, hendrerit tempus augue lobortis eget. Nunc tincidunt turpis sit amet augue porta, facilisis molestie arcu semper. Vivamus ultricies, risus a pellentesque varius, libero ante sodales sem, eu dictum velit quam vitae dolor. 
                            </p>
                            <p>
                                Proin fringilla turpis nec pretium varius. Donec pharetra magna sed sapien eleifend faucibus. Etiam vitae lectus interdum, pretium ligula nec, tristique velit. Donec tincidunt placerat est, ut mattis tortor mollis eu. Aenean rhoncus ex quis nulla semper, non bibendum est imperdiet. Suspendisse ullamcorper quam sed tempus bibendum. Sed interdum lectus quam, et efficitur nisl feugiat sit amet. Quisque venenatis rutrum urna. Vivamus tempus venenatis pellentesque. Nunc varius odio eget turpis ornare, sed molestie dui fermentum. Vivamus pellentesque orci a tincidunt euismod. Donec eget leo dolor. 
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default App;
