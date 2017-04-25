import React from 'react';
import {Input,Row,Col,Card} from 'antd';

export default class Salary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item:'',
            time:'',
            rent:'',
            buy:'',
            balance:'',
            des:'………………',
        }
    }

    handleChange = (e) => {
        const rentMoney = e.target.value;
        this.setState({ item: rentMoney });
    }
    handleTime = (e) => {
        const year = e.target.value;
        this.setState({ time: year });
        const rent = year*12*this.state.item/10000;
        this.setState({ rent: rent });
    }
    handleBuy = (e) => {
        const buyMoney = e.target.value;
        this.setState({ buy: buyMoney });
        const balance = buyMoney-this.state.rent;
        this.setState({ balance: balance });
        if(balance > 0) {
            this.setState({ des: '租房更合算！' });
        } else if(balance === 0) {
            this.setState({ des: '哥们儿，洗洗睡吧！' });
        } else {
            this.setState({ des: '买房更合算！' });
        }
    }

    render() {
        return (
            <div style={{marginTop:80}}>
                <Row type="flex" justify="center" className="rowItem">
                    <Col span={10}>
                        <Input type="number" addonBefore="预计租金：" addonAfter="元/月" onChange={this.handleChange}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" className="rowItem">
                    <Col span={10}>
                        <Input type="number" addonBefore="预计年数：" addonAfter="年"  onChange={this.handleTime}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" className="rowItem">
                    <Col span={10}>
                        <Input addonBefore="租房合计：" addonAfter="万" value={this.state.rent} disabled id="red" />
                    </Col>
                </Row>
                <Row type="flex" justify="center" className="rowItem">
                    <Col span={10}>
                        <Input type="number" addonBefore="买房合计：" addonAfter="万" onChange={this.handleBuy} />
                    </Col>
                </Row>
                <Row type="flex" justify="center" className="rowItem">
                    <Col span={10}>
                        <Input addonBefore="买房 - 租房：" addonAfter="万" value={this.state.balance} disabled id="blue" />
                    </Col>
                </Row>
                <Row type="flex" justify="center" className="rowItem">
                    <Col span={10}>
                        <Card bodyStyle={{ padding:10,fontSize:20}}>
                            <p>砖家建议：{this.state.des}</p>
                        </Card>
                    </Col>
                </Row>
                <Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={10}>
	  	  				<div className="issue">如若结果出现误差<a href="https://github.com/MuYunyun/react-antd-demo/issues" target="_blank">点此提issue</a>，O(∩_∩)O</div>
	  	  			</Col>
	  	  		</Row>
            </div>
        );
    }
}

