import React from 'react'
import SearchBar from 'components/searchbar'
import Table from 'components/table'
import moment from 'moment'
import { Button, message, Modal } from 'antd'
import { fetchMusicList } from 'actions/music'
import { connect } from 'react-redux'
import { musicKindList } from '../../../utils/config'
import './index.less'

// @connect(
//   (state) => ({
//     musicList: state.musicList,
//   })
// )
export default class Music extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {},
    }
  }

  componentDidMount() {}

  fetchTableData = (value) => {}

  onSearch = (searchFields) => {

  }

  searchFields = () => {
    return [{
      title: '歌曲类型',
      key: 'type',
      type: 'select',
      defaultValue: 2,
      // onChange: (value) => this.fetchTableData(value),
      items: () => musicKindList.map(ele => ({
        value: ele.value,
        mean: ele.mean,
      })),
    }]
  }

  tableHeader = () => {
    return [{
      dataIndex: 'title',
      title: '歌曲名',
      width: 200,
    }, {
      dataIndex: 'author',
      title: '歌手',
      width: 200,
    }, {
      dataIndex: 'country',
      title: '发行国家',
      width: 200,
    }, {
      dataIndex: 'language',
      title: '语种',
      width: 200,
    }]
  }

  onOk = () => {
    message.success('添加成功')
    this.onCancel()
  }

  render() {
    // const { musicList } = this.props
    const songArray = [{ title: '卡路里（电影《西虹市首富》插曲）', author: '火箭少女101', country: '内地', language: '国语' }]

    return (
      <div id="wrap">
        <SearchBar
          onSubmit={this.onSearch}
          fields={this.searchFields()}
        />
        <div className="tableBox">
          <div style={{ paddingTop: 43 }}>
            <Table
              onCtrlClick={this.tableAction}
              pagination={true}
              pageSize={10}
              header={this.tableHeader()}
              data={songArray}
              loading={false}
              scroll={{ y: 385 }}
            />
          </div>
        </div>
      </div>
    )
  }
}