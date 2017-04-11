import React from 'react';
import {Input,Row,Col,Button,Form,Card } from 'antd';

const FormItem = Form.Item;

/* BMI计算器组件 */
class Bmi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          bmi:'',
          level:'',
        }       
    } 
    // 提交
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
        let w = this.props.form.getFieldsValue().weight;
        let h = this.props.form.getFieldsValue().height;
        let bmi = (w/((h/100)**2)).toFixed(1);
        let level;
        if(bmi<18.5) {
            level = 0;
        } else if(bmi >= 18.5 && bmi <= 24.9) {
            level = 1;
        } else if(bmi = 25) {
            level = 2;
        } else if(bmi >= 25 && bmi <= 29.9) {
            level = 3;
        } else if(bmi >= 30) {
            level = 4;
        }
        this.setState({bmi:bmi,level:level});
    }
    // 重置
    handleReset = (e) => {
        e.preventDefault();
        this.props.form.resetFields();
        this.setState({bmi:'',level:''});
    }

    ComponentDidMount() {
        console.log(this.refs.card);
    }
     
  	render() {  
  		const { getFieldProps } = this.props.form;
  		let i = this.state.level;		
  	  	return (
  	  		<div style={{marginTop:80}}>
  	  			<Form horizontal>
  	  				<Row type="flex" justify="center" className="rowItem">
	  	  				<Col span={10}>
		  			  	 	<Input type="number" addonBefore="您的体重：" addonAfter="kg" {...getFieldProps('weight')} />	  	  		
	  	  				</Col>
  	  				</Row>
  	  				<Row type="flex" justify="center" className="rowItem">
	  	  				<Col span={10}>
	  	  					<Input type="number" addonBefore="您的身高：" addonAfter="cm" {...getFieldProps('height')} />
	  	  				</Col>
	  	  			</Row>
	  	  			<Row type="flex" justify="center" className="rowItem">
	  	  				<Col span={10}>
		  	  				<Button style={{width:'50%'}} htmlType="submit" onClick={this.handleSubmit}>计算</Button>
		  	  				<Button style={{width:'50%'}} onClick={this.handleReset}>重置</Button>
	  	  				</Col>
	  	  			</Row>
	  	  		</Form>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={10}>
	  	  				<Input addonBefore="您的BMI：" value={this.state.bmi} id="red" disabled/>
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
  	  				<Col span={10}>
  	  					<Card bodyStyle={{ padding:0}} id="cardWrap">
  	  					    <p className={i===0?'activeP':'die'}>偏瘦&nbsp;&nbsp;&nbsp;&nbsp;{'<18.5'}</p>
  	  					    <p className={i===1?'activeP':'die'}>正常&nbsp;&nbsp;&nbsp;&nbsp;{'18.5～24.9'}</p>
  	  					    <p className={i===2?'activeP':'die'}>超重&nbsp;&nbsp;&nbsp;&nbsp;{'=25'}</p>
  	  					    <p className={i===3?'activeP':'die'}>偏胖&nbsp;&nbsp;&nbsp;&nbsp;{'25.0～29.9'}</p>
  	  					    <p className={i===4?'activeP':'die'}>肥胖&nbsp;&nbsp;&nbsp;&nbsp;{'30.0～34.9'}</p>
  	  					</Card>
  	  				</Col>
  	  			</Row>
	  	  		
	  	  	</div>
  	  	);
  	}
}

Bmi = Form.create()(Bmi);
export default Bmi;

