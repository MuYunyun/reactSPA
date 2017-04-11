import React from 'react';
import {Button,Checkbox,DatePicker,Select,Radio,Form,Row,Col,Icon,message,notification,Modal,Input } from 'antd';
import moment from 'moment';

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch';
import 'es6-promise/dist/es6-promise.min.js';
import 'fetch-ie8/fetch.js';

// 引入 新建广告系列按钮 组件
import BtnForm from './popup.jsx';

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

/*时间控件初始的起止日期，间隔为30天*/
let defaultStartDate = moment().subtract(30,'days').format("YYYY-MM-DD");
let defaultEndDate = moment().format("YYYY-MM-DD");

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selV: [''],
            selValue:'',
            sDate:defaultStartDate,
            eDate:defaultEndDate,
            ischecked: false,
        }        
    }

    // 选择广告系列
    selChange = (value) => {        
        this.setState({selValue: value});
    }

    // 选择日期范围
    dateChange = (value) => {
        this.setState({sDate: value[0].toLocaleDateString()});
        this.setState({eDate: value[1].toLocaleDateString()});
    }

    // 过滤无数据广告
    checkChange = (e) => {
        this.setState({ischecked: e.target.checked});
        if(e.target.checked == true) {
            message.config({top: 5});
            message.warning('过滤无数据广告已开启！');            
        }
    }

    // 查询提示框
    confirmMsg = () => {   
        // 打印选择的查询条件        
        console.info(this.state);
        if (this.state.selValue === "蝙蝠侠") {
            fetch('../data/filterData.json')
                .then((res) => { return res.json(); })
                .then((data) => {
                    // 用请求到的数据刷新表格
                    this.props.refreshTable(data); 
                })
                .catch((e) => { console.log(e.message); });            
        } else {
            this.props.refreshTable({rowData:[]});
        }
        
    } 

    // 获取下拉框数据
    fetchSelData = () => {
        fetch('../data/selectData.json')
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { this.setState({selV:data.obj}); })
            .catch((e) => { console.log(e.message); });
    }    

    // 组件渲染后获取外界数据(GET)
    componentDidMount() {
        this.fetchSelData();
    }

    render() {
        /*控制查询按钮状态*/
        let isDisabled = this.state.selValue ==='' ? true : false;        

        return (
            <div id="header">
                <Form inline>
                    <Row type="flex" justify="start" gutter={16} align="middle">
                        <Col span="5">
                            <Select 
                                showSearch 
                                onChange={this.selChange} 
                                placeholder="请选择广告系列" 
                                size="large" 
                                optionFilterProp="children"
                                notFoundContent="未找到相关选项"
                            >                                   
                                {
                                    this.state.selV.map((v,i) => {
                                        return <Option key={i} value={v}>{v}</Option>                                                    
                                    })
                                }
                            </Select>
                        </Col>
                        <Col span="5">
                            <FormItem>
                                <RangePicker onChange={this.dateChange} defaultValue={[defaultStartDate,defaultEndDate]}/>
                            </FormItem>
                        </Col>
                        <Col span="4">
                            <FormItem>
                                <Checkbox defaultChecked={false} onChange={this.checkChange}>过滤无数据广告</Checkbox>
                            </FormItem>
                        </Col>
                        <Col span="2">
                            <FormItem>
                                <Button onClick={this.confirmMsg} disabled={isDisabled}>查询</Button>
                            </FormItem>
                        </Col>
                        <Col span="3" push="4">
                            <FormItem>
                                <BtnForm />
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }   
}