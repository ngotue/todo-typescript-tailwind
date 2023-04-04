export enum STATUS {CONCEPT , READY , DOING , COMPLETED}



// export type Status = "CONCEPT" | "READY" | "DOING" | "COMPLETED"

export class AddTaskForm {
    constructor(id: number = Math.random()*250, private title: string, private desc: string, private status: STATUS){}
}

