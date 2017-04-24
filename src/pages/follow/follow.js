import React from 'react'
import './follow.css'

export default class follow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            col:'#666'
        }
    }

    getRandomColor = () => {
        this.setState({
            col: '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
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
                <div className="welcome" style={{ color: col }} >Welcome</div>
                <img src={require('../../images/face.png')} width="100" alt="logo" className="lastPic" />
                <a href="https://github.com/MuYunyun/react-antd-demo" className="animated flip text">项目地址</a>
            </div>
        )
    }
}