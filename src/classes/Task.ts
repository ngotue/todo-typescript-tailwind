export enum STATUS {CONCEPT = 'concept' , READY ='ready' , DOING = 'doing' , COMPLETED = 'completed'}

export class Task {
    constructor(public id: number = Math.random()*250, private title: string, private desc: string, public status: STATUS){}
}