export enum STATUS {
  CONCEPT = "concept",
  READY = "ready",
  DOING = "doing",
  COMPLETED = "completed",
}

export class Task {
  readonly id: number = Math.floor(Math.random() * 250);
  constructor(
    public title: string,
    public desc: string,
    public status: STATUS
  ) {}
}
