
function addEntry(e){
    let task = e.target.previousSibling.previousSibling.value;
    e.target.previousSibling.previousSibling.value = null;
    const list_container = document.querySelector("#list");
    const new_task = document.createElement("li");
    const new_task_div = document.createElement("div");
    const new_task_p = document.createElement("p");
    const new_task_x = document.createElement("p");

    new_task_p.innerText = task;
    new_task_x.innerText = "X";

    new_task_div.appendChild(new_task_p);
    new_task_div.appendChild(new_task_x);
    new_task.appendChild(new_task_div);

    new_task_div.classList.add("task_list");
    new_task_x.classList.add("remove_task")

    list_container.appendChild(new_task);

    new_task_x.addEventListener("click", function(e){
        e.target.parentElement.parentElement.remove();
    })
}

function removeAllTasks(){
    const list = document.querySelectorAll(".task_list");
    list.forEach(task => {
        task.parentElement.remove();
    })
}


