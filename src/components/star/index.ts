const starGanar = require("url:../../images/ganaste.png");

const starEmpate = require("url:../../images/empate.png");

const starPerdi = require("url:../../images/perdiste.png");

export function initStar() {
  class Meme extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const variant = this.getAttribute("variant");
      var style = document.createElement("style");
      style.textContent = `
            *{
                box-sizing: border-box;
            }
            .star-cartel{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(style);

      var star = "";
      if (variant == "win") {
        star = starGanar;
      } else if (variant == "loose") {
        star = starPerdi;
      } else {
        star = starEmpate;
      }

      var div = document.createElement("div");
      div.innerHTML = `<div class="contenedor">

            <div class="star-cartel">
            <img src=${star} />
            </div>
            
          </div>`;

      shadow.appendChild(div);
    }
  }
  customElements.define("component-meme", Meme);
}
