// script.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Prevent adding empty tasks
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create list item (li)
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Add event to remove task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li, and li to ul
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for Add Task button
    addButton.addEventListener("click", addTask);

    // Event listener for pressing Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
