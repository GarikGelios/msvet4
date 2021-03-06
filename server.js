'use strict'
require('dotenv').config({ path: __dirname + '/env' }) // подключаем конфигурацию dotenv, чтобы там писать логины и пароли где их не увидят никакие злодеи

const express = require(`express`) // фреймворк веб-приложений Node.js
const path = require('path') // модуль Node js path используется для обработки и преобразования путей к файлам
const mailer = require('./nodemailer')

const content = require('./email')

const app = express() // присвоили express к переменной app

app.set('port', 3000) // присвоили к переменной port значение порта 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static(path.join(__dirname, '/dist'))) // указали использовать билд файлов VueJS

app.post('/', (req, res) => {
  const message = {
    from: 'ip65by <kopttreyd@ip65.by>', // sender address
    to: `kopttreyd@ip65.by`, // list of receivers
    subject: 'Сообщение с сайта ip65.by', // Subject line
    html: content(req.body)
  }
  mailer(message)
  res.send(JSON.stringify({ 'hello': 'world' }))
})

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`)
})