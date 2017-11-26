import React from 'react'
import fetchJsonp from 'fetch-jsonp'
import './index.less'
import LogoSelect from './logo-select'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            showList: [],
            listIndex: 0,
            searchSrcs: ['https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q=', 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=', 'https://www.sogou.com/web?query='],
            searchSrc: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
        }
    }

    handleInput = (e) => {
        this.setState({
            keyword: e.target.value
        }, () => {
            fetchJsonp(`https://sug.so.360.cn/suggest?word=${this.state.keyword}&encodein=utf-8&encodeout=utf-8`, {
                method: 'GET'
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    showList: data.s
                })
            })
        })
    }

    //处理鼠标hover
    handleMouseSelect = (e) => {
        const index = parseInt(e.target.getAttribute('data-index'), 10);
        this.setState({
            listIndex: index
        })
    }

    //处理点击列表
    handleSelectClick = (e) => {
        this.setState({
            keyword: e.target.innerText
        }, () => {
            this.input.value = this.state.keyword;
            setTimeout(()=> {
                this.handleSearch();
            }, 50);
        })
    }

    //处理点击清除按钮
    handleClearClick = () => {
        this.setState({
            keyword: '',
            showList: []
        });
        this.input.value = '';
    }

    //处理搜索
    handleSearch = () => {
        window.location.href = this.state.searchSrc + this.state.keyword;
    }

    //处理Enter键
    handleKeyEnter = (e) => {
        const keyCode = e.keyCode;
        switch (keyCode) {
            case 13:
                this.handleSearch();
                break;
            case 38:
                this.selectUpAndDown(e, keyCode);
                break;
            case 40:
                this.selectUpAndDown(e, keyCode);
                break;
            default:
                break;
        }
    }

    //上下键选择列表项
    selectUpAndDown = (e, keycode) => {
        e.preventDefault();

        const stateCb = () => {
            this.setState({
                keyword: this.state.showList[this.state.listIndex]
            }, () => {
                this.input.value = this.state.keyword;
            });
        };

        if (keycode === 38) {
            this.setState({
                listIndex: this.state.listIndex === 0 ? 9 : --this.state.listIndex
            }, stateCb);
        } else if (keycode === 40) {
            this.setState({
                listIndex: this.state.listIndex === 9 ? 0 : ++this.state.listIndex
            }, stateCb);
        }
    }

    onLogoChange = (index) => {
        this.setState({
            searchSrc: this.state.searchSrcs[index]
        })
    }

    render() {
        const Li = this.state.showList.map((value, index)=>
            <li key={ index }
                data-index={ index }
                className={ this.state.listIndex === index ? 'is-select' : '' }
                onMouseOver={ this.handleMouseSelect }
                onClick={ this.handleSelectClick }>
                { value }
            </li>
        );

        return (
            <div className="search">
                <LogoSelect onLogoChange={this.onLogoChange}/>
                <div className="search-panel">
                    <div className="search-align">
                        <div className="search-left">
                            <div className="search-box">
                                <input type="text" className="search-input"
                                    onChange={ this.handleInput }
                                    onKeyDown={ this.handleKeyEnter }
                                    ref={r => this.input = r}
                                />
                                <span className="search-clearinput" onClick={ this.handleClearClick }>&times;</span>
                            </div>
                            <div className="search-list">
                                <ul>{
                                    Li
                                }</ul>
                            </div>
                        </div>
                        <button className="search-btn" onClick={ this.handleSearch }>搜一下</button>
                    </div>
                </div>
            </div>
        )
    }
}