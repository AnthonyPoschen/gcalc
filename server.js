/* eslint no-console: 0 */

import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from './webpack.config.dev'

const app = express()
const compiler = webpack(config)
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || "127.0.0.1"

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
})

app.use(devMiddleware)

app.use(webpackHotMiddleware(compiler))

const server = app.listen(PORT, HOST, err => {
  if (err) return console.error(err)

  console.log(`Listening at http://${HOST}:${PORT}`)
});

process.on('SIGTERM', () => {
  console.log('Stopping dev server')
  devMiddleware.close()
  server.close(() => process.exit(0))
})
