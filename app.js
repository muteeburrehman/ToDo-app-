// Variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('toDoContainer');
const inputTask = document.getElementById('inputfield');

// Event listener for add button
addTask.addEventListener('click', function () {
    let task = document.createElement('div');
    task.classList.add('task');
    task.classList.add('alert', 'alert-primary'); // Add Bootstrap alert classes

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    li.classList.add('fs-5', )
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask', 'btn', 'btn-success','movCh'); // Add Bootstrap button classes
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask', 'btn' , 'btn-danger','movedel'); // Add Bootstrap button classes
    task.appendChild(deleteButton);

    if (inputTask.value == "") {
        alert('Please Enter a Task');
    } else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    checkButton.addEventListener('click', function () {
        console.log(checkButton.parentElement.classList.contains('completed'));
        if(checkButton.parentElement.classList.contains('completed')) {
            checkButton.parentElement.classList.remove('completed');
            checkButton.parentElement.style.textDecoration = "none";
            return;
        }

        checkButton.parentElement.classList.add('completed');
        checkButton.parentElement.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click', function () {
        alert("Are you sure you want to remove this!!!")
        deleteButton.parentElement.remove();
    });
});
