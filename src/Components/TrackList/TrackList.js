import React, { Component } from 'react'
import Track from '../Track/Track'
import './TrackList.css'

export default class TrackList extends Component {
	render() {
		return (
			<div class='TrackList'>
				{/* <!-- You will add a map method that renders a set of Track components  --> */}
				{this.props.searchResults.map((track) => (
					<Track key={track.id} track={track} />
				))}
			</div>
		)
	}
}
