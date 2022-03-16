import React, { Component } from 'react'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import './App.css'
const searchResultsTracks = [
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
		name: 'purple nurple',
		artist: 'you',
		album: 'justajoke',
		id: '3',
	},
]
export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			searchResults: searchResultsTracks,
			playlistName: '',
			playlistTracks: [],
		}

		this.addTrack = this.addTrack.bind(this)
		this.removeTrack = this.removeTrack.bind(this)
		this.updatePlaylistName = this.updatePlaylistName.bind(this)
		this.savePlaylist = this.savePlaylist.bind(this)
	}

	addTrack = (track) => {
		const playlistTracks = this.state.playlistTracks
		if (
			playlistTracks.find(
				(playlistTrack) => playlistTrack.id === track.id
			)
		) {
			return
		}
		playlistTracks.push(track)
		this.setState({ playlistTracks: playlistTracks })
	}

	removeTrack = (track) => {
		const newState = this.state.playlistTracks.filter(
			(playlistTrack) => playlistTrack.id !== track.id
		)
		this.setState({ playlistTracks: newState })
	}

	updatePlaylistName = (name) => {
		this.setState({ playlistName: name })
	}

	savePlaylist() {
		const trackUris = this.state.playlistTracks.map((track) => track.uri)
		this.setState({ playlistName: 'New Playlist', playlistTracks: [] })
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
							onRemove={this.removeTrack}
							onNameChange={this.updatePlaylistName}
							onSave={this.savePlaylist}
						/>
					</div>
				</div>
			</div>
		)
	}
}
