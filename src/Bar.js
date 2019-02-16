import React from 'react';
import 'tachyons'

const Bar = ({name,age,right,wrong,img,rank}) => {
	return(
	
	<div className="w-90 center">
	<article className="bb bw1 dt w-100 b--black-10 pb3 mt3">
      	<div className='dtc w4 v-mid'>
        	<img alt = 'user' src = {img} className = "ba b--black-10 db br-100 w4 h4"/>
        </div>    	
      	<div className="dtc v-mid pl3">
        	<h2 className="f3 fw6 black mv0">Name: {name}</h2>
	        <h2 className="f3 fw4 black mv0">Age: {age}</h2>
	        <h2 className="f3 fw4 black mv0">Correct: {right}</h2>
	        <h2 className="f3 fw4 black mv0">Wrong: {wrong}</h2>
		</div>
      
    	<div className="dtc v-mid">
          		<h3 className='tr pr4 f1 lh-title Times'>{rank}</h3>
      	</div>
  	</article>
	</div>
	);

};

export default Bar;