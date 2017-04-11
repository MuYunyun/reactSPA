import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';

// 引入Antd组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1',
            openKeys: []
        }
    }    
    handleClick = (e) => {
        this.setState({
           current: e.key,
           openKeys: e.keyPath.slice(1),
        });
    }
    onToggle = (info) => {
        this.setState({
           openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
        });
    }

    render() {
        return (
            <div id="leftMenu"> 
                <img src={require('../images/logo.png')} width="50" id="logo"/>  {/*logo图标*/}                
                <Menu onClick={this.handleClick}
                    style={{ width: 146 }}
                    openKeys={this.state.openKeys}
                    onOpen={this.onToggle}
                    onClose={this.onToggle}
                    selectedKeys={[this.state.current]}
                    theme="light"
                    mode="inline">
                    <Menu.Item key="1">                    
                        <IndexLink to="/"><span><Icon type="home" /><span>欢迎页</span></span></IndexLink>
                    </Menu.Item>    
                    <SubMenu key="sub2" title={<span><Icon type="appstore-o" /><span>导航一</span></span>}>
                        <Menu.Item key="2"><Link to="/profile">小应用</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="bars" /><span>导航二</span></span>}>
                        <Menu.Item key="3"><Link to="/campaign">广告系列</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="bar-chart" /><span>导航三</span></span>}>
                        <Menu.Item key="4"><Link to="/counter">Reflux起步</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/charts">施工中</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6">
                        <Link to="/last"><span><Icon type="mail" /><span>结尾页</span></span></Link>
                    </Menu.Item>
                </Menu>
                <div id="copyright">Copyright © 白延云</div>                    
            </div>                
        )
    }
}