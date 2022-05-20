const tijera = require("url:../../images/tijeras.png");

customElements.define(
  "hand-scissor",
  class Piedra extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const style = document.createElement("style");
      this.shadow.innerHTML = `
            <img class="hand-scissor" src="${tijera}">
        `;

      style.innerHTML = `
            .hand-scissor {
              height: 100%;
              width:100%
            }
        `;

      this.shadow.appendChild(style);
    }
  }
);
