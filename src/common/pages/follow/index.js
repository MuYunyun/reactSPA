import React from 'react'
import * as _ from 'diana'
import './index.less'

export default class follow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            col:'#666'
        }
    }

    getRandomColor = () => {
        this.setState({
            col: _.rdColor(),
        });
    }

    // 组件渲染后，500毫秒改变一次组件颜色
    componentDidMount() {
        this.interval = setInterval(this.getRandomColor, 500);
    }

    // 组件将要死亡时清除计时器
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { col } = this.state
        return (
            <div className="animated flip ani-box">
                <div><a href="https://github.com/MuYunyun/react-antd-demo" className="welcome animated flip text" style={{ color: col }}>项目地址</a></div>
                <img src={require('../../images/face.png')} width="100" alt="logo" className="lastPic" />
                <div className="animated swing discribe">本项目中，会把平时工作、学习中</div>
                <div className="animated swing discribe">遇到的事抽象成demo给展现出来。欢迎 <a href="https://github.com/MuYunyun/react-antd-demo">Star</a></div>
            </div>
        )
    }
}