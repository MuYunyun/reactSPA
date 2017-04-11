import React from 'react';

/*计时器组件*/
export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  //设置初始态
            timer:0
        }
    }
    // this上绑定tick函数，用来改变state状态
    tick = () => {
        this.setState({ timer:this.state.timer + 1 });
    }

    // 组件渲染后开始循环执行tick函数
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);  
    }

    // 组件将要死亡时清除计时器，不清除也可以
    componentWillUnmount() {
        clearInterval(this.interval);  
    }
    render() {
        const timerStyle = {
            color:'#FF4081',
            fontWeight: 'bold'
        }
        return (
            <div id="timer" className="animated bounceInLeft">This page has been opened {'for'}: <span style={timerStyle}>{this.state.timer}</span> seconds.</div>
        )
    }
}