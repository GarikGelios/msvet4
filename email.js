module.exports = function content(data){ // функция для сбора lданных в форме
    let emailTemplate = `
  <h4>Контактная форма с сайта</h4>
  <p>Организация: ${data.organization} </p>
  <p>Имя: ${data.name} </p>
  <p>Телефон: ${data.phone} </p>
  <p>Почта: ${data.email} </p>
  <p> ${data.message} </p>
  `
    return emailTemplate
  }
  