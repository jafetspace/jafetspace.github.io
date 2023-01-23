const scriptURL = 'https://script.google.com/macros/s/AKfycbwwngfOGyfgbSz48YKqVNsSbc-JfCTXQazVn9pSBMcctWtXIpt51WabxIRJDuTp_as-/exec'
const form = document.forms["contactame"]
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "El mensaje se envió correctamente"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})