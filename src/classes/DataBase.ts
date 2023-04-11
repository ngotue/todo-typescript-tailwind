import { STATUS, Task } from "./Task"

export class DataBase {
    private static storage: Storage = localStorage

    private constructor(){}

    static get(status: STATUS): Task[] | null{
        const datas = DataBase.storage.getItem(status)
        return datas ? JSON.parse(datas) : null
    }

    static setStorage(status: STATUS, tasks: Task[]) {
        DataBase.storage.setItem(status, JSON.stringify(tasks))
    }

    static upsert(task: Task) {
        let datas : Task[] | null
        datas = this.get(task.status)

        if(!datas) datas = []

        let existed = false

        datas = datas.map(t => {
            if(t.id === task.id) {
                existed = true
                return task
            }
            return t
        })
        
        if(!existed) datas.push(task)
        DataBase.storage.setItem(task.status, JSON.stringify(datas))
    }

    static delete(task: Task){
        const datas = this.get(task.status)
        if(datas){
            const taskToRemove = datas.find(d => d.id === task.id)
            console.log(taskToRemove)
            if(taskToRemove) {
                datas.splice(datas.indexOf(taskToRemove), 1)
                this.setStorage(task.status, datas)
            }
        }
    }
}