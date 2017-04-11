import React from 'react';
import {Tabs} from 'antd';

// 引入各部分组件
import Hello from './components/hello.jsx';
import Timer from './components/timer.jsx';
import Age from './components/age.jsx';
import Salary from './components/salary.jsx';
import House from './components/house.jsx';
import Bmi from './components/bmi.jsx';

import './profile.less';

const TabPane = Tabs.TabPane;

/*简介父组件*/
export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Hello text="FE Developer"/>
                <Timer />
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Age" key="1"><Age /></TabPane>
                    <TabPane tab="Salary" key="2"><Salary /></TabPane>
                    <TabPane tab="House" key="3"><House /></TabPane>
                    <TabPane tab="BMI" key="4"><Bmi /></TabPane>
                </Tabs>               
            </div>
        )
    }    
}
