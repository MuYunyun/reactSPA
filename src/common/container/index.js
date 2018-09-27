import React from 'react'
import { Link } from 'react-router-dom'
import {
  Menu, Icon, Switch, Layout,
} from 'antd'
import { connect } from 'react-redux'
import allMenu from '../utils/menu'
import Top from './header'
import Contents from './content'
import Footer from './bottom'
import './index.less'

const { SubMenu } = Menu
const { Sider } = Layout

@connect(
  (state) => ({
    router: state.router,
  })
)
export default class Container extends React.Component {
  state = {
    theme: 'dark',
    collapsed: false,
    mode: 'inline',
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

  render() {
    const {
      collapsed, theme, mode,
    } = this.state
    const { router } = this.props
    const selectedKey = router.location.pathname.split('/')[1]
    let openKey = ''
    for (let menuObj of allMenu) {
      if (menuObj.children) {
        for (let menuList of menuObj.children) {
          if (menuList.url === selectedKey) {
            openKey = menuObj.url
            break
          }
        }
      }
    }
    return (
      <Layout className="containAll">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
        >
          {theme === 'light' ? <a href="https://github.com/MuYunyun/react-antd-demo" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github" /></a> :
            <a href="https://github.com/MuYunyun/react-antd-demo" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github white" /></a>}
          {theme === 'light' ? <span className="author">牧之</span> : <span className="author white">牧之</span>}
          <Menu
            theme={theme}
            defaultOpenKeys={[openKey]}
            selectedKeys={[selectedKey]}
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
          <Top toggle={this.toggle} collapsed={collapsed} />
          <Contents />
          <Footer />
        </Layout>
      </Layout>
    )
  }
}
