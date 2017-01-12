import React from 'react';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div className="displayContainer">
	    	<div className="display">
		        <div><img className='img' src={require('../lib/tier.jpg')}/></div>
	        </div>
        </div>
    )
  }
}
