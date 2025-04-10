function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    li.onclick = () => {
        li.classList.toggle('completed');
    };

    li.ondblclick = () => {
        li.remove();
    };

    document.getElementById('taskList').appendChild(li);
    input.value = '';
}
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    // Task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Timestamp
    const timeSpan = document.createElement('div');
    const now = new Date();
    timeSpan.className = 'timestamp';
    timeSpan.textContent = `Added: ${now.toLocaleString()}`; // e.g. "Added: 4/10/2025, 2:30 PM"

    // Append both to the list item
    li.appendChild(taskSpan);
    li.appendChild(timeSpan);

    // Mark as completed on click
    li.onclick = () => {
        li.classList.toggle('completed');
    };

    // Delete on double click
    li.ondblclick = () => {
        li.remove();
    };

    document.getElementById('taskList').appendChild(li);
    input.value = '';
}
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    // Task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Timestamp
    const timeSpan = document.createElement('div');
    const now = new Date();
    timeSpan.className = 'timestamp';
    timeSpan.textContent = `Added: ${now.toLocaleString()}`; // e.g. "Added: 4/10/2025, 2:30 PM"

    // Status dropdown
    const statusDropdown = document.createElement('select');
    const statuses = ['Not Started', 'In Progress', 'Completed'];
    statuses.forEach(status => {
        const option = document.createElement('option');
        option.value = status;
        option.textContent = status;
        statusDropdown.appendChild(option);
    });

    // Apply initial class based on 'Not Started'
    const statusLabel = document.createElement('span');
    statusLabel.classList.add('status', 'not-started');
    statusLabel.textContent = 'Not Started';

    // Update status when dropdown changes
    statusDropdown.onchange = function () {
        const selectedStatus = statusDropdown.value;
        statusLabel.textContent = selectedStatus;

        // Remove previous classes and apply new one based on status
        statusLabel.classList.remove('not-started', 'in-progress', 'completed');
        if (selectedStatus === 'Not Started') {
            statusLabel.classList.add('not-started');
        } else if (selectedStatus === 'In Progress') {
            statusLabel.classList.add('in-progress');
        } else if (selectedStatus === 'Completed') {
            statusLabel.classList.add('completed');
        }
    };

    // Append elements to list item
    li.appendChild(taskSpan);
    li.appendChild(statusDropdown);
    li.appendChild(statusLabel);
    li.appendChild(timeSpan);

    // Append the list item to the task list
    document.getElementById('taskList').appendChild(li);

    // Clear input field
    input.value = '';
}

