var tasks =[]; 

var taskStatus = { 
    active:'active', 
    completed: 'completed'
}; 

function Task (id, name, status) { 
    this.id = id; 
    this.name = name; 
    this.status = status;
} 

function addTaskElement (tasks) { 
    var listEl = document.getElementById('active-list'); 
    var taskEl = document.createElement('li'); 
    var textEl = document.createTextNode(tasks.name); 

    taskEl.setAttribute('id', tasks.id); 

    taskEl.appendChild(textEl); 

    listEl.appendChild(taskEl);
} 


function addTask (event) { 
    var inputEl = document.getElementsById('input-task'); 
    if (inputEl.value != ''){ 
        var id = 'item-' + task.length; 

        var task = new Task(id, inputEl.value, taskStatus.active); 
        tasks.push(task); 

        addTaskElement(task); 

        inputEl.value = '';
    }
} 


function completeTask (event) { 
    var taskEl = event.target; 
    var id = taskEl.id; 

    for (var i = 0; i < tasks.length; i++) { 
        if (task[i].id === id){ 
            tasks[i].status = taskStatus.completed; 
            break;
        }
    } 

    taskEl.remove(); 
    document.getElementById('completed-list').appendChild(taskEl);
} 

function chickButton (event) { 
    if (event.keyCode === 13) { 
        document.getElementById('add-task').click();
    }
} 

function init () { 
    document.getElementById('add-task').onclick = addTask; 

    document.getElementById('active-list').onclick = completeTask; 

    document.getElementById('input-task').onkeypress = chickButton;
} 

init();