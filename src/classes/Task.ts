export enum STATUS {
  CONCEPT = "concept",
  READY = "ready",
  DOING = "doing",
  COMPLETED = "completed",
}

export class Task {
  readonly id: number = Math.floor(Math.random() * 250);
  constructor(
    private title: string,
    private desc: string,
    public status: STATUS
  ) {}
}
