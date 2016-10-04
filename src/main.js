import React from 'react';
import ReactDOM from 'react-dom';
import ContentMode from './ContentMode.jsx';

/* 页面div封装 上面三个模块 */
export default
class Page extends React.Component {
    render() {
        return (
            <div className="homepage">
				<ContentMode contents ="longen">this is one comment</ContentMode >
				<ContentMode contents ="longen2">this is two comment</ContentMode >
			</div>
        );
    }
}

/* 初始化到content容器内 */
ReactDOM.render(<Page />, document.getElementById('content'))