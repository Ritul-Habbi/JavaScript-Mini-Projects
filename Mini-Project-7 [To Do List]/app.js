// Variables
const addTask = document.getElementById("add");
const taskContaioner = document.getElementById("taskContaioner");
const inputTask = document.getElementById("input");

// Event Listner for Add Button
addTask.addEventListener("click", function () {
    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add("checkTask");
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add("deleteTask");
    task.appendChild(deleteBtn);

    if (inputTask.value === "") {
        alert("Please Enter Something");
    } else {
        taskContaioner.appendChild(task);
    }
    inputTask.value=""

    checkBtn.addEventListener('click',function () {
        li.style.textDecoration='line-through'
    })

    deleteBtn.addEventListener('click', function () {
        task.remove();
    });
});
