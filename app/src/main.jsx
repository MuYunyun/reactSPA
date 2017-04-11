import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './components/Sidebar.jsx'

// 引入垫片兼容IE
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

// Animate.CSS样式 & font-awesome样式
// 居然没有引用antd的样式文件
import 'animate.css/animate.min.css';
import './main.less';

// 配置整体组件
export default class Init extends React.Component {
    constructor(props) {
        super(props);        
    } 

    render() {
        return (
            <div>
                <Sidebar />
                <div id="rightWrap">
                    {this.props.children}                
                </div>
            </div>
        )
    }
}
