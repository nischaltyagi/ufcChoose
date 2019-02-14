import React, {Component} from 'react';
import name1 from './name1.mp4';
import name2 from './name2.mp4';
import name3 from './name3.mp4';
import name4 from './name4.mp4';
import './Example.css';
import Bruce from './bruce.jpg';
import SignIn from './SignIn';
import 'tachyons';
import Load from './Load';
import ReactStopwatch from 'react-stopwatch';


class Example extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: [name1,name2,name3,name4],
            sec: 'load'
        }
    }

    render () {
        const num = Math.floor((Math.random() * 4));
        if(this.state.sec === 'load'){
            return(
            <div>
                <video id="background" loop autoPlay muted poster={Bruce} width='100%' height='100%'>
                    <source src={this.state.videoURL[num]} type="video/mp4" />
                    <source src={this.state.videoURL[num]} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                  <ReactStopwatch
                    seconds={0}
                    minutes={0}
                    hours={0}
                    limit="00:00:10"
                    onCallback={() => this.setState({sec:'SignIn'})}
                    render={({ formatted, hours, minutes, seconds }) => {
                      return (
                        <div> </div>
                      );
                    }}
                   />
                <div className='center'>
                    <Load type="spinningBubbles" color="#ffcc00"/>
                </div>
            </div>
            );
        }
        else{
        return (
            <div>
                <video id="background" loop autoPlay muted poster={Bruce} width='100%' height='100%'>
                    <source src={this.state.videoURL[num]} type="video/mp4" />
                    <source src={this.state.videoURL[num]} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                    <SignIn className='onTop'/>
            </div>
            );
        }
    }
};

export default Example;