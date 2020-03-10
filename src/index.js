const ul = document.querySelector("ul")

document.addEventListener("DOMContentLoaded", (event) => {
  // your code here
  document.addEventListener('submit', function(event){
    event.preventDefault()
    const input = document.getElementById("new-task-description")
    const li = document.createElement("li")
    li.className = "tasks"
    li.innerHTML = `
    <h3>${input.value} <button>&times;</button></h3>`

    ul.append(li)
  })

  document.addEventListener('click',function(event){
    
  })

});


