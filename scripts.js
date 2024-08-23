function adicionarTarefa() {

    let tarefa = document.querySelector("input").value
    if (tarefa.length > 0) {
      let ul = document.querySelector("ul")
    let li = document.createElement('li')

    li.innerHTML = tarefa + '<span onclick="deletarTarefa(this)">❌</span>'

    ul.appendChild(li)

    document.querySelector("input").value = ''
    

    } else{
        alert('Adicione uma tarefa antes')
    }
    
}

function deletarTarefa(li) {
    li.parentElement.remove()
}