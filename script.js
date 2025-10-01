document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // --- Local Storage Functions ---

    // Function to save the current tasks in the DOM to Local Storage
    function saveTasks() {
        // Retrieve all <li> elements in the task list
        const tasks = [];
        taskList.querySelectorAll('li').forEach(listItem => {
            // Get the text content, excluding the "Remove" button's text
            const taskText = listItem.firstChild.textContent.trim();
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Loop through stored tasks and add them to the DOM (without saving again)
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // false = do not save to Local Storage during load
        });
    }


    // --- Core Task Management Function ---

    // Modified addTask function to accept text and an optional save flag
    function addTask(taskText, save = true) {
        
        // If the function is called without arguments (e.g., from button click), get input value
        if (typeof taskText !== 'string') {
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            // Only alert if the task is being added via user action, not loading
            if (save) {
                 alert("Please enter a task.");
            }
            return;
        }
        
        // Task Creation
        const listItem = document.createElement('li');
        // Set its textContent to the taskText
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign removal handler
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
            
            // Update Local Storage after removal
            saveTasks();
        };

        // Append elements
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input only if it was a new user action
        if (save) {
            taskInput.value = "";
            
            // Update Local Storage after addition
            saveTasks();
        }
    }

    // --- Initialization and Event Listeners ---
    
    // 1. Load tasks from Local Storage when the page loads
    loadTasks();
    
    // 2. Add event listener to addButton that calls addTask
    // We call addTask without arguments, letting it get the value from the input field
    addButton.addEventListener('click', () => addTask());

    // 3. Add keypress event listener to taskInput
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
