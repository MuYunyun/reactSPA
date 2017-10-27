import fetchJsonp from 'fetch-jsonp'

export function fetchJSON(url, params) {
  params = {
    ...params,
  }
  return fetchJsonp(url, params)
}

export const fetchJSONByGet = url => query => {
  const params = {
    method: 'GET',
  }
  let getQuery = '?'
  let getUrl = ''
  if (query) {
    for(let name in query) {
      getQuery = `${getQuery}${name}=${query[name]}&`
    }
  }
  getUrl = url + (query ? getQuery.substring(0, getQuery.length - 1) : '')
  return fetchJSON(getUrl, params)
}