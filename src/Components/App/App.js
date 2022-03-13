import React, { Component } from 'react'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import './App.css'
const track = [
	{
		name: 'barbara streisand',
		artist: 'duck sauce',
		album: 'justajoke',
		id: 'jk',
	},
]
export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = { SearchResults: track }
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
							searchResults={this.state.SearchResults}
						/>
						{/* <!-- Add a Playlist component --> */}
						<Playlist />
					</div>
				</div>
			</div>
		)
	}
}
