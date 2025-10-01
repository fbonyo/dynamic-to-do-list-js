document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task");
            return;
        }
        
        // --- Task Creation and Removal (Failing Check) ---
        
        // Create elements
        const listItem = document.createElement('li');
        const removeButton = document.createElement('button');
        
        // Set properties
        listItem.textContent = taskText;
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign an onclick event (as explicitly requested in instructions)
        removeButton.onclick = function() {
            // Removes the li element from the taskList
            taskList.removeChild(listItem);
        };

        // Append elements
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = "";
    }

    // --- Attach Event Listeners (Failing Check) ---
    
    // 1. Add event listener to addButton that calls addTask
    addButton.addEventListener('click', addTask);

    // 2. Add keypress event listener to taskInput
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter'
        if (event.key === 'Enter') {
            addTask();
        }
    });
});