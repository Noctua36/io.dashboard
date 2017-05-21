(function () {

  'use strict'

  const serial = require('./serial')

  module.exports.onConnect = (socket) => {
    console.log('a user connected')

    socket.on('disconnect', () => {
      console.log('a user disconnected')
    })

    const serialOpen = () => {
      console.log('COM port', serial.port, 'opened')
      socket.emit('serialOpen')
    }

    const serialClose = () => {
      console.log('COM port', serial.port, 'closed')
      socket.emit('serialClose')
    }

    const serialData = (data) => {
      console.log('Data received on COM port', serial.port, ':', data)
      socket.emit('serialData', null, data)
    }

    const serialError = (err) => {
      console.log('Error on COM port', serial.port, ':', JSON.stringify(err))
      socket.emit('serialError', err)
    }

    const serialDisconnect = () => {
      console.log('COM port', serial.port, 'disconnect')
      socket.emit('serialDisconnect')
    }

    serial.on('open', serialOpen)
    serial.on('data', serialData)
    serial.on('close', serialClose)
    serial.on('error', serialError)
    serial.on('disconnect', serialDisconnect)

  }

})()