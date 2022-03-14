import React, { Component } from 'react';
import Track from '../Track/Track';
import './TrackList.css';

export default class TrackList extends Component {
	render() {
		// const getTracks = this.props.tracks.map((track) => {
		// 	return <Track key={track.id} track={track} />;
		// });
		return (
			<div class='TrackList'>
				{/* <!-- You will add a map method that renders a set of Track components  --> */}
				{this.props.tracks.map((track) => (
					<Track key={track.id} track={track} />
				))}
				{/* <Track track={this.props.tracks} /> */}
				{/* {getTracks} */}
			</div>
		);
	}
}
