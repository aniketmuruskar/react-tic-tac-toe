import React from 'react';
import Game from './Game.jsx'

export default class App extends React.Component {
	constructor(props) {
    	super(props);
	}

	render() {
	    return (
	     	<Game/>
	    );
	}
}