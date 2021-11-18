import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { TaskEntity } from './task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: InMemoryDBService<TaskEntity>) {
  }

  @Get()
  getAllTasks(): TaskEntity[] {
    return this.taskService.getAll();
  }

  @Get(':id')
  getTask(@Param('id') id: string): TaskEntity {
    return this.taskService.get(id);
  }

  @Post('')
  addTask(@Body() entity: TaskEntity) {
    return this.taskService.create(entity);
  }
}
