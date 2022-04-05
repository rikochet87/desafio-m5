
import { state } from "../../state"



export function initRules(params) {

    const style = document.createElement("style")
    style.innerHTML = `
        *{
            box-sizing: border-box;
        }
        body{
            margin:0;
        }

        .container{
            
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: baseline;
            gap:20px;
            padding:20px;
            height: 100vh;
        }
        @media (min-width: 769px) {
            .container{margin-top:10%;}
        }

        .mostrar{
            display:none;
        }
        .buttom-container{
            width:100%;
            max-width:404px;
            
        }
        .text-container{
            align-items: center;
            justify-content: center;
            padding:40px;
            max-width:317px;
            color: #FAFAFA
        }
        @media (min-width: 769px) {
            .text-container{
                padding:0;
                max-width:317px;
            }
        }

        .move-container{
            display:flex;
            width:100%;
            position: fixed;
            bottom: 10px;
            height: 150px;
            justify-content: center;
        }
        @media (min-width: 769px) {
            .move-container{
                height: 21.277481vh;
                width:500px;
                padding:0;
                gap:67px;

            }
        }

        @media (min-width: 769px) {
            .hand{
                width:100%;
            }
        }
        .desktop{}
        @media (min-width: 769px) {
            .desktop{
                display:flex;
                width:100%;
                
                justify-content: center;
            }
        }
    `

    const div = document.createElement("div")

    div.innerHTML = `
        <div class="container">
            <div class="text-container">
                 <component-text variant="body">Presioná jugar
                 y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
                </component-text>
            </div>
            <div class="buttom-container">
                <component-button class="jugar">¡Jugar!</component-button>
            </div>    
        </div>     
        <div class="desktop"> <div class="move-container">
                <div class="hand"><move-papel></move-papel></div>
                <div class="hand"><move-piedra></move-piedra></div>
                <div class="hand"><move-tijeras></move-tijeras></div>
        </div></div>
    `



    const next = div.querySelector(".jugar")
    next.addEventListener("click", () => {
        params.goTo("/play")
    })
    div.appendChild(style)
    return div;
}
