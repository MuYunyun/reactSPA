import React from 'react'
import {
  Form, Input, Button, notification, Icon,
} from 'antd'
import createHistory from 'history/createHashHistory'

import './index.less'

const FormItem = Form.Item
const history = createHistory()

class LoginPage extends React.Component {
  componentDidMount() {
    this.openNotificationWithIcon('info')
  }

  handleSubmit = (e) => {
    const { form } = this.props
    const { getFieldsValue } = form
    e.preventDefault()
    let n = getFieldsValue().username
    let p = getFieldsValue().password
    if (n === '123' && p === '123') {
      // 表单的路由处理
      history.push('/home')
    } else {
      this.openNotificationWithIcon('info')
    }
  }

  // 返回一个弹框对象，提示用户名和密码
  openNotificationWithIcon = (type) => {
    notification[type]({
      message: '用户名&密码',
      description: '都是：123',
      duration: 6,
      icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
    })
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form
    return (
      <div className="loginpagewrap">
        <div className="box">
          <p>Welcome to the ReactSPA</p>
          <div className="loginWrap">
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名' }],
                })(
                  <Input placeholder="Username：123" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input type="password" placeholder="Password：123" />,
                )}
              </FormItem>
              <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

const Login = Form.create()(LoginPage)
export default Login
