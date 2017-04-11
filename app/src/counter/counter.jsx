import React from 'react';
import Reflux from 'reflux';
import {Button, Collapse, Alert} from 'antd';

import Title from '../components/Title.jsx';
import actions from './actions.js';
import myStore from './store.js';
import './counter.less';

const Panel = Collapse.Panel;

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
    }
    componentDidMount(){
        // 储存库一旦改变，就执行函数刷新状态
        this.unsubscribe = myStore.listen(
            (v) => {
                this.setState({count:v}); 
            }
        );
    }
    componentWillUnmount() {
        // 组件将要移除时解除绑定
        this.unsubscribe();
    }
    handleClick = () => {
        // 手动触发动作
        actions.increment();
        console.log(this.state.count);
    }
    render() {        
        return (
            <div>
                <Title name="Reflux起步" />
                <Alert message="先为新手填坑！" type="warning" description="0.4.1版本的README：https://github.com/reflux/refluxjs/tree/v0.4.1" showIcon />
                <Alert message="0.5.0版本才支持ES6的写法！" type="warning" showIcon closable/>
                <Alert message="0.14版本的React才支持Mixins写法，组件中对Store的绑定请使用生命周期的写法！" type="warning" showIcon closable/>
                <span id="num">{this.state.count}</span>
                <Button onClick={this.handleClick} type="ghost" size="large" id="increase">+</Button>
                <Collapse accordion>
                    <Panel header='action' key="1">
                        <p>
                            创建actions：
                            var Actions = Reflux.createActions([
                                "action1",
                                "action2",
                                "action3"
                              ]);
                            <br/>
                            调用其中一个action：Actions.action1();
                        </p>
                    </Panel>
                    <Panel header='store' key="2">
                        <p>用 Reflux.createStore() 方法创建的 Store 可以添加一个 listenables 的属性，只要把我们的 Actions 放在里面，当我们执行 Actions 里的行动的时候，就会自动触发 Store 里的 on"Actions" 的方法，就这完成了 Actions -> Stores
                        </p>
                    </Panel>
                    <Panel header='component' key="3">
                        <p>而在任意的 Components 内直接触发 Actions 的行动，就可以完成 View Components -> Actions<br/>
                            在 Controller View 中，有 Store.listen(fn)方法，只要 Store 执行了 this.trigger()，就会触发这个在 Controller View 里的 fn 函数，我们就可以在这个 fn 里改变 state 的值， Components 也会随之变化，这就完成了 Stores -> View Components
                        </p>
                    </Panel>
                </Collapse>
            </div>
        )
    }       
}