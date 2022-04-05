import { state } from "../../state";

function cpuPlayed() {
    const numberRandom = Math.floor((Math.random() * (4 - 1) + 1) - 1);
    const chose = ["piedra", "papel", "tijeras"];
    const randomChose = chose[numberRandom];
    return randomChose;
}


export function initPlay(params) {

    function pcImg(param) {
        if (param == "piedra") {
            piedraPc.style.display = "inherit";

        } else if (param == "papel") {
            papelPc.style.display = "inherit";

        } else if (param == "tijeras") {
            tijerasPc.style.display = "inherit";

        }

    }


    const style = document.createElement("style");
    style.innerHTML = `
            *{
                box-sizing: border-box;
            }
            .container{
                width:100%;
                display:flex;
                justify-content: center;
            }
            .counter{
                color:red;
                margin-top:20vh;
                width:15rem;  
            }
    
            .move-cont{
                position: fixed;
                bottom: -40px;
            }
            .papel{
                
            }
            .piedra{
                
                
            }
            .tijeras{
                
            }
            .move-container{
                display:flex;
                position: fixed;
                bottom: 10px;
                height: 150px;
                width:100%;
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
            .mover{
                margin-top:200px;
            }  

            .selected{
                display:flex;
                width:100%;
                justify-content: center;
                height: 200px;
                position: fixed;
                bottom: 0;
            }

            .move-pc{
                position: fixed;
                top: 0px;
                left: 35%;
                transform: rotate(180deg);
                display:none;
            }
            @media (min-width: 769px) {
                .move-pc{
                    left:45%
                }
            }
            
                
            
            .pcAnimation{
                animation-duration: 3s;
                animation-name: slidein;
              }
              
              @keyframes slidein {
                from {
                    margin-bottom: 100px;
                    height: 50px;
                }
              
                to {
                  
                  margin-top: 34%;
                  height: 50px;
                }
            }

            @media (min-width: 769px) {
                .pcAnimation{
                    animation-duration: 3s;
                    animation-name: slidein;
                  }
                  
                  @keyframes slidein {
                    from {
                        margin-bottom: 100px;
                        height: 50px;
                    }
                  
                    to {
                      
                      margin-top: 10%;
                      height: 50px;
                    }
                }
            }

            .user-move{
                position: fixed;
                bottom: 0;
                left: 35%;
                height: 350px;
                
                display:none;
                
            }
            @media (min-width: 769px) {
                .user-move{
                    left: 45%;
                }
            }
            .userAnimation{
                animation-duration: 3s;
                animation-name: toTop;
              }
              
              @keyframes toTop {
                from {
                    margin-top: 60%;
                    height: 100px;
                }
              
                to {
                    margin-bottom: 140px;
                    height: 50px;
                  
                }
              }
              @media (min-width: 769px) {
                .userAnimation{
                    animation-duration: 3s;
                    animation-name: toTop;
                  }
                  
                  @keyframes toTop {
                    from {
                        margin-top: 60%;
                        height: 100px;
                    }
                  
                    to {
                        margin-bottom: 160px;
                        height: 50px;
                      
                    }
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
    `;





    const div = document.createElement("div")
    div.innerHTML = `
        <div class="container">
                <div  class="counter"><component-counter></component-counter></div>
        </div>  
        
        

        <div class="desktop"><div class="move-container">
                <div class="papel"><move-papel></move-papel></div>
                <div class="piedra"><move-piedra></move-piedra></div>
                <div class="tijeras" "><move-tijeras></move-tijeras></div>
        </div></div>


                <div class="user-move user-papel userAnimation"><move-papel></move-papel></div>
                <div class="user-move user-piedra userAnimation"><move-piedra></move-piedra></div>
                <div class="user-move user-tijeras userAnimation"><move-tijeras></move-tijeras></div>
                
                <div  class="move-pc papel-pc pcAnimation"><move-papel></move-papel></div>
                <div  class="move-pc piedra-pc pcAnimation"><move-piedra></move-piedra></div>
                <div class="move-pc tijeras-pc pcAnimation"><move-tijeras></move-tijeras></div>
               
        
    `;
    div.appendChild(style);


    const tijerasPc: any = div.querySelector(".tijeras-pc");
    const piedraPc: any = div.querySelector(".piedra-pc");
    const papelPc: any = div.querySelector(".papel-pc");

    const counter: any = div.querySelector(".counter");

    const tijeras: any = div.querySelector(".tijeras");
    const piedra: any = div.querySelector(".piedra");
    const papel: any = div.querySelector(".papel");

    const userTijeras: any = div.querySelector(".user-tijeras");
    const userPapel: any = div.querySelector(".user-papel");
    const userPiedra: any = div.querySelector(".user-piedra");





// solo me muestra la imagen de cuando pierdo, incluso cuando gano



    papel.addEventListener("click", (e: any) => {
        counter.style.display = "none";
        piedra.style.display = "none";
        tijeras.style.display = "none";
        e.target.style.display = "none";
        userPapel.style.display = "inherit";
        let cpuChose: any = cpuPlayed();
        state.addCurrentPlay("papel", cpuChose);
        setTimeout(() => {
            if (state.getState().currentGame.jugadaPc == "piedra") {
                params.goTo("/result/win");

            } else if (state.getState().currentGame.jugadaPc == "tijeras") {
                params.goTo("/result/loose");

            } else {
                params.goTo("/result/tie");

            }
        }, 3000);
        pcImg(cpuChose);
    })


    piedra.addEventListener("click", (e: any) => {
        papel.style.display = "none";
        tijeras.style.display = "none";
        e.target.style.display = "none";
        counter.style.display = "none";
        userPiedra.style.display = "inherit";
        let cpuChose: any = cpuPlayed();
        state.addCurrentPlay("piedra", cpuChose);
        setTimeout(() => {
            if (state.getState().currentGame.jugadaPc == "tijeras") {
                params.goTo("/result/win");
            } else if (state.getState().currentGame.jugadaPc == "papel") {
                params.goTo("/result/loose");
            } else {
                params.goTo("/result/tie");
            }
        }, 3000);
        pcImg(cpuChose);
    })


    tijeras.addEventListener("click", (e: any) => {
        papel.style.display = "none";
        piedra.style.display = "none";
        e.target.style.display = "none";
        counter.style.display = "none";
        userTijeras.style.display = "inherit";
        let cpuChose: any = cpuPlayed()
        state.addCurrentPlay("tijera", cpuChose)
        setTimeout(() => {
            if (state.getState().currentGame.jugadaPc == "papel") {
                params.goTo("/result/win");
            } else if (state.getState().currentGame.jugadaPc == "piedra") {
                params.goTo("/result/loose");
            } else {
                params.goTo("/result/tie");
            }
        }, 3000);
        pcImg(cpuChose);
    })


    setTimeout(() => {
        if (state.getState().currentGame.jugadaMia == "") {
            params.goTo("/rules");
        }
    }, 4000);

    return div;
}
