import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Switch, Layout } from 'antd'
import allMenu from 'utils/menu'
import Top from './header'
import Contents from './content'
import Footer from './bottom'
import './index.less'

const SubMenu = Menu.SubMenu
const { Sider } = Layout

export default class Container extends React.Component {
  state = {
    theme: 'dark',
    current: 'index',
    collapsed: false,
    mode: 'inline', // 水平垂直展现
  }

  componentDidMount() {
    this.handleClick([], 'index')
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    })
  }

  toggle = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
      mode: collapsed ? 'inline' : 'vertical',
    })
  }

  clear = () => {
    this.setState({
      current: 'index',
    })
  }

  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    })
  }

  render() {
    const { collapsed, theme, current, mode } = this.state
    return (
      <Layout className="containAll">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
          className="leftMenu"
        >
          {theme === 'light' ? <a href="https://github.com/MuYunyun/react-antd-demo" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github" /></a> :
            <a href="https://github.com/MuYunyun/react-antd-demo" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github white" /></a>}
          {theme === 'light' ? <span className="author">牧之</span> : <span className="author white">牧之</span>}
          <Menu
            theme={theme}
            onClick={this.handleClick}
            defaultOpenKeys={['']}
            selectedKeys={[current]}
            className="menu"
            mode={mode}
          >
            {
              allMenu.map((subMenu) => {
                if (subMenu.children && subMenu.children.length) {
                  return (
                    <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
                      {subMenu.children.map(menu => (
                        <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
                      ))}
                    </SubMenu>
                  )
                }
                return (
                  <Menu.Item key={subMenu.url}>
                    <Link to={`/${subMenu.url}`}>
                      <Icon type={subMenu.icon} />
                      <span className="nav-text">{subMenu.name}</span>
                    </Link>
                  </Menu.Item>
                )
              })
            }
          </Menu>
          <div className="switch">
            <Switch
              checked={theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
        </Sider>
        <Layout>
          <Top toggle={this.toggle} collapsed={collapsed} clear={this.clear} />
          <Contents />
          <Footer />
        </Layout>
      </Layout>
    )
  }
}