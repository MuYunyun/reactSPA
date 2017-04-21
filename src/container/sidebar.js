import React from 'react';
import { Link } from 'react-router-dom'
import { IndexLink } from 'react-router'
import { Menu, Icon, Switch } from 'antd'
import './sidebar.css'

const SubMenu = Menu.SubMenu;

export default class Siderbar extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="leftMenu">
        { this.state.theme === 'light' ? <Icon type="github" className="github" /> : <Icon type="github" className="github white" /> }
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
          className="menu"
        >
          <SubMenu key="sub1" title={<span><Icon type="home" /><span>首页</span></span>}></SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
            <Menu.Item key="5"><Link to="/welcome">Option 5</Link></Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10"><Link to="/follow">关注</Link></Menu.Item>
          </SubMenu>
        </Menu>
        <div className="switch">
          <Switch
            checked={this.state.theme === 'dark'}
            onChange={this.changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>
      </div>
    );
  }
}