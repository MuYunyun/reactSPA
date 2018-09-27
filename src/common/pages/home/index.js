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
    <LeftTop />
    <ProFinish />
    <BuildSiteLog />
    <MsgBanner />
    <AccessNum />
  </Row>
)

export default Index
