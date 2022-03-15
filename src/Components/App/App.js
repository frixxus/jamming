import React, { Component } from 'react'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import './App.css'
const tracks = [
	{
		name: 'barbara streisand',
		artist: 'duck sauce',
		album: 'justajoke',
		id: '1',
	},
	{
		name: 'apple sauve',
		artist: 'apple deuces',
		album: 'justajoke',
		id: '2',
	},
	{
		name: 'barbara streisand',
		artist: 'duck sauce',
		album: 'justajoke',
		id: '3',
	},
]
export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			searchResults: tracks,
			playlistName: 'Favs',
			playlistTracks: tracks,
		}

		this.addTrack = this.addTrack.bind(this)
	}
	addTrack = (track) => {
		if (
			this.state.playlistTracks.find(
				(savedTrack) => savedTrack.id === track.id
			)
		) {
			return
		}
		this.setState(this.searchResults.push(track))
	}
	render() {
		return (
			<div>
				<h1>
					Ja<span className='highlight'>mmm</span>ing
				</h1>
				<div className='App'>
					{/* <!-- Add a SearchBar component --> */}
					<SearchBar />
					<div className='App-playlist'>
						{/* <!-- Add a SearchResults component --> */}
						<SearchResults
							searchResults={this.state.searchResults}
							onAdd={this.addTrack}
						/>
						{/* <!-- Add a Playlist component --> */}
						<Playlist
							playlistName={this.state.playlistName}
							playlistTracks={this.state.playlistTracks}
						/>
					</div>
				</div>
			</div>
		)
	}
}
