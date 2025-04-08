let lastDeletedTask = null;
"use strict";


document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const searchInput = document.getElementById('searchInput');
    const addTaskButton = document.getElementById('addTaskButton');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const listItem = createTaskItem(taskText);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    function createTaskItem(taskText) {
        const listItem = document.createElement('li');
    
        // Tworzenie kontenera na tekst zadania
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
    
        // Tworzenie kontenera na datę
        const dateSpan = document.createElement('span');
        dateSpan.className = 'date-span';
    
        // Dodanie obsługi kliknięcia na zadanie
        listItem.onclick = function (event) {

                // Przełączanie klasy 'completed'
                if (listItem.classList.contains('completed')) {
                    listItem.classList.remove('completed');
                    dateSpan.textContent = ''; // Usunięcie daty
                } else {
                    listItem.classList.add('completed');
                    const currentDate = new Date();
                    dateSpan.textContent = ` (${currentDate.toLocaleString()})`; // Dodanie daty
                }
        };
    
        // Tworzenie przycisku "X"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function (event) {
            event.stopPropagation(); // Zatrzymanie propagacji kliknięcia do <li>
            if (confirm(`Czy chcesz usunąć "${taskText}"?`)) {
                lastDeletedTask = { element: listItem, parent: taskList };
                taskList.removeChild(listItem);
            }
        };
    
        // Dodanie elementów do listItem
        listItem.appendChild(taskTextSpan); // Dodanie tekstu zadania
        listItem.appendChild(dateSpan); // Dodanie daty
        listItem.appendChild(deleteButton); // Dodanie przycisku "X"
        return listItem;
    }

    function searchTasks() {
        const filter = searchInput.value.toLowerCase();
        const tasks = taskList.getElementsByTagName('li');

        for (let i = 0; i < tasks.length; i++) {
            const taskText = tasks[i].textContent.toLowerCase();
            tasks[i].style.display = taskText.includes(filter) ? '' : 'none';
        }
    }

    addTaskButton.onclick = addTask;
    searchInput.addEventListener('input', searchTasks);
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'z') {
        undo();
    }
    function undo() {
        if (lastDeletedTask) {
            lastDeletedTask.parent.appendChild(lastDeletedTask.element);
            lastDeletedTask = null;
        } else {
            alert('Brak zadań do cofania.');
        }
    }
});