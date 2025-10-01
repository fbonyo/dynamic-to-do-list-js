document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list'); // <ul id="task-list">

    // Define a function named addTask
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty ("")
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if input is empty
        }
        
        // --- Task Creation and Removal (Failing Check) ---
        
        // Create a new li element
        const listItem = document.createElement('li');
        // Set its textContent to taskText
        listItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        // Set its textContent to "Remove"
        removeButton.textContent = "Remove";
        // Give it a class name of 'remove-btn'
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        // The handler removes the li element (listItem) from its parent (taskList)
        removeButton.onclick = function() {
            // This is the key line for removal logic
            taskList.removeChild(listItem); 
        };

        // Append the remove button to the li element
        listItem.appendChild(removeButton);

        // Append the li to taskList
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
    }

    // --- Attach Event Listeners (Failing Check) ---
    
    // Add an event listener to addButton that calls addTask when clicked.
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter' before calling addTask
        if (event.key === 'Enter') {
            addTask();
        }
    });
});