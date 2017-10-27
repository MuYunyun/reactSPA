import { createAction } from 'redux-actions'
import { music } from 'api'
import { createAjaxAction } from 'utils'

export const requestMusicList = createAction('request music list')
export const receiveMusicList = createAction('receive music list')
export const fetchMusicList = createAjaxAction(music.musicList, requestMusicList, receiveMusicList)
