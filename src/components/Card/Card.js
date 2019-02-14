import React from 'react';
import './Card.css'

const Card = ({fighter,img,onButtonClick,id}) => {
		if(id === "winner"){
			return(
			<div className='container dib w-50'>
			<img alt ='fighter' src={img} height="100%"/>
			<div className="f1"> 
				<p className="result b ">Winner</p>
			</div>
			</div>);
		}
		else if(id === "looser"){
		    return (
		    <div className='container dib w-50'>
			<img alt ='fighter' src={img} height="100%"/>
			<div className="f1"> 
				<p className="result b">Looser</p>
			</div>
			</div>);
		}
		else{
		    return (
		    <div className='container dib w-50'>
			<img alt ='fighter' src={img} height="100%"/>
			<div className="center f2"> 
				<p >{fighter.name}</p>
				<p >{fighter.record}</p>
				<p 	onClick={onButtonClick}
					className="f6 grow br-pill ph5 pv3 dib white bg-red pointer"
					id={id}
					>
					Winner
				</p>
			</div>
			</div>);
			}
};

export default Card;