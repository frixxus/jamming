import React, { Component } from 'react';
import './Track.css';

export default class Track extends Component {
	// isRemoval;
	// renderAction = () => {
	// 	const choice = this.isRemoval ? '+' : '-';
	// 	return <button className='Track-action'>{choice}</button>;
	// };

	render() {
		return (
			<div className='Track'>
				<div className='Track-information'>
					<h3>{this.props.track.name}</h3>

					<p>
						{this.props.track.artist} | {this.props.track.album}
					</p>
				</div>
				{/* {this.renderAction} */}
			</div>
		);
	}
}
