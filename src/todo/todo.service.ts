import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoStatus } from './entities/todo.entity';
import { nanoid } from 'nanoid';

@Injectable()
export class TodoService {
  private todoList: Todo[] = [];

  create(createTodoDto: CreateTodoDto) {
    return this.todoList.push({
      ...createTodoDto,
      id: nanoid(),
      status: TodoStatus.IN_PROGRESS,
    });
  }

  findAll() {
    return this.todoList;
  }

  findAllAsHtml(): string {
    return this.todoList
      .map(
        (td) => `
      <li>${td.name}</li>
    `,
      )
      .join('');
  }

  findOne(id: string): Todo {
    return this.todoList.find((todo) => todo.id === id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    // this.todoList.find((todo) => todo.id === id);
    return `This action updates a #${id} todo`;
  }

  remove(id: string) {
    return `This action removes a #${id} todo`;
  }
}
