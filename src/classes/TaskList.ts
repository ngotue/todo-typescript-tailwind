import { STATUS, Task } from "./Task";
import { Item } from "./Item";

export class TaskList {

  private container: HTMLElement

  constructor(private tasks: Task[], private status: STATUS) {
    this.container = document.querySelector(`#${this.status}`)
    this.render()
  }

  render() {
    this.tasks.forEach((task) => {
        const newItem = new Item(task)
        newItem.render(this.container)
    })
  }
}
