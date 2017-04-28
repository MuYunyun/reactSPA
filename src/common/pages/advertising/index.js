import React from 'react'
import { Icon,Tooltip,Button,message } from 'antd'
import { Link } from 'react-router'
import SearchBar from 'components/searchbar'
import Table from 'components/table'
// 引入标准Fetch及IE兼容依赖
// import 'whatwg-fetch'
// import 'es6-promise/dist/es6-promise.min.js'
// import 'fetch-ie8/fetch.js'

import './index.less'

export default class Advertising extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tData:[],
            loading: false
        }
    }

    // 行单击事件
    rowClick = (e) => {
        console.log(e.key)
    }

    // refresh = (data) => {
    //     // 刷新表格
    //     this.setState({tData:data.rowData});
    // }

    // 获取表格数据
    // fetchTableData = () => {
    //     fetch('../data/tableData.json')
    //         .then((res) => { console.log(res.status);return res.json(); })
    //         .then((data) => { this.setState({loading:false});this.setState({tData:data.rowData}); })
    //         .catch((e) => { console.log(e.message);});
    // }

    // 组件渲染后获取外界数据(GET)
    componentDidMount() {
        // this.fetchTableData()
    }

    onSearch = () => {

    }

    searchFields = () => {
        const { config } = this.props
        return [{
            title: '系列名称',
            key: 'cityId',
            type: 'select',
            defaultValue: '全部',
            // items: () => [{ value: '', mean: '全部' }].concat(global.__data.cityList.map(ele => ({ value: ele.cityId, mean: ele.cityName })))
        }, {
            title: '投放状态',
            key: 'payType',
            type: 'select',
            defaultValue: '全部',
            // items: () => [{ value: '', mean: '全部' }].concat(config.PAY_TYPE),
        }, {
            title: '时间段',
            key: ['start', 'end'],
            type: 'rangePicker',
        }]
    }

    tableHeader = () => {
        const { config } = this.props
        return [
            {
                dataIndex: 'seriesName',
                title: '系列名称',
                render: (text, record) => {
                // const name = window.__data.cityList.find(l => l.cityId === record.cityId) &&
                //     window.__data.cityList.find(l => l.cityId === record.cityId).cityName
                // return <span>{name}</span>
                }
            },
            {
                dataIndex: 'putonStatus',
                title: '投放状态',
                render: (text, record) => {
                    // const payType = config.PAY_TYPE.find(l => l.value === record.payType) &&
                    // config.PAY_TYPE.find(l => l.value === record.payType).mean
                    // return <span>{payType}</span>
                }
            }, {
                dataIndex: 'exposureURL',
                title: '曝光URL',
                render: (text, record) => {
                }
            }, {
                dataIndex: 'putonLimit',
                title: '投放限额',
                render: (text, record) => {
                }
            }, {
                dataIndex: 'averagePrice',
                title: '点击均价',
                render: (text, record) => {
                }
            }
        ]
    }

    tableData =
        [
            {
                seriesName: 'a',
                putonStatus: 'b',
                exposureURL: 'c',
                putonLimit: 'd',
                averagePrice: 'e',
            }, {
                seriesName: 'a',
                putonStatus: 'b',
                exposureURL: 'c',
                putonLimit: 'd',
                averagePrice: 'e',
            },
        ]

    tableAction = (actionKey, item) => {
        const that = this
        if (actionKey === 'edit') {
            this.setState({
                item: item,
                modalShowEdit: true
            })
        } else if (actionKey === 'delete') {
            confirm({
                title: '提示',
                content: '确定删除吗',
                onOk: () => {
                    message.success('删除成功')
                },
                onCancel() {
                }
            })
        }
    }

    render() {
        return (
            <div id="wrap">
                <SearchBar
                    onSubmit={this.onSearch}
                    fields={this.searchFields()}
                />
                <div className="tableBox">
                    <Button onClick={this.add} className="addButton">添加</Button>
                    <div style={{ paddingTop: 43 }}>
                        <Table
                            onCtrlClick={ this.tableAction }
                            pagination={ true }
                            header={ this.tableHeader() }
                            data={ this.tableData }
                            loading={ this.state.loading }
                            action={row => [{
                                key: 'edit',
                                name: '修改',
                                color: 'blue',
                                icon: 'edit',
                            }, {
                                key: 'delete',
                                name: '删除',
                                color: 'red',
                                icon: 'delete'
                            }]}
                        />
                    </div>
                </div>
            </div>
        )
    }
}