import React from 'react';
import { Link } from 'react-router-dom'
import { IndexLink } from 'react-router'
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
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
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
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}
            mode="inline"
            className="menu"
          >
            <Menu.Item><Link to="/follow"><Icon type="home" /><span className="nav-text">欢迎页</span></Link></Menu.Item>
            <SubMenu key="sub2" title={<span><Icon type="bars" /><span>导航一</span></span>}>
              <Menu.Item key="5"><Link to="/tools">小应用</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/advertising">广告系列</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="apple-o" /><span>导航二</span></span>}>
              <Menu.Item key="9"><Link to="/test">Test</Link></Menu.Item>
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