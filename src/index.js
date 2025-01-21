import './styles/global.css'
import './styles/mobile.css'
import './styles/large.css'

// Adding task logic
import { createNewTask } from './controllers/createTask'

const toggleTaskPopup = document.querySelector('button.create-task')
const taskPopup = document.querySelector('.new-task-popup')
const cancelTask = document.querySelector('button.cancel-task')

const createTaskButton = document.querySelector('button.add-task')

createTaskButton.addEventListener('click', (e) => {
  e.preventDefault()
  createNewTask()
  taskPopup.classList.add('hidden')
})

toggleTaskPopup.addEventListener('click', () => {
  taskPopup.classList.remove('hidden')
})

cancelTask.addEventListener('click', (e) => {
  e.preventDefault()
  taskPopup.classList.add('hidden')
})

// Adding Project logic
import { createNewProject } from './controllers/createProject'

const toggleProjectPopup = document.querySelector('button.create-project')
const projectPopup = document.querySelector('.new-project-popup')
const cancelProject = document.querySelector('button.cancel-project')

const createProjectBtn = document.querySelector('button.add-project')

createProjectBtn.addEventListener('click', (e) => {
  e.preventDefault()
  createNewProject()
  projectPopup.classList.add('hidden')
})

toggleProjectPopup.addEventListener('click', () => {
  projectPopup.classList.remove('hidden')
})

cancelProject.addEventListener('click', (e) => {
  e.preventDefault()
  projectPopup.classList.add('hidden')
})
