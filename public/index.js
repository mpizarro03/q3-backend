$(document).ready(function(){

// let data = ["fuck", "marry", "kill"]
// let data = 

let dropDown = document.getElementById("dropdown-list")
let writeIn = document.getElementById("type-in-feelings")
let option

for(let i=0; i < data.length; i++) {
  option = document.createElement("option")
  option.textContent = data[i]
  dropDown.appendChild(option)
}

dropDown.addEventListener("change", function populate() {
  let popHole = document.getElementById("populate-feelings")
  let h = document.createElement("h1")
  h.textContent = dropDown.value
  popHole.appendChild(h)


})

  writeIn.addEventListener("input", function(){
    let text = writeIn.value
    let popHole = document.getElementById("populate-feelings")
    let h = document.createElement("h1")
    h.textContent = text
    popHole.appendChild(h)



})



})
