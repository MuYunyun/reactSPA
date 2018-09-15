import configureStoreDev from './configureStore.dev'
import configureStoreProd from './configureStore.prod'

if (process.env.NODE_ENV === 'development') {
  module.exports = configureStoreDev
} else {
  module.exports = configureStoreProd
}
