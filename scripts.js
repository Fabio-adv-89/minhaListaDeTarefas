const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = [] // array

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    }) //Push adiciona algo no array
    
    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {

        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
            <img src="verificado.png" alt="chek-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="lixo.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
        </li>`
    })

listaCompleta.innerHTML = novaLi //innerHTML: Permite que eu adicione o que eu quiser dentro do meu HTML
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostrarTarefas()
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }   
     
    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)
