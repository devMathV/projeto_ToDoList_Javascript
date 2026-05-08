function addTask() {
    const taskTitle = document.querySelector('#task-title').value;

    if (taskTitle) {
        // Pegar template de adicionar a uma variável
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);

        // Adiciona o título da task
        newTask.querySelector('.task-title').textContent = taskTitle;

        // Remove classes desnecessárias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        // Seleciona o elemento pai e adiciona a task
        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        // Adiciona o evento de remover task
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function() {
            removeTask(this)
        })

        // Adiciona o evento concluir task
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function() {
            doneTask(this)
        })

        // Remove o valor do input após clicar em adicionar a task
        document.querySelector('#task-title').value = '';
    }
}

// Função para remover task
function removeTask(task) {
    task.parentNode.remove(true)
}

// Função para tornar a task como concluída
function doneTask(task) {
    task.parentNode.classList.toggle('done')
}

const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(e) {
    e.preventDefault();

    addTask();
})