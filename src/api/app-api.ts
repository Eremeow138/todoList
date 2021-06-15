import { Observable } from 'rxjs';

export interface Task {
  id: string;
  description: string;
  status: Status;
}

export enum Status {
  Done,
  InProgress,
  Refused,
}

export interface ToDoService {
  getAllTasks(): Observable<Task[]>;
  addTask(description: string): void;
  removeTask(id: string): void;
  changeStatus(id: string, status: Status): void;
}

export function setStylesToShadowRoot(
  instance: ShadowRoot,
  styles: string,
): void {
  const style = document.createElement('style');
  style.textContent = styles;
  instance.append(style);
}

export function prepareTemplate(
  shadowRoot: ShadowRoot,
  templateGenerator: () => string,
): void {
  const template = document.createElement('template');
  template.innerHTML = templateGenerator();

  shadowRoot.appendChild(template.content.cloneNode(true));
}
