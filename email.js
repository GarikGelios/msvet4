module.exports = function content(data){ // функция для сбора lданных в форме
    let emailTemplate = `
  <p>HELLO!</p>
  <p> ${data.name} : ${data.phone} </p>
  <p> ${data.message} </p>
  `
    return emailTemplate
  }
  