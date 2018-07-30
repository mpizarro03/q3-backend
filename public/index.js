$(document).ready(function(){


let dropDown = document.getElementById("dropdown-list")
let writeIn = document.getElementById("type-in-feelings")
let option
let data

let onLoadReq = $.getJSON('http://localhost:3000/api/feelings')
onLoadReq.done(function(data) {
  console.log(data)


for(let i=0; i < data.length; i++) {
  option = document.createElement("option")
  option.textContent = data[i].name
  dropDown.appendChild(option)
}

dropDown.addEventListener("change", function populate() {
  let popHole = document.getElementById("populate-feelings")
  let h = document.createElement("h1")
  h.textContent = dropDown.value
  popHole.appendChild(h)


})
})

  writeIn.addEventListener("input", function(){
    let text = writeIn.value
    let popHole = document.getElementById("populate-feelings")
    let h = document.createElement("h1")
    h.textContent = text
    popHole.appendChild(h)

console.log(text)

let button = document.getElementById('button')
button.addEventListener('click', function(e) {
  e.preventDefault()
  let obj = {'id': 22,
'name': text, 'description': '', 'is_loved': true, 'is_default': false }

  $.post('http://localhost:3000/api/feelings', obj)

})
})



})
