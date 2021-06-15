import { prepareTemplate, setStylesToShadowRoot } from '../../api/app-api';
import { taskListTemplate } from './template/TaskListTemplate';

export class TaskListComponent extends HTMLElement {
  static componentName = 'task-list';

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    setStylesToShadowRoot(shadowRoot, '.task-list{color: red;}');
    prepareTemplate(shadowRoot, taskListTemplate);
  }
}
