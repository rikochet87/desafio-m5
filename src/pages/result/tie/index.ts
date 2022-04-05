import {state} from "../../../state"


function counterWins (){
    const currentState = state.getState()
    const cpuContador = currentState.histoy.filter((e)=>{
    let contador = 0
    if (e == 0){
         contador++
    }
    return contador;
    })

    const myContador = currentState.histoy.filter((e)=>{
      let contador = 0
      if (e == 1){
          contador++
      }
        return contador;
    })

    let cpu = cpuContador.length
    let user = myContador.length
   
    return {
        user: user,
        pc: cpu
    }
}

export function initTie (params){
    
    const div = document.createElement("div")
    const style = document.createElement("style");
    style.innerHTML = `
            *{
                margin:0;
                
                box-sizing: border-box;
            }
            body {
                background-color: rgba(181 ,178 ,178, 0.6);
                
              }
            .container{
                background-color: white;
                display:flex;
                height: 217px;
                flex-direction: column;
                gap:10px;
                margin: 0 58px 0 58px;
                border:solid 10px black;
                justify-content: space-evenly;

            }
            @media (min-width: 769px) {
                .container{
                    width:404px;
                }}



            .h3-container{
                display:flex;
                width: 100%;
                flex-direction: column;
                justify-content: end;
                align-items: flex-end;
                text-align: end;


            }
            .h2-container{
                
            }
            .h2{
                text-align: center;
                font-size: 55px;
                font-family: 'Odibee Sans', cursive;;
                color:#000000;
            }

            .h3{
                text-align: center;
                font-size: 45px;
                font-family: 'Odibee Sans', cursive;;
                color:#000000;
            }
            .buttom-container{
                padding:20px;
            }
            @media (min-width: 769px) {
                .buttom-container{
                    
                    width:424px;
                }}
            .center{
                height: 100vh;
                display:flex;
                flex-direction: column;
                justify-content: center;

            }
            @media (min-width: 769px) {
                .desktop{
                    width:100%;
                    display:flex;
                    justify-content:center;
                }}
            
    `
    div.innerHTML = `
    <div class="center">
    <component-meme variant="tie"></component-meme>
    <div class="desktop"><div class="container">
            <h2 class="h2">Score<h2>
            <div class="h3-container">
                <h3 class="h3">Vos: ${counterWins().user}   </h3>
                <h3 class="h3">Maquína: ${counterWins().pc}   </h3>
            </div>
    </div></div>
    <div class="desktop"><div class="buttom-container"><component-button class="jugar">volver a jugar</component-button></div></div>
    </div>
    
                
    `
    
    div.appendChild(style)

    
    const next = div.querySelector(".jugar")
     next.addEventListener("click",()=>{
         params.goTo("/rules")
     }) 
    return div;
}