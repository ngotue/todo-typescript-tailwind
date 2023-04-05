import { STATUS, Task } from "./Task"

export class DataBase {
    private instance: DataBase
    private static storage: Storage = localStorage

    private constructor(){}

    getDataBase(): DataBase {
        if(!this.instance) {
            this.instance = new DataBase()
        }
        return this.instance
    }

    getFromStorage(status: STATUS): string | null{
        return DataBase.storage.getItem(status)
    }

    addToStorage(task: Task): void {
        const oldDB = this.getFromStorage(task.status)
        if(oldDB) {
            const oldTask = JSON.parse(oldDB) as Task[]
            oldTask.push(task)
            DataBase.storage.setItem(task.status, JSON.stringify(oldTask))
        }
    }
}