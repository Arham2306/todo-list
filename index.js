const todoList = [{
    name: 'make dinner',
    dueDate: '2024-8-29'
}, {
    name: 'wash dishes',
    dueDate: '2024-8-29'
}];

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
        <div class="todo-list-li">
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-btn" onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
                ">Delete
            </button>
            </div>
        </div>`;
        todoListHTML += html;
    }

    document.querySelector('.todo-list-output').innerHTML = todoListHTML;
}




function addTask() {
    const inputElement = document.querySelector('.name-input');
    const name = inputElement.value;

    const dateInput = document.querySelector('.due-date-input');
    const dueDate = dateInput.value;

    todoList.push({
        name: name,
        dueDate: dueDate
    });

    inputElement.value = '';

    renderTodoList();

}