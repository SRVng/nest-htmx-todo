export enum TodoStatus {
  NOT_STARTED = 0,
  IN_PROGRESS = 1,
  DONE = 2,
}

export class Todo {
  id: string;
  name: string;
  status: TodoStatus;
}
