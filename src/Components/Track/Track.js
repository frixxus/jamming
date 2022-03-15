import React, { Component } from 'react'
import './Track.css'

export default class Track extends Component {
	// isRemoval
	constructor(props) {
		super(props)

		this.renderAction = this.renderAction.bind(this)
		this.addTrack = this.addTrack.bind(this)
	}
	renderAction = () => {
		const choice = this.props.isRemoval ? '+' : '-'
		return <button className='Track-action'>{choice}</button>
	}
	addTrack = () => {
		this.props.onAdd(this.props.track)
	}

	render() {
		return (
			<div className='Track'>
				<div className='Track-information'>
					<h3>{this.props.track.name}</h3>

					<p>
						{this.props.track.artist} | {this.props.track.album}
					</p>
				</div>
				{this.renderAction()}
			</div>
		)
	}
}
