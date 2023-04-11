import { STATUS, Task } from "./Task";

const itemTemplate = require('../templates/item.html').default

export class TaskList {
  constructor(private tasks: Task[], private status: STATUS) {
    this.render()
  }

  private render() {
    const container = document.querySelector(`#${this.status}`) as HTMLDivElement
    
    this.tasks.forEach((task) => {
        const newItem = document.createElement('div')
        newItem.insertAdjacentHTML('afterbegin', itemTemplate)
        newItem.querySelector('h3')!.innerHTML = task.title
        newItem.querySelector('p')!.innerHTML = task.desc
        container.appendChild(newItem)
        console.log(newItem.innerHTML)
    })
  }
}
