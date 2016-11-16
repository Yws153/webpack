"use strict";
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
// import { connect } from "react-redux";
import * as ActionTypes from '../../constants/ActionTypes.js'

import * as CounterActions from '../../actions/note.action.js'
// import { initNotes, addNote, deleteNote } from "../action/action.jsx";
import Header from "./header.jsx";
import Formcontain from "./form.jsx";
import List from "./list.jsx";
// import "../../style/style.scss";

export default
class Notes extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			formDisplayed : false
		};
	}

	componentDidMount() {
		this.props.actions.initNotes();
		this.props.actions.changeFormDisplay()
	}

	onToggleForm() {
		this.setState({
			formDisplayed : !this.state.formDisplayed
		});
	}

	onNewNote(newNote){
		this.props.actions.addNote(newNote)
	}

	// onDeleteNote(date){
	// 	/*根据日期来删除笔记*/
	// 	var delete_date={
	// 		date : date
	// 	};
	// 	this.props.actions.deleteNote(delete_date)
	// }

	render(){
		const { noteState, actions } = this.props;

		const formDisplayed = noteState.get('formDisplayed')
		const notes = noteState.get('notes')

		return(
			<div className="container">
				<Header onClick={() => actions.initNotes()}/>
				<div className="container_main">
					{/* <form onToggleForm={ this.onToggleForm.bind(this) } */}
					<Formcontain onToggleForm={() => actions.changeFormDisplay()} style={{display: formDisplayed ? 'block' : 'none'}}
					formDisplayed={ this.state.formDisplayed } onNewNote={() => actions.onNewNote()}/>
					<List notes={notes} onDeleteNote={(value) => actions.deleteNote(value)}/>
				</div>
			</div>
		);
	}
}
// Notes.propTypes = {
// 	notes : PropTypes.arrayOf(
// 			PropTypes.shape({
// 				title : PropTypes.string.isRequired,
// 				description : PropTypes.string.isRequired,
// 				date : PropTypes.string.isRequired
// 			}).isRequired
// 		).isRequired
// }
