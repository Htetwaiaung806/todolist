document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            // Create a button to remove the task
            const removeBtn = document.createElement("span");
            removeBtn.textContent = "Delete";
            removeBtn.className = "remove-btn";
            removeBtn.onclick = function() {
                taskList.removeChild(li);
            };
            li.appendChild(removeBtn);
            // Mark task as complete on click
            li.onclick = function() {
                li.classList.toggle("completed");
            };
            taskList.appendChild(li);
            taskInput.value = ""; // Clear input
        }
    }
    addTaskBtn.onclick = addTask;
    // Allow pressing Enter to add a task
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});