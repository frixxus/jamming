import React, { Component } from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'

export default class Playlist extends Component {
	render() {
		return (
			<div class='Playlist'>
				<input defaultValue='New Playlist' />
				{/* <!-- Add a TrackList component --> */}
				<TrackList
					tracks={this.props.playlistTracks}
					onRemove={this.props.onRemove}
					isRemoval={true}
				/>
				<button className='Playlist-save'>SAVE TO SPOTIFY</button>
			</div>
		)
	}
}
