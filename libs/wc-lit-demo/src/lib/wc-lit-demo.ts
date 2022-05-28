import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ui-lit-demo')
export class UILitDemo extends LitElement {
  @property()
  version = 'STARTING';

  override render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-lit-demo': UILitDemo;
  }
}