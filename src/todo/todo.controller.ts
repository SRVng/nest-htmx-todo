import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Headers,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll(@Headers('accept') accept: string) {
    switch (accept) {
      case 'text/html':
        return this.todoService.findAllAsHtml();
      default:
        return this.todoService.findAll();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const todo = this.todoService.findOne(id);

    if (!todo) throw new NotFoundException(`${id} is not found`);
    return todo;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
