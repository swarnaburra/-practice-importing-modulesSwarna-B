const path = require("path");
const taskManager = require("./taskManager");
const fileHandler = require("./fileHandler");

// File path for storing tasks
const filePath = path.join(__dirname, "tasks.json");

// Load existing tasks
let tasks = fileHandler.loadTasks(filePath);

// Add new tasks
taskManager.addTask(tasks, "Learn Node.js");
taskManager.addTask(tasks, "Practice modular programming");

// List tasks
taskManager.listTasks(tasks);

// Save tasks back to file
fileHandler.saveTasks(filePath, tasks);
