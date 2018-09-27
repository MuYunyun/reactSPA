import React from 'react'
import {
  Col, Card, Icon,
} from 'antd'

const LeftTop = () => (
  <div>
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
  </div>)

export default LeftTop
