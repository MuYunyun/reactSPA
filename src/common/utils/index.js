import * as ajaxFun from './ajax'

export const ajax = ajaxFun

export const createAjaxAction = (api, startAction, endAction) => (data, cb) =>
  (dispatch) => {
    let respon
    dispatch(startAction(data))
    return new Promise((resolve, reject) => {
      api(data)
      .then(checkStatus)
      .then(response => response.json())
      .then(response => {
        respon = response
        dispatch(endAction({ req: data, res: response }))
      })
      .then(() => {
        if (respon.status === 1) {
          cb && cb(respon)
        }
      })
      .catch(catchError)
    })
  }

function catchError(error) {
  console.log(error)
}

function checkStatus(response) {
  if ((response.status >= 100 && response.status < 300) || response.status === 500 || response.json) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}