import { prepareTemplate, setStylesToShadowRoot } from '../../api/app-api';
import { taskTemplate } from './template/TaskTemplate';

export class TaskComponent extends HTMLElement {
  static componentName = 'task-item';

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    setStylesToShadowRoot(shadowRoot, '.task-item{color: green;}');
    prepareTemplate(shadowRoot, taskTemplate);
  }
}
