import { ajax } from 'utils'

export const musicList = ajax.fetchJSONByGet('http://tingapi.ting.baidu.com/v1/restserver/ting')