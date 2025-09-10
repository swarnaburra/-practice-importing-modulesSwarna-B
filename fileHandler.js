const fs = require("fs");

// Save tasks to a file
/*
fs.writeFileSync Creates a new json file if it doesnt exist or updates it
JSON.stringify(tasks, null, 2) turns your tasks array into JSON format with nice spacing.
*/
function saveTasks(filePath, tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2)); 
  console.log("Tasks saved successfully!");
}
// Load tasks from a file
function loadTasks(filePath) {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return []; // Return empty if file doesn’t exist
  }
}
// Export functions
module.exports = { saveTasks, loadTasks };