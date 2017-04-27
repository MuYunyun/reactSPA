import React from 'react'
// import createHistory from 'history/lib/createHashHistory'
import { Menu, Icon, Layout } from 'antd'
import './header.less'

// const history = createHistory()

const SubMenu = Menu.SubMenu
const { Header } = Layout

export default class Top extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'Muyy'
        })
    }

    render() {
        return (
            <Header style={{ background: '#fff'}}>
                <Icon
                className="trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.toggle}
                />
                <Menu mode="horizontal" className="logOut">
                    <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                        <Menu.Item key="setting:1">退出</Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}