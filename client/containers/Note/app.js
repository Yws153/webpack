"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux'
import ReactDOM from "react-dom";
import * as noteActions from '../../actions/note.action.js'
// import history from 'src/index.js'

import Header from "./header.jsx";
import Formcontain from "./form.jsx";
import List from "./list.jsx";
import "../../style/style.scss";

@connect(state => state)
export default
class Notes extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			formDisplayed : false
		};
	}

	componentDidMount() {
		this.props.dispatch(noteActions.initNotes())
		this.props.dispatch(noteActions.changeFormDisplay())
	}

	onToggleForm() {
		this.setState({
			formDisplayed : !this.state.formDisplayed
		});
	}

	onNewNote(newNote){
		this.props.dispatch(noteActions.addNote(newNote))
	}

	// onDeleteNote(date){
	// 	/*根据日期来删除笔记*/
	// 	var delete_date={
	// 		date : date
	// 	};
	// 	this.props.actions.deleteNote(delete_date)
	// }

	render(){
		const { noteState, dispatch, history } = this.props

		const formDisplayed = noteState.get('formDisplayed')
		const notes = noteState.get('notes')

		return(
			<div className="container">
				<Header onClick={() => {
					// dispatch(noteActions.initNotes())
					dispatch(noteActions.changeFormDisplay())
				}}/>
				<div className="container_main">
					{/* <form onToggleForm={ this.onToggleForm.bind(this) } */}
					{/* <Formcontain
						onToggleForm={() => dispatch(noteActions.changeFormDisplay())}
						style={{display: formDisplayed ? 'block' : 'none'}}
						formDisplayed={this.state.formDisplayed}
						onNewNote={() => dispatch(noteActions.onNewNote())}
						onSubmit= {() => dispatch(noteActions.addNote('newNote'))}
						onChangeT = {(value) => dispatch(noteActions.changeTitle(value))}
						onChangeA = {(value) => dispatch(noteActions.changeDesc(value))}
					/> */}
					<div className="note_form_wrap">
						<div className="note_form" style={{display: formDisplayed ? 'block' : 'none'}}
						//  onSubmit={ this.handleSubmit.bind(this) }
						 >
							<h5>笔记</h5>
							<input ref="title" type="text" className="your_title" placeholder="你的笔记的标题" onChange={(e) => dispatch(noteActions.changeTitle(e.target.value))}/>
							<textarea ref="description" className="your_description" placeholder="笔记的内容" onChange={(e) => dispatch(noteActions.changeDesc(e.target.value))}/>
							<input type="button" value="取消" className="cancel_btn" onClick={() => dispatch(noteActions.changeFormDisplay())}/>
							<input type="button" value="确认" className="confirm_btn" onClick={() => dispatch(noteActions.addNote('newNote'))}/>
						</div>
						{/* <form ref="yout_form" action="http://localhost:2000/login" className="note_form" style={{display: formDisplayed ? 'block' : 'none'}} method="post"
						// onSubmit={onSubmit}
						//  onSubmit={ this.handleSubmit.bind(this) }
						 >
							<h5>笔记</h5>
							<input ref="title" type="text" className="your_title" placeholder="你的笔记的标题"/>
							<textarea ref="description" className="your_description" placeholder="笔记的内容"/>
							<input name="file" type="file"/>
							<input type="button" value="取消" className="cancel_btn"/>
							<input type="submit" value="确认" className="confirm_btn"/>
						</form> */}
					</div>
					<List notes={notes} onDeleteNote={(value) => dispatch(noteActions.deleteNote(value))}/>
				</div>
				{/* <span onClick={() => history.goBack()}>计时器</span> */}
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
