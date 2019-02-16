import React, { Component } from 'react';
import 'tachyons';
import Bar from './Bar.js'
import User from './User'
import Scroll from './Scroll'
import './NewApp.css'
 
class NewApp extends Component{

	    render () {
	    	return (
	    		<div>
	    			<h1 className='back pa3 tc f1 ma0'>LEADER BOARD</h1>
	    			
	    			<Scroll >
	    			{
		User.map( (users,i) => 
			<Bar
			Key = {i} 
			name = {users.name}
			right = {users.right}
			wrong = {users.wrong}
			age = {users.age}
			rank = {users.rank}
			img = {users.img}
			/>
		 )
		}
		</Scroll >
	    		</div>
	    		);
    }
}
export default NewApp