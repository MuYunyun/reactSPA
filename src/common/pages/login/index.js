import React from 'react'
import { Form, Input, Button, notification, Icon } from 'antd'
import createHistory from 'history/createHashHistory'
import { hot } from 'react-hot-loader/root'
import './index.less'

const { useEffect } = React

const FormItem = Form.Item
const history = createHistory()

function LoginPage({ form }) {
  // 返回一个弹框对象，提示用户名和密码
  const openNotificationWithIcon = type => {
    notification[type]({
      message: '用户名&密码',
      description: '都是：123',
      duration: 6,
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />
    })
  }

  useEffect(() => {
    openNotificationWithIcon('info')
  }, [])

  const handleSubmit = e => {
    const { getFieldsValue } = form
    e.preventDefault()
    const n = getFieldsValue().username
    const p = getFieldsValue().password
    if (n === '123' && p === '123') {
      // 表单的路由处理
      history.push('/home')
    } else {
      openNotificationWithIcon('info')
    }
  }

  const { getFieldDecorator } = form
  return (
    <div className="loginpagewrap">
      <div className="box">
        <p>Welcome to the ReactSPA</p>
        <div className="loginWrap">
          <Form onSubmit={handleSubmit}>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名' }]
              })(<Input placeholder="Username：123" />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }]
              })(<Input type="password" placeholder="Password：123" />)}
            </FormItem>
            <Button type="primary" htmlType="submit" className="loginBtn">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

const Login = Form.create()(LoginPage)
let handleComponent = Login
// 静默刷新
if (ENABLE_DEVTOOLS) {
  handleComponent = hot(Login)
}

export default handleComponent
