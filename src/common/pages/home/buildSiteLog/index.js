import React from 'react'
import {
  Col, Card, Timeline, Icon,
} from 'antd'

const BuildSiteLog = () => (
  <Col span={8}>
    <div className="cloud-box">
      <Card>
        <div className="pb-m">
          <h3>建站日志</h3>
          <small>2个待完成，1个正在进行中</small>
        </div>
        <span className="card-tool"><Icon type="sync" /></span>
        <Timeline>
          <Timeline.Item color="#108ee9">
            <p>更多模块开发中</p>
          </Timeline.Item>
          <Timeline.Item color="red">
            <p>使用ts重构</p>
          </Timeline.Item>
          <Timeline.Item color="green">模块化探索</Timeline.Item>
          <Timeline.Item color="green">封装Ajax实现跨域请求</Timeline.Item>
          <Timeline.Item color="green">引人Redux,Fetch</Timeline.Item>
          <Timeline.Item color="green">引人Less,React-Router(4.x)</Timeline.Item>
        </Timeline>
      </Card>
    </div>
  </Col>)

export default BuildSiteLog
