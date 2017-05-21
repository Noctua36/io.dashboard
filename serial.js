(function () {
  
  'use strict'

  const serialPort = require('serialport')
  const SerialPort = serialPort.SerialPort
  const portName = process.env.PORT_NAME || process.argv[2]
  
  const comPort = new SerialPort(portName, {
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\r\n')
  })

  module.exports = comPort
  module.exports.port = portName
})()