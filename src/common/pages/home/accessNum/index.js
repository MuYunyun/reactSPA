import React from 'react'
import {
  Col, Card, Icon,
} from 'antd'
import EchartsViews from './EchartsViews'

const AccessNum = () => (
  <div>
    <Col span={8}>
      <div className="cloud-box">
        <Card>
          <div className="pb-m">
            <h3>访问量统计</h3>
            <small>最近7天用户访问量</small>
          </div>
          <span className="card-tool"><Icon type="sync" /></span>
          <EchartsViews />
        </Card>
      </div>
    </Col>
  </div>)

export default AccessNum
