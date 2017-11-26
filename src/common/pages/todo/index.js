import React, { Component } from 'react'
import './index.less'

const MyContainer = (WrappedComponent) =>
    class extends Component {
        render() {
            console.log(this.props)
            return <WrappedComponent {...this.props} />
        }
    }

// 装饰器的前世今生
@MyContainer
class todo extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="animated swing todo">
                <div>计划在本项目中，把平时工作、学习中遇到的事抽象成demo给展现出来。其实这套界面风格不仅仅可以作为后台管理系统，也可以修改成一个美观的博客。</div>
            </div>
        )
    }
}

export default todo