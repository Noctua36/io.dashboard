(function () {
  'use strict'

  const express = require('express')
  const path = require('path')
  const app = express()

  const HTTP_PORT = process.env.PORT || 3000

  app.set('view engine', 'pug')
  app.set('views', path.join(__dirname, 'views'))

  app.use('/libs', express.static(path.join(__dirname, 'libs')))

  // root route
  app.get('/', function (req, res) {
    res.render('index', {
      title: 'Hey',
      message: 'Hello there!'
    })
  })

  // start server
  const server = app.listen(HTTP_PORT, () => {
    console.log('Webserver running on port ' + HTTP_PORT)
  })

  const io = require('socket.io')(server);
  const socketEvents = require('./socketEvents')

  io.on('connection', socketEvents.onConnect)

})()