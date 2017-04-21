import React from 'react'
import './follow.css'

// 结尾组件
export default class myAnimate extends React.Component {
    render() {
        return (
            <div className="ani-box">
                <img src={require('../../images/face.png')} width="100" alt="logo" className="animated flip lastPic" />
                <a href="https://github.com/MuYunyun/react-antd-demo" className="animated flip pic">项目地址</a>
            </div>
        )
    }
}