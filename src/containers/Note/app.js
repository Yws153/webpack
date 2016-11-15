"use strict";
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
// import { connect } from "react-redux";
import * as ActionTypes from '../../constants/ActionTypes.js'

import * as CounterActions from '../../actions/note.action.js'
// import { initNotes, addNote, deleteNote } from "../action/action.jsx";
import Header from "../../components/note/header.jsx";
import Formcontain from "../../components/note/form.jsx";
import List from "../../components/note/list.jsx";
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

	onDeleteNote(date){
		/*根据日期来删除笔记*/
		var delete_date={
			date : date
		};
		this.props.actions.deleteNote(delete_date)
	}

	render(){
		const { noteState, actions } = this.props;

		const formDisplayed = noteState.get('formDisplayed')

		return(
			<div className="container">
				<Header onClick={() => actions.initNotes()}/>
				<div className="container_main">
					{/* <form onToggleForm={ this.onToggleForm.bind(this) } */}
					<Formcontain onToggleForm={() => actions.changeFormDisplay()} style={{display: formDisplayed ? 'block' : 'none'}}
					formDisplayed={ this.state.formDisplayed } onNewNote={ this.onNewNote.bind(this) }/>
					<List notes={noteState.get('notes')} onDeleteNote={ this.onDeleteNote.bind(this) }/>
				</div>
			</div>
		);
	}
}

// <Notes_header onToggleForm={ this.onToggleForm.bind(this) }/>
				// <div className="container_main">
				// 	<Notes_form onToggleForm={ this.onToggleForm.bind(this) }
				// 	formDisplayed={ this.state.formDisplayed } onNewNote={ this.onNewNote.bind(this) }/>
				// 	<Notes_list notes={ notes } onDeleteNote={ this.onDeleteNote.bind(this) }/>
				// </div>

// Notes.propTypes = {
// 	notes : PropTypes.arrayOf(
// 			PropTypes.shape({
// 				title : PropTypes.string.isRequired,
// 				description : PropTypes.string.isRequired,
// 				date : PropTypes.string.isRequired
// 			}).isRequired
// 		).isRequired
// }

// function select(state){
// 	return{
// 		notes : state.notes
// 	}
// }

// export default connect(select)(Notes);
