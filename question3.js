let tasks = []; //using array we will store the tasks here
let taskID = 1; // Auto-incrementing ID for each task


//Add new task
function addTask(name, description) { //additional field for each task 
const task = { 
    id: taskID++, 
    name, 
    description 
};
tasks.push(newTask);
console.log("Task added:", task); //it is now added in the array
}


//View all tasks
function viewAllTasks() {
console.log("Tasks List:");
tasks.forEach(task => console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`));
}

//Update a task
function updateTask(id, newName, newDescription) {
const task = tasks.find(t => t.id === id);
if (task) {
task.name = newName;
task.description = newDescription;
console.log("Task updated!", task);
} else {
console.log("Task not found!");
}
}


//Delete a task
function deleteTask(id) {
const index = tasks.findIndex(t => t.id === id);
if (index !== -1) {
const removedTask = tasks.splice(index, 1);
console.log("Task deleted:", removedTask[0]);
} else {
console.log("Task not found!");
}
}