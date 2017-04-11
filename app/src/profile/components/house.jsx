import React from 'react';
import {Input,Row,Col,Card} from 'antd';

/* 租房买房比较组件 */
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
        let input = e.target.value;
        this.setState({ item: input });              
    }
    handleTime = (e) => {
        let input = e.target.value;
        this.setState({ time: input });
        let rent = input*12*this.state.item/10000;
        this.setState({ rent: rent });        
    }
    handleBuy = (e) => {
        let input = e.target.value;
        this.setState({ buy: input });
        let balance = input-this.state.rent;
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
            </div>
        );
    }
}

