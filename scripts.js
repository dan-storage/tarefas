const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []



function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefas()

}

function mostrarTarefas() {

    let novaLi = ''


    minhaListaDeItens.forEach((item, index) => {
        novaLi = novaLi + `    
    <li class="task ${item.concluida && "done"}">
        <img src="checked.png" alt="checked" onclick="concluirTarefa(${index})">
        <p>${item.tarefa}</p>
        <img src="trash.png" alt="Lixo" onclick="deletarItem(${index})">
    </li>
`
    })

    listaCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostrarTarefas()

}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1)

    mostrarTarefas()

}
function reloadTask() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()
}
reloadTask()

button.addEventListener("click", adicionarNovaTarefa)