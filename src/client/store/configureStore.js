if (process.env.NODE_ENV === 'development') {
  module.exports = import('./configureStore.dev')
} else {
  module.exports = import('./configureStore.prod')
}
