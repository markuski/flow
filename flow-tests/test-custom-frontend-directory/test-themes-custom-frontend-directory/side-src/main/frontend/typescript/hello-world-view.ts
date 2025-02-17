import '@vaadin/text-field';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
// @ts-ignore
import styles from './hello-world-view.css?inline';


@customElement('hello-world-view')
export class HelloWorldView extends LitElement {
  name: string = '';

  static styles = [styles];

  render() {
    return html`
      <vaadin-text-field label="Your name" @value-changed="${this.nameChanged}"></vaadin-text-field>
    `;
  }
  nameChanged(e: CustomEvent) {
    this.name = e.detail.value;
  }
}
