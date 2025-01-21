import { updateTasksUI } from "./createTask"

export function loadTaskByProjectName(tasks, project) {
  let loadedTasks = tasks.filter(task => task.project === project)
  updateTasksUI(loadedTasks)
}