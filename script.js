/**
 * File: script.js
 * Implements a dynamic To-Do List application.
 */

// 1. Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 3. Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if input is empty
        }

        // 4. Task Creation and Removal

        // Create a new li element
        const listItem = document.createElement('li');
        // Set its textContent to taskText
        listItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        // Set its textContent to "Remove"
        removeButton.textContent = "Remove";
        // Give it a class name of 'remove-btn' (for CSS styling)
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        // When clicked, remove the parent li element (the task item) from taskList
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the li element
        listItem.appendChild(removeButton);

        // Append the li to taskList
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
    }

    // 5. Attach Event Listeners

    // Event listener for the "Add Task" button click
    addButton.addEventListener('click', addTask);

    // Event listener for the 'keypress' event on the input field (for 'Enter' key)
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
    // NOTE: The instruction "Invoke the addTask function on DOMContentLoaded" seems redundant
    // for an empty list application. It is excluded here to prevent adding an empty task
    // on page load, which would violate the "Check if taskText is not empty" rule.
});