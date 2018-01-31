import React from 'react';
import './waterfall.js'
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
    this.loadImage(imgUrlList, wf)
  }

  // 实现图片预加载
  loadImage = (urlList, callback) => {
    let count = 0
    let completeCount = 0
    for(let i = 0; i < urlList.length; i++) {
      const img = new Image() //创建一个Image对象，实现图片的预下载
      img.src = urlList[i]
      if (img.complete) {
        completeCount++
      } else {
        // eslint-disable-next-line
        img.onload = () => {
          count++
          if (count === urlList.length) {
            callback()
          }
        };
      }
    }
    if (completeCount === urlList.length) {
      callback()
    }
  };


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