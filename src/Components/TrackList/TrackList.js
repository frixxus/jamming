import React, { Component } from 'react'
import Track from '../Track/Track'
import './TrackList.css'

const track = {
	name: 'barbara streisand',
	artist: 'duck sauce',
	album: 'justajoke',
	id: '1',
}
export default class TrackList extends Component {
	render() {
		return (
			<div className='TrackList'>
				{this.props.tracks.map((track) => (
					<Track key={track.id} track={track} />
				))}
			</div>
		)
	}
}
