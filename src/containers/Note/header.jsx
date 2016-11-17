"use strict";
import React, { Component, PropTypes } from "react";

class Header extends React.Component{
	render(){
		const { onClick } = this.props
		return(
			<div className="header">
				<div className="header_main">
					<h2>笔记</h2>
					<input type="button" value="添加笔记" className="add_note_btn" onClick={onClick}/>
				</div>
			</div>
		);
	}
}

// Header.propTypes = {
// 	onToggleForm : PropTypes.func.isRequired
// }

export default Header;
