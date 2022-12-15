// Находим элементы на странице
const form = document.querySelector('#form')
const taskInput = document.querySelector('#taskInput')
const tasksList = document.querySelector('#tasksList')
const emptyList = document.querySelector('#emptyList')

const tasks = []

//Добавление задачи
form.addEventListener('submit', addTask)

//Удаление задачи
tasksList.addEventListener('click', deleteTask)

//Отмечаем задачу завершенной
tasksList.addEventListener('click', doneTask)


function addTask(event) {
    event.preventDefault()

    //Достаем текст задачи из поля ввода
    const taskText = taskInput.value
    console.log(taskText)

    //Формируем разметку для новой задачи
    const taskHtml = `<li class="list-group-item d-flex justify-content-between task-item">
                        <span class="task-title">${taskText}</span>
                        <div class="task-item__buttons">
                            <button type="button" data-action="done" class="btn-action">
                                <img src="./img/tick.svg" alt="Done" width="18" height="18">
                            </button>
                            <button type="button" data-action="delete" class="btn-action">
                                <img src="./img/cross.svg" alt="Done" width="18" height="18">
                            </button>
                        </div>
                       </li>`

    //Добавление разметки на страницу
    tasksList.insertAdjacentHTML('beforeend', taskHtml)

    //Очищаем поле ввода
    taskInput.value = ""
    taskInput.focus()

    //Скрываем блок "Список пуст", если в списке есть задачи
    if(tasksList.children.length > 1) {
        emptyList.classList.add('none')
    }
}

function deleteTask(event) {
    if(event.target.dataset.action !== 'delete') return

    const parentNode = event.target.closest('.list-group-item')
    parentNode.remove()

    //Скрываем блок "Список пуст", если в списке есть задачи
    if(tasksList.children.length == 1) {
        emptyList.classList.remove('none')
    }
}

function doneTask(event) {
    if(event.target.dataset.action !== 'done') return

    const parentNode = event.target.closest('.list-group-item')
    const taskTitle = parentNode.querySelector('span')
    taskTitle.classList.toggle('task-title--done')
}