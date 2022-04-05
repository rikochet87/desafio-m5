const memeGanar = require("url:../../images/ganaste.png")

const memeEmpate = require("url:../../images/empate.png")

const memePerdi = require("url:../../images/perdiste.png")

export function initStar (){
    class Meme extends HTMLElement {
        constructor() {
          super();
        }
        connectedCallback(){
            this.render()
        }
        render(){
            const variant = this.getAttribute("variant")
            var style = document.createElement('style');
            style.textContent = `
            *{
                box-sizing: border-box;
            }
          
            .centrado{
                position: absolute;
                top: 50%;
                left: 50%;
            }

            `;
            var content = this.textContent

            var shadow = this.attachShadow({mode: 'open'});
            shadow.appendChild(style)

            var memes = ""
            if (variant == "win"){
                memes = memeGanar
            }else if (variant == "loose"){
                memes = memePerdi
            } else {memes = memeEmpate}


            var div = document.createElement("div")
            div.innerHTML = `<div class="contenedor">

            <div class="memecito">
            
            <img src=${memes } />

            </div>
        
            <div class="centrado">${content}</div>
          </div>`
            
            
            
            

            shadow.appendChild(div)
            
        }
      }
      customElements.define('component-meme', Meme);}