import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = { searchTerm: '' }

		this.search = this.search.bind(this)
		this.handleTermChange = this.handleTermChange.bind(this)
	}

	search = (searchTerm) => {
		this.props.onSearch(searchTerm)
	}

	handleTermChange = (event) => {
		this.setState({ searchTerm: event.target.value })
	}

	render() {
		return (
			<div className='SearchBar'>
				<input
					placeholder='Enter A Song, Album, or Artist'
					onChange={this.handleTermChange}
				/>
				<button className='SearchButton'>SEARCH</button>
			</div>
		)
	}
}
