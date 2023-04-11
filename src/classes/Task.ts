export enum STATUS {
  CONCEPT = "concept",
  READY = "ready",
  DOING = "doing",
  COMPLETED = "completed",
}

export class Task {
  constructor(
    public title: string = '',
    public desc: string = '',
    public status: STATUS = STATUS.CONCEPT,
    public readonly id: number = Math.floor(Math.random() * 250)
  ) {}
}
