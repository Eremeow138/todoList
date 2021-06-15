import { BehaviorSubject, Observable } from 'rxjs';
import { Status, Task, ToDoService } from '../../api/app-api';

function changeTaskById(
  rawValue: Task[],
  targetId: string,
  status: Status,
): Task[] {
  return rawValue.map(item => {
    const { id, description } = item;
    return item.id === targetId ? { id, description, status } : item;
  });
}

function filterById(rawValue: Task[], idToRemove: string): Task[] {
  return rawValue.filter(({ id }) => id !== idToRemove);
}

export class TodoService implements ToDoService {
  private readonly tasks: BehaviorSubject<Task[]>;

  private idCounter: number;

  constructor() {
    this.tasks = new BehaviorSubject<Task[]>([]); // вот тут не понял
    this.idCounter = 0;
  }

  getAllTasks(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  addTask(description: string): void {
    const currentTasks = this.tasks.getValue();
    this.tasks.next([
      ...currentTasks,
      { id: `${this.idCounter++}`, description, status: Status.InProgress },
    ]);
  }

  removeTask(id: string): void {
    const currentTasks = this.tasks.getValue();
    this.tasks.next(filterById(currentTasks, id));
  }

  changeStatus(targetId: string, newStatus: Status): void {
    const currentTasks = this.tasks.getValue();
    this.tasks.next(changeTaskById(currentTasks, targetId, newStatus));
  }
}
