import React from 'react'
import { Row } from 'antd'
import LeftTop from './leftTop'
import ProFinish from './proFinish'
import BuildSiteLog from './buildSiteLog'
import MsgBanner from './msgBanner'
import AccessNum from './accessNum'
import './index.less'

const Index = () => (
  <Row gutter={16}>
    <div style={{ overflow: 'hidden' }}>
      <LeftTop />
      <ProFinish />
    </div>
    <div>
      <BuildSiteLog />
      <MsgBanner />
      <AccessNum />
    </div>
  </Row>
)

export default Index
