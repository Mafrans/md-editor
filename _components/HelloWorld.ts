import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("hello-world")
class HelloWorld extends LitElement {
  static styles = css`
    b {
      color: red;
    }
  `;

  @property()
  name = "World";

  render() {
    return html`Hello <b>${this.name}</b>!`;
  }
}

customElements.define("x-hello-world", HelloWorld);
