import { createAction, handleActions } from 'redux-actions'
import { createAjaxAction, ajax } from '../../../../utils'

const requestMusicList = createAction('request music2 list')
const receiveMusicList = createAction('receive music2 list')
const musicListApi = ajax.fetchJSONByGet('http://127.0.0.1:4000/api/music/list')
export const fetchMusicList = createAjaxAction(musicListApi, requestMusicList, receiveMusicList)

export const music2List = handleActions({
  'request music2 list'(state, action) {
    return { ...state, loading: true }
  },
  'receive music2 list'(state, action) {
    const { res } = action.payload
    return { data: res, loading: false }
  }
}, { data: [] })
