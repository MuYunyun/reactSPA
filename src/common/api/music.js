import { ajax } from 'utils'

export const musicList = ajax.fetchJSONPByGet('http://tingapi.ting.baidu.com/v1/restserver/ting')