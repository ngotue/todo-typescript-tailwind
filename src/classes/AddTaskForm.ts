import { DataBase } from "./DataBase"
import { Modal } from "./Modal"
import { Task } from "./Task"

export class AddTaskForm {
    constructor(){
    }

    addTask(task: Task) {
        DataBase.addToStorage(task)
    }
}

