import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon, Switch, Layout } from 'antd'
import Top from './header'
import Contents from './content'
import Footer from './bottom'
import './index.less'

const SubMenu = Menu.SubMenu;
const { Sider } = Layout

export default class Container extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
    collapsed: false,
    mode: 'inline',  // 水平垂直展现
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
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
      <Layout className="containAll">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="leftMenu"
        >
          { this.state.theme === 'light' ? <Icon type="github" className="github" /> : <Icon type="github" className="github white" /> }
          { this.state.theme === 'light' ? <span className="author">牧之</span> : <span className="author white">牧之</span> }
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}
            className="menu"
            mode={this.state.mode}
          >
            <Menu.Item key="1"><Link to="/follow"><Icon type="home" /><span className="nav-text">欢迎页</span></Link></Menu.Item>
            <SubMenu key="sub2" title={<span><Icon type="bars" /><span>音乐模块</span></span>}>
              <Menu.Item key="2"><Link to="/music">音乐系列</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="tool" /><span>工具模块</span></span>}>
              <Menu.Item key="3"><Link to="/tools">小应用</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="apple-o" /><span>开发模块</span></span>}>
              <Menu.Item key="4"><Link to="/todo">Redux开发中</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/follow">更多module开发中</Link></Menu.Item>
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
        </Sider>
        <Layout>
          <Top toggle={ this.toggle } collapsed={ this.state.collapsed } />
          <Contents />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}