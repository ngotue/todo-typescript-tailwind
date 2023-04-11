import { DataBase } from './classes/DataBase'
import { Modal } from './classes/Modal'
import { STATUS } from './classes/Task'
import {TaskList} from './classes/TaskList'

const button = document.querySelector('button')

const modal = new Modal('#modal-container')

button.addEventListener('click', () => {
    modal.openModal()
})

Object.values(STATUS).forEach(value => {
    new TaskList(DataBase.getFromStorage(value) || [], value)
})
