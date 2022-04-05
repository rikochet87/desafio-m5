const piedra = require("url:../../images/piedra.png");

export function initPiedra(){
    class MovePiedra extends HTMLElement {
        shadow = this.attachShadow({mode: 'open'});
        constructor() { 
          super();
        }
        
        connectedCallback() {
            this.render();
            
          }



        render(){
            let style = document.createElement('style');
            style.textContent = `
            *{
                box-sizing: border-box;
            }

            .img{
                width:100%;
                height: 190px;
                cursor: pointer;
            }
            @media (min-width: 769px) {
                 .img{
                width:100%;
                height: 250px;
                
            }
            .img:hover {
                height: 300px;
              }
            }
            
            
            .container{
                width:100%;
                
            }
            
            `;
            this.shadow.appendChild(style);

            let div = document.createElement("div")
            div.classList.add("conteiner")

            div.innerHTML  = `
                <div class="move-container">
                    <div>
                        <img src=${piedra} class="img" who="piedra">
                    </div>
                
                
                </div>
            
            `
            
            

            this.shadow.appendChild(div)
        }
      }
      customElements.define('move-piedra', MovePiedra);

}