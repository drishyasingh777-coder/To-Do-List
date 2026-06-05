let selectedTask = null;

function addTask(){

    const input =
        document.getElementById("taskInput");

    const task =
        input.value.trim();

    if(task === ""){
        return;
    }

    const li =
        document.createElement("li");

    li.textContent = "• " + task;

    li.onclick = function(){

        document
            .querySelectorAll("li")
            .forEach(item =>
                item.classList.remove("selected")
            );

        li.classList.add("selected");
        selectedTask = li;
    };

    document
        .getElementById("taskList")
        .appendChild(li);

    input.value = "";
}

function deleteTask(){

    if(selectedTask){
        selectedTask.remove();
        selectedTask = null;
    }
}

document
.getElementById("taskInput")
.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        addTask();
    }
});
