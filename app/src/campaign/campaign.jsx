import React from 'react';
import {Table,Icon,Tooltip} from 'antd';
import { Link } from 'react-router';

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch';
import 'es6-promise/dist/es6-promise.min.js';
import 'fetch-ie8/fetch.js';

import './campaign.less';

// 引入组件
import Title from '../components/Title.jsx';
import Header from './components/header.jsx';

export default class Antdes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            tData:[],
            loading: true
        }        
    }    

    // 行单击事件
    rowClick = (e) => {
        console.log(e.key);
    }

    refresh = (data) => {
        // 刷新表格
        this.setState({tData:data.rowData});
    }

    // 获取表格数据
    fetchTableData = () => {
        fetch('../data/tableData.json')
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { this.setState({loading:false});this.setState({tData:data.rowData}); })
            .catch((e) => { console.log(e.message);});
    }    

    // 组件渲染后获取外界数据(GET)
    componentDidMount() {
        this.fetchTableData();
    }         

    render() {  

        /*定义表格列*/
        const columns = [{
            title: '系列名称',
            dataIndex: 'name'  
        }, {
            title: '系列ID',
            dataIndex: 'key'
        }, {
            title: '投放状态',
            dataIndex: 'status'
        }, {
            title: '曝光量',
            dataIndex: 'exp'
        },{
            title: '曝光URL',
            dataIndex: 'expURL',
            render: (text) => ( <a href={text} target="_blank">{text}</a> )
        }, {
            title: '点击量',
            dataIndex: 'clickNum'
        },{
            title: '点击率',
            dataIndex: 'clickRate',
            render: (text) => ( <span>{text}%</span> )
        }, {
            title: '点击均价',
            dataIndex: 'clickPrice'
        }, {
            title: '投放限额',
            dataIndex: 'limit'
        }, {
            title: '操作',
            dataIndex: 'handle',
            render: 
                (t,r,i) => (
                    <span>
                        <Tooltip title="编辑"><Link to={"/edit/"+(i+1)}><Icon type="edit" /></Link></Tooltip>&nbsp;&nbsp;
                        <Tooltip title="删除"><Icon type="delete" style={{color:'#FD5B5B'}}/></Tooltip>
                    </span>
                )
        }];              
       
        return (
            <div id="wrap">                
                <Title name="广告系列（Press F12, watch Console）"/>
                <Header refreshTable={this.refresh} />
                <div id="table">
                    <Table 
                        rowSelection={{}} 
                        dataSource={this.state.tData} 
                        columns={columns} 
                        size="middle" 
                        pagination={{size:'large'}} 
                        onRowClick={this.rowClick}
                        loading={this.state.loading}
                    />                   
                </div>
            </div>
        )
  }
}
