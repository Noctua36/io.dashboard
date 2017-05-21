(function () {

  'use strict'

  module.exports.onConnect = (socket) => {
    console.log('a user connected')

    socket.on('disconnect', () => {
      console.log('a user disconnected')
    })

    socket.on('test', function (data) {
      // do something in server
      console.log('test event emitted')
      socket.emit('test_ret', null, 1234) // catch event in client
    })

    socket.on('meMandaAlgoPraIniciarAi', () => socket.emit('meMandaAlgoPraIniciarAi_ret', null, 'toma'))
  }


})()