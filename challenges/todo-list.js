let tasks = [];

function showTasks() {
  console.clear();
  console.log("To-Do List:");
  tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
}

function addTask() {
  const task = prompt("Enter a new task:");
  if (task) {
    tasks.push(task);
    showTasks();
  }
}

function removeTask() {
  showTasks();
  const index = parseInt(prompt("Enter the number of the task to remove:")) - 1;
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    showTasks();
  } else {
    console.log("Invalid task number.");
  }
}


while (true) {
  const action = prompt("Choose: (1) Add Task (2) Remove Task (3) Exit");
  if (action === "1") addTask();
  else if (action === "2") removeTask();
  else if (action === "3") break;
  else console.log("Invalid option.");
}
