import { createElementFromString } from '../utils/functions'
import { DataBase } from './DataBase'
import { Modal } from './Modal'
import {Task} from './Task'

const itemTemplate = require('../templates/item.html').default

export class Item {
    private template: HTMLDivElement
    private deleteButton : HTMLButtonElement
    private title: HTMLHeadingElement

    constructor(private task: Task){
        this.template = createElementFromString(itemTemplate)
        this.initActions()
        this.template.querySelector('h1')!.innerHTML = this.task.title
        this.template.querySelector('p')!.innerHTML = this.task.desc
    }

    private initActions() {
        this.deleteButton = this.template.querySelector('button[delete]')
        this.title = this.template.querySelector('h1')

        this.deleteButton.addEventListener('click', (e) => {
            DataBase.delete(this.task)
            alert(`task ${this.task.title} was removed`)
            location.reload()
        })
        this.title.addEventListener('click', () => {
            const modal = new Modal('#modal-container', this.task)
            modal.openModal()
        })

    }

    render(parentElement: HTMLElement) {
        return parentElement.appendChild(this.template)
    }
}