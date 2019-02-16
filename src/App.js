import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import {Fighters} from './components/Event/fighter';
import Card from './components/Card/Card';
//import UfcAPI from 'ufc-api';

class App extends Component {
  constructor(props) {
     super(props);
     this.state= {
    		route: "neutral",
    		num: 0
	 }

  }

  onButtonClick = (event) => {
		console.log(event.target.id);
		if(event.target.id === 'left') this.setState({route : "left"})
		if(event.target.id === 'right') this.setState({route : "right"})	
	}
  onNextClick = () => {
  	this.setState({
  		num: this.state.num+2,
  		route: "neutral"
  	})
  }
  onBackClick = () =>{
  	this.setState({
  		num: this.state.num-2,
  		route: "neutral"
  	})
  }
  render() {
  	const {num} = this.state
  	switch(this.state.route){
	
	case "neutral":    
		return (
	      <div >
				<Card 
					fighter = {Fighters[num]}
					img = {Fighters[num].img} 
					onButtonClick={this.onButtonClick} 
					id="left"/>
				<Card 
					fighter={Fighters[num+1]}
					img = {Fighters[num+1].img} 
					onButtonClick={this.onButtonClick} 
					id="right"/>
			</div>
	    );
    case "left":
        return (
	      <div className='container'>
				<Card 
					fighter = {Fighters[num]}
					img = {Fighters[num].imgw} 
					onButtonClick={this.onButtonClick} 
					id="winner"/>
				<Card 
					fighter={Fighters[num+1]}
					img = {Fighters[num+1].imgl} 
					onButtonClick={this.onButtonClick} 
					id="looser"/>
				<div className='beech f2 dib'>
					<p  onClick={this.onNextClick}
						className="b f6 ph5 pv3 dib white bg-dark-red pointer">
						NEXT
					</p>
					{
				num >= 2 ? 
				<p  onClick={this.onBackClick}
					className="b f6 ph5 pv3 dib white bg-dark-red pointer" >
					BACK
				</p>:
				<div></div>
			}
				</div>
			</div>
	    );
	case "right":
		return (
	      <div className ='container'>
				<Card 
					fighter = {Fighters[num]}
					img = {Fighters[num].imgl} 
					onButtonClick={this.onButtonClick} 
					id="looser"/>
				<Card 
					fighter={Fighters[num+1]}
					img = {Fighters[num+1].imgw} 
					onButtonClick={this.onButtonClick} 
					id="winner"/>
			<div className='beech'>
				<p 	onClick={this.onNextClick}
					className="b f6 ph5 pv3 dib white bg-dark-red pointer">
					NEXT
				</p>{
				num >= 2 ? 
				<p 	onClick={this.onBackClick}
					className="b f6 ph5 pv3 dib white bg-dark-red pointer">
					BACK
				</p>:
				<div></div>
			}
			</div>
			</div>
	    );
	default :
		console.log("error")
	}
  }
}

export default App;
