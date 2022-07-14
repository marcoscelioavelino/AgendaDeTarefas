function adicionarTarefa() {

        const tituloNovaTarefa = document.querySelector('#tituloNovaTarefa').value;

        if (tituloNovaTarefa == "" )  {
                alert('Digite uma nova tarefa para a lista.')
        }
        
        if (tituloNovaTarefa) {

                //Cria cópia do modelo li
                const caixaTarefas = document.querySelector('.modelo');
                const novaCaixaTarefas = caixaTarefas.cloneNode(true);


                //Adicionar título a nova tarefa
                novaCaixaTarefas.querySelector('.tituloTarefa').textContent = tituloNovaTarefa;

                //Remover classes desnecessárias
                novaCaixaTarefas.classList.remove('modelo');
                novaCaixaTarefas.classList.remove('ocultar');

                //Adicionar a tarefa na lista
                const listaTarefas = document.querySelector('#listaTarefas');
                listaTarefas.appendChild(novaCaixaTarefas);

                //ativar botão de confirmar tarefa     
                const btConfirmarTarefa = novaCaixaTarefas.querySelector('.confirmarTarefa').addEventListener('click', function () {
                        confirmaTarefa(this);

                })


                //Ativar botão de remover tarefa
                const btExcluirTarefa = novaCaixaTarefas.querySelector('.excluirTarefa').addEventListener('click', function () {
                        removeTarefa(this);
                })

                //Limpar campo de texto para adicionar tarefa        
                document.querySelector('#tituloNovaTarefa').value = "";

        }
}


function confirmaTarefa(tarefa) {
        const confirmaTarefa = tarefa.parentNode;
        confirmaTarefa.classList.toggle('confirmar')
}

function removeTarefa(tarefa) {
        const removeTarefa = tarefa.parentNode;
        tarefa.parentNode.remove(true);
}

const btAdicionar = document.querySelector('#btAddTarefa');
btAdicionar.addEventListener('click', function(e) {
        e.preventDefault();
        adicionarTarefa();
});

