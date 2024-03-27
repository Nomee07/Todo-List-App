document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Add task
    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter" && taskInput.value.trim() !== "") {
            const taskText = taskInput.value.trim();
            const li = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    // Mark task as completed
    taskList.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("completed");
        }
    });

    // Remove task
    taskList.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        if (e.target.tagName === "LI") {
            e.target.remove();
        }
    });
});
