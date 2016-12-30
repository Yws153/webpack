"use strict";
import React, { Component, PropTypes } from "react";
import { toJS } from 'immutable'
import Item from "./item.jsx";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../../style/transition.scss";

class List extends React.Component{
	render(){
		const { notes, onDeleteNote } = this.props

		console.log(notes)
		const notes_items = notes.map( (note,index) => {
			const title = note.get('title')
			return <Item key={index} title={title} description={note.get('description')}
				date={note.get('date')} onDeleteNote={() => onDeleteNote(note.get('id'))}/>
		});

		return(
			<div className="notes_list">
				<ReactCSSTransitionGroup
					transitionName="notes"
					transitionEnterTimeout={5000}
          			transitionLeaveTimeout={5000}>
					{notes_items}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

// List.propTypes = {
// 	notes : PropTypes.arrayOf(
// 			PropTypes.shape({
// 				title : PropTypes.string.isRequired,
// 				description : PropTypes.string.isRequired,
// 				date : PropTypes.string.isRequired
// 			}).isRequired
// 		).isRequired
// }

export default List;
