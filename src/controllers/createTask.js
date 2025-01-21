import { task } from "../models/task";
import { beautifyDate } from "../helpers/utils";
import { loadTaskByProjectName } from "./loadTasks";
import { selectedProject } from "./createProject";

export let allTasks = []

export function createNewTask() {
  let project = document.querySelector('#projects-list').value
  let title = document.querySelector('#task-title').value
  let priority = document.querySelector('#task-priority').value
  let desc = document.querySelector('textarea#task-desc').value
  let dueDate = document.querySelector('input#task-dueDate').value
  dueDate = beautifyDate(dueDate)
  if(project && title && dueDate.day) {
    let newTask = new task(project, title, desc, dueDate, priority)
    document.querySelector('#task-title').value = ''
    document.querySelector('textarea#task-desc').value = ''
    allTasks.push(newTask)
    loadTaskByProjectName(allTasks, selectedProject)
  }
}

export function updateTasksUI(tasks) {
  const tasksUI = document.querySelector('.tasks ul')
  tasksUI.innerHTML = ''
  for(let i = 0; i < tasks.length; i++) {
    tasksUI.innerHTML += `
      <li class="task ${tasks[i].priority}" data-project="${tasks[i].project}">
        <input type="checkbox">
        <div>
          <span class="task-title">${tasks[i].title}</span>
          <span class="task-due">${tasks[i].dueDate.day} ${tasks[i].dueDate.month}</span>
        </div>
      </li>
    `
  }
}