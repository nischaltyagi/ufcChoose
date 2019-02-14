import * as React from 'react';
import {Component} from 'react';
import ReactStopwatch from 'react-stopwatch';
import SignIn from './SignIn';
import 'tachyons';
import Load from './Load';

class App extends Component  
class Stopwatch extends Component {
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    limit="00:00:10"
    // onChange={({ hours, minutes, seconds }) => {
    //   // do something
    // }}
    onCallback={() => console.log('Finish')}
    render={({ formatted, hours, minutes, seconds }) => {
      if(seconds === '10'){return (
        <div>
          <Load type="spinningBubbles" color="#ffffff"/>
        </div>
      );}
      else{
        return(<SignIn />);
      }
    }}
   />
}

 
export default Stopwatch;