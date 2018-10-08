import { createAction, handleActions } from 'redux-actions'
import { createAjaxAction, ajax } from '../../../../utils'

const requestMusicList = createAction('request music2 list')
const receiveMusicList = createAction('receive music2 list')
// const musicListApi = ajax.fetchJSONByGet('/mock/music.json')
const musicListApi = ajax.fetchJSONByGet('/api/music/list')
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
