import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
    private tasks = [
      {
        id: "1",
        title: "wefewrgf",
        isCompleted: false,
      },
      {
        id: "2",
        title: "wefgerghxccaww",
        isCompleted: true,
      }
    ]

    findAll() {
        return this.tasks;
    }

    findById(id: string) {
        const task = this.tasks.find(task => task.id === id);

        if(!task) {
            throw new NotFoundException('Task not found')
        }

        return task
    }

    create(dto: CreateTaskDto) {
        const {title} = dto;

        const newTask = {
            id: String(this.tasks.length + 1),
            title,
            isCompleted: false,
        }

        this.tasks.push(newTask);

        return this.tasks;
    }

    update(id: string, dto: UpdateTaskDto) {
        const {title, isCompleted} = dto
        const task = this.findById(id);

        task.title = title
        task.isCompleted = isCompleted

        return task
    }
}
