import React from 'react'
import { Col, Card, Timeline, Icon } from 'antd'
import EchartsProjects from '../EchartsProjects'

const LeftTop = () =>
  (<div>
    <Col span={4}>
      <div className="cloud-box">
        <Card>
          <div className="clear y-center">
            <div className="pull-left mr-m">
              <Icon type="heart" className="text-2x text-danger" />
            </div>
            <div className="clear">
              <div className="text-muted">收藏</div>
              <h2>301</h2>
            </div>
          </div>
        </Card>
      </div>
      <div className="cloud-box">
        <Card>
          <div className="clear y-center">
            <div className="pull-left mr-m">
              <Icon type="cloud" className="text-2x" />
            </div>
            <div className="clear">
              <div className="text-muted">云数据</div>
              <h2>30122</h2>
            </div>
          </div>
        </Card>
      </div>
    </Col>
    <Col span={4}>
      <div className="cloud-box">
        <Card>
          <div className="clear y-center">
            <div className="pull-left mr-m">
              <Icon type="camera" className="text-2x text-info" />
            </div>
            <div className="clear">
              <div className="text-muted">照片</div>
              <h2>802</h2>
            </div>
          </div>
        </Card>
      </div>
      <div className="cloud-box">
        <Card>
          <div className="clear y-center">
            <div className="pull-left mr-m">
              <Icon type="mail" className="text-2x text-success" />
            </div>
            <div className="clear">
              <div className="text-muted">邮件</div>
              <h2>102</h2>
            </div>
          </div>
        </Card>
      </div>
    </Col>
    <Col span={16}>
      <div className="cloud-box">
        <Card className={'no-padding'}>
          <EchartsProjects />
        </Card>
      </div>
    </Col>
    <Col span={8}>
      <div className="cloud-box">
        <Card>
          <div className="pb-m">
            <h3>建站日志</h3>
            <small>2个待完成，1个正在进行中</small>
          </div>
          <a className="card-tool"><Icon type="sync" /></a>
          <Timeline>
            <Timeline.Item color="#108ee9">
              <p>更多模块开发中</p>
            </Timeline.Item>
            <Timeline.Item color="red">
              <p>使用ts重构(正在开发)</p>
            </Timeline.Item>
            <Timeline.Item color="green">封装Ajax实现跨域请求</Timeline.Item>
            <Timeline.Item color="green">引人Redux,Fetch</Timeline.Item>
            <Timeline.Item color="green">引人Less,React-Router(4.x)</Timeline.Item>
            <Timeline.Item color="green">初始化项目</Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </Col>
  </div>)

export default LeftTop
