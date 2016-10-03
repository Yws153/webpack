import React from 'react';
import ReactDOM from 'react-dom';

/* 内容区模块代码 */
class ContentMode extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div className="ContentMode">
				<div class="contents">{this.props.contents}</div>
				{this.props.children}

			</div>
        );
    }
}

/* 页面div封装 上面三个模块 */
class Page extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div className="homepage">
				<ContentMode contents ="longen">this is o353ne comment</ContentMode >
				<ContentMode contents ="longen2">this is two comment</ContentMode >
			</div>
        );
    }
}

/* 初始化到content容器内 */
ReactDOM.render(<Page />, document.getElementById('content'))