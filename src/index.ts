import 'normalize.css';
import { Status, Task } from './api/app-api';
import { TaskListComponent } from './components/task-list/TaskListComponent';
import { TaskComponent } from './components/task/TaskComponent';
import { TodoService } from './services/todo-service/todo-service';

customElements.define(TaskListComponent.componentName, TaskListComponent);
customElements.define(TaskComponent.componentName, TaskComponent);

const todoService = new TodoService();

// todoService
//   .getAllTasks()
//   .subscribe((taskList: Task[]) => console.log(taskList));

// todoService.addTask('something 1');
// todoService.addTask('something 2');
// todoService.addTask('something 3');
// todoService.addTask('something 4');
// todoService.addTask('something 5');

// todoService.changeStatus('2', Status.Done);

// todoService.removeTask('3');
