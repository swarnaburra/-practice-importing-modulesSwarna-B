// Function to add a task
function addTask(tasks, task) {
  tasks.push(task);
  console.log(`Task "${task}" added!`);
}
// Function to list all tasks
function listTasks(tasks) {
  console.log("Your tasks:");
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

// Export functions
module.exports = { addTask, listTasks };