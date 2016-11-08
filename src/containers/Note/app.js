"use strict";
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
// import { connect } from "react-redux";
import * as ActionTypes from '../../constants/ActionTypes.js'

// import { initNotes, addNote, deleteNote } from "../action/action.jsx";
// import header from "../../component/note/header.jsx";
// import form from "../../component/note/form.jsx";
// import list from "../../component/note/list.jsx";
// import "../../style/style.scss";

class Notes extends React.Component{
	// constructor(props){
	// 	super(props);
	// 	this.state={
	// 		formDisplayed : false
	// 	};
	// }

	// componentDidMount(){
	// 	this.props.dispatch( initNotes() );
	// }

	// onToggleForm(){
	// 	this.setState({
	// 		formDisplayed : !this.state.formDisplayed
	// 	});
	// }

	// onNewNote(newNote){
	// 	this.props.dispatch( addNote(newNote) );
	// }

	// onDeleteNote(date){
	// 	/*根据日期来删除笔记*/
	// 	var delete_date={
	// 		date : date
	// 	};
	// 	this.props.dispatch( deleteNote(delete_date) );
	// }

	render(){
		const { noteState } = this.props;
		return(
			<div className="container">
				123
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