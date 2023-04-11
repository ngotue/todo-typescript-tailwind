import { STATUS, Task } from "./Task"

export class DataBase {
    private static storage: Storage = localStorage

    private constructor(){}

    static getFromStorage(status: STATUS): Task[] | null{
        const datas = DataBase.storage.getItem(status)
        return datas ? JSON.parse(datas) : null
    }

    static addToStorage(task: Task) {
        const datas = this.getFromStorage(task.status)
        if(datas) {
            datas.push(task)
            DataBase.storage.setItem(task.status, JSON.stringify(datas))
        }
    }

    static removeTask(task: Task){
        const datas = this.getFromStorage(task.status)
        if(datas){
            const taskToRemove = datas.filter(d => d.id === task.id)
            if(taskToRemove) datas.splice(datas.indexOf(taskToRemove[0]), 1)
        }
    }
}