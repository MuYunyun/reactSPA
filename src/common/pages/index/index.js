import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
import b1 from 'images/minren.jpg';
import b2 from 'images/zuozu.jpg';
import b3 from 'images/xiaoying.jpg';
import b4 from 'images/chutian.jpg';
import './index.less'

export default class index extends React.Component {
    render() {
        return (
            <div>
                <Row gutter={10}>
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
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <div className="pb-m">
                                    <h3>消息栏</h3>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">鸣人</a>
                                            <span className="text-muted">终于当上火影了！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={b2} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">佐助</a>
                                            <span className="text-muted">吊车尾~~</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={b3} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">小樱</a>
                                            <span className="text-muted">佐助，你好帅！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={b4} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">雏田</a>
                                            <span className="text-muted">鸣人君。。。那个。。。我。。喜欢你..</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <div className="pb-m">
                                    <h3>访问量统计</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}