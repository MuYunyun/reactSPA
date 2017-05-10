import React from 'react'
import { Icon,Tooltip,Button,message } from 'antd'
import { Link } from 'react-router'
import SearchBar from 'components/searchbar'
import Table from 'components/table'
import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
import './index.less'

require('es6-promise').polyfill();

export default class Music extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tData:[],
            loading: true,
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
    fetchTableData = (typeId) => {
        fetchJsonp(`http://tingapi.ting.baidu.com/v1/restserver/ting?xml&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${typeId}&size=200&offset=0`, {method: 'GET'})
            .then((res) => { return res.json(); })
            .then((data) => {
                const songArray = []
                const songList = data.song_list
                for ( let i = 0; i < data.song_list.length; i++ ) {
                    songArray.push({
                        title: data.song_list[i].title,
                        author: data.song_list[i].author,
                        country: data.song_list[i].country,
                        language: data.song_list[i].language,
                        publishtime: data.song_list[i].publishtime,
                    })
                }
                this.setState({tData: songArray});
                this.setState({loading:false});
            })
            .catch((e) => { console.log(e.message);});
    }

    // 组件渲染后获取外界数据(GET)
    componentDidMount() {
        this.fetchTableData('2')
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
                dataIndex: 'title',
                title: '音乐名',
                // render: (text, record) => {
                // }
            },
            {
                dataIndex: 'author',
                title: '歌手',
            },
            {
                dataIndex: 'country',
                title: '发行国家',
            }, {
                dataIndex: 'language',
                title: '语言',
            }, {
                dataIndex: 'publishtime',
                title: '发行时间',
            },
        ]
    }

    tableAction = (actionKey, item) => {
        const that = this
        if (actionKey === 'edit') {
            this.setState({
                item: item,
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
                            pageSize={10}
                            header={ this.tableHeader() }
                            data={ this.state.tData }
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
                            y={385}
                        />
                    </div>
                </div>
            </div>
        )
    }
}