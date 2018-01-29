import React from 'react';
import 'jswaterfall'
import './index.less'
import { imgUrlList } from './imgUrlList'

let waterfall = null

export default class Waterfall extends React.Component {
  componentDidMount() {
    function wf() {
      waterfall = new window.Waterfall({
        number: 20,
        fixWidth: 1000,
        scrollElem: 'content',
      })
      waterfall.on("load", function () {
        setTimeout(function () {
          const $waterfall = document.getElementById('waterfall')
          for (let i = 0; i < 20; i++) {
            const img = document.createElement('img')
            img.setAttribute('src', imgUrlList[i])
            img.setAttribute('class', 'waterfall-box')
            $waterfall.appendChild(img)
          }
          waterfall.done()
        }, 1000)
      })
    }
    if (!window.onload) {
      window.onload = wf
    } else {
      wf()
    }
  }

  componentWillUnmount() {
    waterfall = null
  }


  render() {
    return (
      <div id="waterfall">
        {imgUrlList.map(r => <img src={r} className="waterfall-box" alt="waterfall" />)}
      </div>
    )
  }
}