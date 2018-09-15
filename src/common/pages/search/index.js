import React from 'react'
import fetchJsonp from 'fetch-jsonp'
import './index.less'
import LogoSelect from './logo-select'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      showList: [],
      listIndex: 0,
      searchSrcs: ['https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q=', 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=', 'https://www.sogou.com/web?query='],
      searchSrc: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=',
    }
  }

  handleInput = (e) => {
    const { keyword } = this.state
    this.setState({
      keyword: e.target.value,
    }, () => {
      fetchJsonp(`https://sug.so.360.cn/suggest?word=${keyword}&encodein=utf-8&encodeout=utf-8`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            showList: data.s,
          })
        })
    })
  }

  // 处理鼠标hover
  handleMouseSelect = (e) => {
    const index = parseInt(e.target.getAttribute('data-index'), 10)
    this.setState({
      listIndex: index,
    })
  }

  // 处理点击列表
  handleSelectClick = (e) => {
    const { keyword } = this.state
    this.setState({
      keyword: e.target.innerText,
    }, () => {
      this.input.value = keyword
      setTimeout(() => {
        this.handleSearch()
      }, 50)
    })
  }

  // 处理点击清除按钮
  handleClearClick = () => {
    this.setState({
      keyword: '',
      showList: [],
    })
    this.input.value = ''
  }

  // 处理搜索
  handleSearch = () => {
    const { searchSrc, keyword } = this.state
    window.location.href = searchSrc + keyword
  }

  // 处理 Enter 键
  handleKeyEnter = (e) => {
    const { keyCode } = e
    switch (keyCode) {
      case 13:
        this.handleSearch()
        break
      case 38:
        this.selectUpAndDown(e, keyCode)
        break
      case 40:
        this.selectUpAndDown(e, keyCode)
        break
      default:
        break
    }
  }

  // 上下键选择列表项
  selectUpAndDown = (e, keycode) => {
    e.preventDefault()

    const { showList, keyword, listIndex } = this.state
    const stateCb = () => {
      this.setState({
        keyword: showList[listIndex],
      }, () => {
        this.input.value = keyword
      })
    }

    if (keycode === 38) {
      this.setState({
        listIndex: listIndex === 0 ? 9 : listIndex - 1,
      }, stateCb)
    } else if (keycode === 40) {
      this.setState({
        listIndex: listIndex === 9 ? 0 : listIndex + 1,
      }, stateCb)
    }
  }

  onLogoChange = (index) => {
    const { searchSrcs } = this.state
    this.setState({
      searchSrc: searchSrcs[index],
    })
  }

  render() {
    const { showList, listIndex } = this.state
    const Li = showList.map((value, index) => (
      <li
        key={index}
        data-index={index}
        className={listIndex === index ? 'is-select' : ''}
        onMouseOver={this.handleMouseSelect}
        onClick={this.handleSelectClick}>
        {value}
      </li>))

    return (
      <div className="search">
        <LogoSelect onLogoChange={this.onLogoChange} />
        <div className="search-panel">
          <div className="search-align">
            <div className="search-left">
              <div className="search-box">
                <input
                  type="text"
                  className="search-input"
                  onChange={this.handleInput}
                  onKeyDown={this.handleKeyEnter}
                  ref={r => this.input = r}
                />
                <span className="search-clearinput" onClick={this.handleClearClick}>&times;</span>
              </div>
              {showList.length > 0 ? <div className="search-list"><ul className="search-ul">{Li}</ul></div> : ''}
            </div>
            <button className="search-btn" onClick={this.handleSearch}>搜一下</button>
          </div>
        </div>
      </div>
    )
  }
}
