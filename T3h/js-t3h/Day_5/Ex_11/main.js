////selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


///Event Listeners
todoButton.addEventListener('click', addToDo)
todoList.addEventListener('click', deleteCheck)

////Functions
function addToDo(event) {///prevent to form submit
    event.preventDefault();
    ///to do div
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add("todo");
    ///creat li
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    toDoDiv.appendChild(newToDo);
    ///creat check mark button
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.classList.add('complete-btn');
    toDoDiv.appendChild(completeBtn);
    ///creat trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    toDoDiv.appendChild(trashBtn);
    ///append to list
    todoList.appendChild(toDoDiv);
    //clear todoinput value
    todoInput.value = "";
}

function deleteCheck(event)
{
    const item = event.target;
    if(item.classList[0] === 'trash-btn')
    {
        const clearItem = item.parentElement;
        clearItem.remove();
    }

    if(item.classList[0] === 'complete-btn')
    {
        const checkItem = item.parentElement;
        checkItem.classList.add('completed');
    }
}


console.log(todoInput.innerHTML);
