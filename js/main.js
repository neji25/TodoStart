// Находим элементы на странице
const form = document.querySelector('#form')
const taskInput = document.querySelector('#taskInput')
const tasksList = document.querySelector('#tasksList')
const emptyList = document.querySelector('#emptyList')

form.addEventListener('submit', e => {
    e.preventDefault()

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
})