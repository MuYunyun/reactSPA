import Reflux from 'reflux';
import actions from './actions.js';

// 创建储存库
let myStore = Reflux.createStore({

    // 监听所有动作
    listenables: actions,
    // 初始化
    init() {
        this.num = {count:0}
    },

    // 分别监听每一个动作
    onIncrement() {
        this.num.count++;
        // 将新数值通知出去
        this.trigger(this.num.count);
    }
});

export default myStore;