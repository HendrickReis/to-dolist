function createTask(item, count) {

    let main = document.getElementById("main")
    let CreateArea = document.createElement("div")
    let title__task = document.createElement("div")
    let desc__task = document.createElement("div")
    let button__task = document.createElement("div")

      CreateArea.className = 'task_area'
      title__task.className = "task-title__area"
      desc__task.className = 'task-description__area'
      button__task.className = 'task-button__area'
  
      let title = document.createElement("h1")
      let grau = document.createElement("h2")
      let fechar = document.createElement('button')
      let marcar = document.createElement('button')

      
      title.innerHTML = `${item.nome}`
      grau.innerHTML = `${item.grau}`
      grau.style.color = `${localStorage.getItem("CorFonte")}`
      desc__task.innerHTML = `${item.description}`
      fechar.innerHTML = `Fechar`
      marcar.innerHTML = `Marcar`
      fechar.classList.add("customize__button")
      marcar.classList.add("customize__button")
      

      marcar.onclick = () => {
        title.style.textDecoration = "line-through"
        desc__task.style.textDecoration = "line-through"
        grau.style.textDecoration = "line-through"
      }

      
      title__task.appendChild(title)
      title__task.appendChild(grau)
      button__task.appendChild(fechar)
      button__task.appendChild(marcar)
      
      CreateArea.appendChild(title__task)
      CreateArea.appendChild(desc__task)
      CreateArea.appendChild(button__task)
      
      
      main.appendChild(CreateArea)

      fechar.onclick = () => {
        main.removeChild(CreateArea)
        localStorage.setItem("tasks", `${Number(localStorage.getItem("tasks")) - 1}`)
        localStorage.removeItem(`item${count}`)
      }
}

document.body.onload = () => {
  if (Number(localStorage.getItem("tasks")) > 0 && localStorage.getItem("item1")) {
    let i = Number(localStorage.getItem("tasks"))
  for (let c = 1; c <= i; c++) {
      let smogon = JSON.parse(localStorage.getItem(`item${c}`))
      createTask(smogon, c)
  }}
  }