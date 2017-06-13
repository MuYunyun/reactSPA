import React from 'react'
import './index.less'

export default class todo extends React.Component {
    render() {
        return (
            <div className="animated swing todo">
                <div>计划在本项目中，把平时工作、学习中遇到的事抽象成demo给展现出来。其实这套界面风格不仅仅可以作为后台管理系统，也可以修改成一个美观的博客。</div>
            </div>
        )
    }
}