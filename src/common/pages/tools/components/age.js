import React from 'react';
import { DatePicker, Input, Row, Col } from 'antd';

export default class Age extends React.Component {
  	constructor(props) {
        super(props);
        this.state = {
            output:''
        }
    }

    dateChange = (date) => {
        if (date) {
            const now = (new Date()).toDateString(); // toDateString()只返回日期
            const msGap = (new Date(now)).getTime() - (new Date(date._d.toDateString())).getTime();  // getTime()返回毫秒数
            const trueAge = (msGap/1000/60/60/24/365.242199).toFixed(2);
            this.setState({ output: trueAge });
        }
    }

    render() {
        return (
            <div style={{ marginTop:80 }}>
                <Row type="flex" justify="center">
                    <Col span={7}>
                        <label style={{ fontSize:14 }}>您的出生日期：&nbsp;&nbsp;</label>
                        <DatePicker onChange={this.dateChange} />
                    </Col>
                    <Col span={8}>
                        <Input addonBefore="您已在地球上存活了：" addonAfter="年" value={ this.state.output } id="blue"/>
                    </Col>
                </Row>
            </div>
        );
    }
}