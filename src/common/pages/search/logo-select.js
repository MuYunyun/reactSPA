import React from 'react'

export default class LogoSelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            logos: [require('../../images/360_logo.png'),require('../../images/baidu_logo.png'),require('../../images/sougou_logo.png')],
            selectIndex: 1,
            showLogo: false
        }
    }

    //处理logo选择
    handleLogoSelect = (e) => {
        var index = parseInt(e.target.getAttribute('data-index'), 10);
        this.setState({
            selectIndex: index,
            showLogo: false
        }, () => {
            this.props.onLogoChange(index)
        })
    }

    //显示logo列表
    showLogoList = () => {
        this.setState({
            showLogo: true
        })
    }

    render() {
        const Li = this.state.logos.map((logo, index)=>{
            return (
                <div className="logo-list-item"
                     key={index}>
                    <img src={logo} onClick={this.handleLogoSelect} data-index={index} alt="logo" />
                </div>
            )
        });

        return (
            <div className="logo-panel">
                <div className="logo-display">
                    <img src={this.state.logos[this.state.selectIndex]} alt="logo" />
                    <span className="logo-select-arrow" onClick={this.showLogoList}></span>
                </div>
                <div className="logo-list" style={{display: this.state.showLogo? 'block': 'none'}}>
                    {Li}
                </div>
            </div>
        )
    }
}