import React from 'react'
import {
  Col, Card,
} from 'antd'
import EchartsProjects from './EchartsProjects'

const ProFinish = () => (
  <Col span={16}>
    <div className="cloud-box">
      <Card className="no-padding">
        <EchartsProjects />
      </Card>
    </div>
  </Col>)

export default ProFinish
