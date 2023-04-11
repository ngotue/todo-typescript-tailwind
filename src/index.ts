import { DataBase } from './classes/DataBase'
import { Modal } from './classes/Modal'
import { STATUS } from './classes/Task'
import {TaskList} from './classes/TaskList'

const button = document.querySelector('button')


button.addEventListener('click', () => {
    const modal = new Modal('#modal-container')
    modal.openModal()
})

Object.values(STATUS).forEach(value => {
    new TaskList(DataBase.get(value) || [], value)
})
