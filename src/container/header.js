import React from 'react'
// import createHistory from 'history/lib/createHashHistory'
import { Menu, Icon } from 'antd'
import './header.css'
// const history = createHistory()

const SubMenu = Menu.SubMenu

export default class Header extends React.Component {
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
            <div className="header">
                <Menu mode="horizontal">
                    <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                        <Menu.Item key="setting:1">退出</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}