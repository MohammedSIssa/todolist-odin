import { loadTaskByProjectName } from "./loadTasks"
import { allTasks } from "./createTask"

export let allProjects = []

export let selectedProject = ''

const projectsUI = document.querySelector('.projects')
const projectSelect = document.querySelector('select#projects-list')

export function createNewProject() {
  let name = document.querySelector('#project-name').value
  if(name) {
    allProjects.push(name)
    document.querySelector('#project-name').value = ''
    updateProjectsUI(allProjects)
  }
}

export function updateProjectsUI(projects){
  projectsUI.innerHTML = ""
  projectSelect.innerHTML = ""
  for(let i = 0; i < projects.length; i++) {
    projectsUI.innerHTML +=
    `
    <button class="project" data-project="${projects[i]}">
      ${projects[i]}
    </button>
    `
    projectSelect.innerHTML += 
    `
      <option>${projects[i]}</option>
    `
  }
  handleProjectClicks()
}

export function handleProjectClicks() {
  let projectsButtons = document.querySelectorAll('button.project')
  for(let i = 0; i < projectsButtons.length; i++) {
    projectsButtons[i].addEventListener('click', () => {
      selectedProject = projectsButtons[i].getAttribute('data-project')
      loadTaskByProjectName(allTasks, selectedProject)
    })
  }
}
