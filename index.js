document.querySelector('.name-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.querySelector('.due-date-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

const todoList = [];

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach(function (todoObject, index) {
        const { name, dueDate } = todoObject;
        const html = `
        <div class="todo-list-li">
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-btn" onclick="
                todoList.splice(${index}, 1);
                renderTodoList();
                ">Delete
            </button>
            </div>
        </div>`;
        todoListHTML += html;
    })

    // for (let i = 0; i < todoList.length; i++) {
    //     const todoObject = todoList[i];
    //     //const name = todoObject.name;
    //     //const dueDate = todoObject.dueDate;
    //     const { name, dueDate } = todoObject;
    //     const html = `
    //     <div class="todo-list-li">
    //         <div>${name}</div>
    //         <div>${dueDate}</div>
    //         <button class="delete-btn" onclick="
    //             todoList.splice(${i}, 1);
    //             renderTodoList();
    //             ">Delete
    //         </button>
    //         </div>
    //     </div>`;
    //     todoListHTML += html;
    // }

    document.querySelector('.todo-list-output').innerHTML = todoListHTML;
}




function addTask() {
    const inputElement = document.querySelector('.name-input');
    const name = inputElement.value;

    const dateInput = document.querySelector('.due-date-input');
    const dueDate = dateInput.value;

    if (inputElement.value === '') {
        alert('Please enter a task');
    } else if (dateInput.value === '') {
        alert('Please enter a date.')
    } else {

        todoList.push({
            name: name,
            dueDate: dueDate
        });

        inputElement.value = '';
        dateInput.value = '';

        renderTodoList();
    }

}