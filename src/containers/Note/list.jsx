"use strict";
import React, { Component, PropTypes } from "react";
import Item from "./item.jsx";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import "../../style/transition.scss";

class List extends React.Component{
	render(){
		const { notes, onDeleteNote } = this.props

		// var notes=this.props.notes;
		// var notes_items = notes.map( (note,index) => {
		// 	return <Item key={index} title={note.get('tiile')} description={note.get('description')}
		// 		date={note.get('date')} onDeleteNote={() => onDeleteNote(note.get('date'))}/>
		// });
		return(
			<div className="notes_list">
				<ReactCSSTransitionGroup
					transitionName="notes"
					transitionEnterTimeout={5000}
          			transitionLeaveTimeout={5000}>
					{
						notes.map( (note,index) => {
							return <Item key={index} title={note.get('tiile')} description={note.get('description')}
								date={note.get('date')} onDeleteNote={() => onDeleteNote(note.get('date'))}/>
						})
					}
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
