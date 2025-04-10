const button = document.getElementById("criar")

button.onclick = (event) => {
    event.preventDefault();
    // let tarefas = localStorage.getItem("tarefas", `${itemArray.length}`)
    
    let itemArray = []
    let radiobox = document.getElementsByName("option")
    let taskName = document.getElementById("tarefa__input")
    let taskDesc = document.getElementById("description__input")
    
    if (taskName.value.length === 0) {
        window.alert("[ERRO] Digite um nome para a tarefa!")
    } else {
        let nomeDaTarefa = taskName.value;
        let DescDaTarefa = taskDesc.value || "Sem descrição...";
        let checkedValue;
        
        radiobox.forEach((item) => {
            if (item.checked) {
                checkedValue = item.value;
            }
        })
        
        
        let taskCount = Number(localStorage.getItem("tasks")) || 0;
        taskCount++
        localStorage.setItem("tasks", taskCount.toString());

        id = taskCount;
        
        let Task = {
            nome: nomeDaTarefa,
            description: DescDaTarefa,
            grau: checkedValue,
            _id: id
        }

        localStorage.setItem(`item${id}`, `${JSON.stringify(Task)}`)
    
        window.location.href = "./tarefas.html"
    }
}
