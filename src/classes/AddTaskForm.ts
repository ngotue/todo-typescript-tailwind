import { Modal } from "./Modal"
import { Task } from "./Task"

export class AddTaskForm {
    constructor(private darkenComponent: HTMLElement){
        this.openModal(this.darkenComponent)
    }

    private openModal(darkenComponent: HTMLElement) {
        darkenComponent.classList.add('brightness-50')
        darkenComponent.append(Modal.getModal())
    }

    addTask(task: Task) {
        
    }
}

