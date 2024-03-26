document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Get the value of the input field for task description
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    // Create a new list item element containing the task description
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;

    // Append the new list item to the unordered list
    const taskList = document.getElementById("tasks");
    taskList.appendChild(newTask);

    // Reset the input field
    taskInput.value = "";

    // Optional: Focus back on the input field for convenience
    taskInput.focus();
  });
});
