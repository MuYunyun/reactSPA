import fetchJsonp from 'fetch-jsonp'

export function fetchJSONP(url, params) {
  return fetchJsonp(url, {
    ...params,
  })
}

export const fetchJSONPByGet = url => query => {
  const params = {
    method: 'GET',
  }
  let getQuery = '?'
  let getUrl = ''
  if (query) {
    Object.keys(query).forEach((name) => {
      getQuery = `${getQuery}${name}=${query[name]}&`
    })
  }
  getUrl = url + (query ? getQuery.substr(0, getQuery.length - 1) : '')
  return fetchJSONP(getUrl, params)
}

export const fetchJSONByGet = url => query => {
  const params = {
    method: 'GET',
  }
  let getQuery = '?'
  let getUrl = ''
  if (query) {
    Object.keys(query).forEach((name) => {
      getQuery = `${getQuery}${name}=${query[name]}&`
    })
  }
  getUrl = url + (query ? getQuery.substr(0, getQuery.length - 1) : '')
  return fetch(getUrl, params)
}
