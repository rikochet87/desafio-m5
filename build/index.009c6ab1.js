function n(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequire9acc;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){i[n]=e},e.parcelRequire9acc=o),o.register("27Lyk",(function(e,t){var i,o;n(e.exports,"register",(()=>i),(n=>i=n)),n(e.exports,"resolve",(()=>o),(n=>o=n));var a={};i=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)a[e[t]]=n[e[t]]},o=function(n){var e=a[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),o("27Lyk").register(JSON.parse('{"dZpbI":"index.009c6ab1.js","h5stw":"piedra.3535c2a2.png","hqVYS":"papel.7396d2a8.png","2BL3u":"tijeras.dcc90380.png","iTaEq":"ganaste.02c509d0.png","2w0Vc":"empate.c3ad56c4.png","eCOwJ":"perdiste.8a5f2862.png"}'));const a={data:{currentGame:{jugadaMia:"",jugadaPc:""},histoy:[]},listeners:[],init(){let n=localStorage.getItem("saved-state");null!==n?this.setState(JSON.parse(n)):this.setState({currentGame:{jugadaMia:"",jugadaPc:""},histoy:[]})},getState(){return this.data},setState(n){this.data=n;for(const n of this.listeners)n();localStorage.setItem("saved-state",JSON.stringify(n))},subscribe(n){this.listeners.push(n)},addCurrentPlay(n,e){const t={...this.getState(),currentGame:{jugadaMia:n,jugadaPc:e}};this.setState(t),this.whoWins({jugadaMia:n,jugadaPc:e})},whoWins(n){const e=this.getState(),t=["papel"==n.jugadaMia&&"piedra"==n.jugadaPc,"piedra"==n.jugadaMia&&"tijera"==n.jugadaPc,"tijera"==n.jugadaMia&&"papel"==n.jugadaPc].includes(!0),i=["papel"==n.jugadaPc&&"piedra"==n.jugadaMia,"piedra"==n.jugadaPc&&"tijera"==n.jugadaMia,"tijera"==n.jugadaPc&&"papel"==n.jugadaMia].includes(!0);1==t?(e.histoy.push(1),this.setState(e)):1==i&&(e.histoy.push(0),this.setState(e))}};function r(){const n=a.getState(),e=n.histoy.filter((n=>{let e=0;return 0==n&&e++,e})),t=n.histoy.filter((n=>{let e=0;return 1==n&&e++,e}));let i=e.length;return{user:t.length,pc:i}}function d(){const n=a.getState(),e=n.histoy.filter((n=>{let e=0;return 0==n&&e++,e})),t=n.histoy.filter((n=>{let e=0;return 1==n&&e++,e}));let i=e.length;return{user:t.length,pc:i}}function s(){return["piedra","papel","tijeras"][Math.floor(3*Math.random()+1-1)]}function c(){const n=a.getState(),e=n.histoy.filter((n=>{let e=0;return 0==n&&e++,e})),t=n.histoy.filter((n=>{let e=0;return 1==n&&e++,e}));let i=e.length;return{user:t.length,pc:i}}const l=[{path:/\/inicio/,handler:function(n){const e=document.createElement("style");e.innerHTML="\n        *{\n            box-sizing: border-box;\n        }\n        body{\n            margin:0;\n        }\n        .container{\n            display: flex;\n            width: 100%;\n            flex-direction: column;\n            align-items: center;\n            justify-content: baseline;\n            height: 100vh;\n            padding:20px;\n            gap:20px;\n        }\n        @media (min-width: 769px) {\n            .container {\n               \n                height: inherit;\n\n            }\n          }\n\n        .mostrar{\n            display:none;\n        }\n        .buttom-container{\n            width:100%;\n            max-width:404px;\n        }\n        .text-container{\n            font-size: 75px;\n            align-items: center;\n            justify-content: center;\n            padding:40px;\n            max-width:317px;\n            margin-top: -50px;\n            color: #009048;\n\n        }\n        .move-container{\n            display:flex;\n            width:100%;\n            position: fixed;\n            bottom: 10px;\n            height: 150px;\n            justify-content: center;\n            padding:0 5px;\n\n        }\n        @media (min-width: 769px) {\n            .move-container{\n                height: 21.277481vh;\n                width:500px;\n                padding:0;\n                gap:67px;\n\n            }\n        }\n        \n\n\n        @media (min-width: 769px) {\n            .hand{\n                width:100%;\n            }\n        }\n        .desktop{}\n        @media (min-width: 769px) {\n            .desktop{\n                display:flex;\n                width:100%;\n                \n                justify-content: center;\n            }\n        }\n        \n    ";const t=document.createElement("div");return t.innerHTML='\n        <div class="container">\n            <div class="text-container">\n                 <component-text variant="title">Piedra Papel ó Tijeras</component-text>\n            </div>\n            <div class="buttom-container">\n                <component-button class="jugar">¡Jugar!</component-button>\n            </div>  \n        </div>       \n        <div class="desktop"><div class="move-container">\n                <div class="hand "><move-papel></move-papel></div>\n                <div class="hand "><move-piedra></move-piedra></div>\n                <div class="hand "><move-tijeras></move-tijeras></div>\n        </div>        \n        </div>\n    ',t.querySelector(".jugar").addEventListener("click",(()=>{n.goTo("/rules")})),t.appendChild(e),t}},{path:/\/rules/,handler:function(n){const e=document.createElement("div");e.innerHTML='\n        <div class="container">\n            <div class="text-container">\n                 <component-text variant="body">Presioná jugar\n                 y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n                </component-text>\n            </div>\n            <div class="buttom-container">\n                <component-button class="jugar">¡Jugar!</component-button>\n            </div>    \n        </div>     \n        <div class="desktop"> <div class="move-container">\n                <div class="hand"><move-papel></move-papel></div>\n                <div class="hand"><move-piedra></move-piedra></div>\n                <div class="hand"><move-tijeras></move-tijeras></div>\n        </div></div>\n    ';const t=document.createElement("style");return t.innerHTML="\n        *{\n            box-sizing: border-box;\n        }\n        body{\n            margin:0;\n        }\n\n        .container{\n            \n            display: flex;\n            width: 100%;\n            flex-direction: column;\n            align-items: center;\n            justify-content: baseline;\n            gap:20px;\n            padding:20px;\n            height: 100vh;\n        }\n        @media (min-width: 769px) {\n            .container{margin-top:10%;}\n        }\n\n        .mostrar{\n            display:none;\n        }\n        .buttom-container{\n            width:100%;\n            max-width:404px;\n            \n        }\n        .text-container{\n            align-items: center;\n            justify-content: center;\n            padding:40px;\n            max-width:317px;\n            color: #009048;\n        }\n        @media (min-width: 769px) {\n            .text-container{\n                padding:0;\n                max-width:317px;\n            }\n        }\n\n        .move-container{\n            display:flex;\n            width:100%;\n            position: fixed;\n            bottom: 10px;\n            height: 150px;\n            justify-content: center;\n        }\n        @media (min-width: 769px) {\n            .move-container{\n                height: 21.277481vh;\n                width:500px;\n                padding:0;\n                gap:67px;\n\n            }\n        }\n\n        @media (min-width: 769px) {\n            .hand{\n                width:100%;\n            }\n        }\n        .desktop{}\n        @media (min-width: 769px) {\n            .desktop{\n                display:flex;\n                width:100%;\n                \n                justify-content: center;\n            }\n        }\n    ",e.querySelector(".jugar").addEventListener("click",(()=>{n.goTo("/play")})),e.appendChild(t),e}},{path:/\/play/,handler:function(n){function e(n){"piedra"==n?r.style.display="inherit":"papel"==n?d.style.display="inherit":"tijeras"==n&&(o.style.display="inherit")}const t=document.createElement("style");t.innerHTML="\n            *{\n                box-sizing: border-box;\n            }\n            .container{\n                width:100%;\n                display:flex;\n                justify-content: center;\n            }\n            .counter{\n                color:red;\n                margin-top:20vh;\n                width:15rem;  \n            }\n            .move-cont{\n                position: fixed;\n                bottom: -40px;\n            }\n            .papel{\n                \n            }\n            .piedra{\n                \n                \n            }\n            .tijeras{\n                \n            }\n            .move-container{\n                display:flex;\n                position: fixed;\n                bottom: 10px;\n                height: 150px;\n                width:100%;\n                justify-content: center;\n            }\n            @media (min-width: 769px) {\n                .move-container{\n                    height: 21.277481vh;\n                    width:500px;\n                    padding:0;\n                    gap:67px;\n                }\n            }\n            .mover{\n                margin-top:200px;\n            }  \n\n            .selected{\n                display:flex;\n                width:100%;\n                justify-content: center;\n                height: 200px;\n                position: fixed;\n                bottom: 0;\n            }\n\n            .move-pc{\n                position: fixed;\n                top: 0px;\n                left: 35%;\n                transform: rotate(180deg);\n                display:none;\n            }\n            @media (min-width: 769px) {\n                .move-pc{\n                    left:45%\n                }\n            }\n            \n            .pcAnimation{\n                animation-duration: 3s;\n                animation-name: slidein;\n              }\n              \n              @keyframes slidein {\n                from {\n                    margin-bottom: 100px;\n                    height: 50px;\n                }\n              \n                to {\n                  margin-top: 34%;\n                  height: 50px;\n                }\n            }\n\n            @media (min-width: 769px) {\n                .pcAnimation{\n                    animation-duration: 3s;\n                    animation-name: slidein;\n                  }\n                  \n                  @keyframes slidein {\n                    from {\n                        margin-bottom: 100px;\n                        height: 50px;\n                    }\n                  \n                    to {\n                      margin-top: 10%;\n                      height: 50px;\n                    }\n                }\n            }\n\n            .user-move{\n                position: fixed;\n                bottom: 0;\n                left: 35%;\n                height: 350px;\n                \n                display:none;\n                \n            }\n            @media (min-width: 769px) {\n                .user-move{\n                    left: 45%;\n                }\n            }\n            .userAnimation{\n                animation-duration: 3s;\n                animation-name: toTop;\n              }\n              \n              @keyframes toTop {\n                from {\n                    margin-top: 60%;\n                    height: 100px;\n                }\n              \n                to {\n                    margin-bottom: 140px;\n                    height: 50px;\n                }\n              }\n              @media (min-width: 769px) {\n                .userAnimation{\n                    animation-duration: 3s;\n                    animation-name: toTop;\n                  }\n                  \n                  @keyframes toTop {\n                    from {\n                        margin-top: 60%;\n                        height: 100px;\n                    }\n                  \n                    to {\n                        margin-bottom: 160px;\n                        height: 50px;\n                      \n                    }\n                  }\n              }\n            .desktop{}\n            @media (min-width: 769px) {\n            .desktop{\n                display:flex;\n                width:100%;\n                justify-content: center;\n                 }\n            }\n    ";const i=document.createElement("div");i.innerHTML='\n        <div class="container">\n                <div class="counter"><component-counter></component-counter></div>\n        </div>  \n        \n        \n\n        <div class="desktop"><div class="move-container">\n                <div class="papel"><move-papel></move-papel></div>\n                <div class="piedra"><move-piedra></move-piedra></div>\n                <div class="tijeras" "><move-tijeras></move-tijeras></div>\n        </div></div>\n\n\n                <div class="user-move user-papel userAnimation"><move-papel></move-papel></div>\n                <div class="user-move user-piedra userAnimation"><move-piedra></move-piedra></div>\n                <div class="user-move user-tijeras userAnimation"><move-tijeras></move-tijeras></div>\n                \n                <div  class="move-pc papel-pc pcAnimation"><move-papel></move-papel></div>\n                <div  class="move-pc piedra-pc pcAnimation"><move-piedra></move-piedra></div>\n                <div class="move-pc tijeras-pc pcAnimation"><move-tijeras></move-tijeras></div>\n               \n        \n    ',i.appendChild(t);const o=i.querySelector(".tijeras-pc"),r=i.querySelector(".piedra-pc"),d=i.querySelector(".papel-pc"),c=i.querySelector(".counter"),l=i.querySelector(".tijeras"),p=i.querySelector(".piedra"),m=i.querySelector(".papel"),h=i.querySelector(".user-tijeras"),u=i.querySelector(".user-papel"),g=i.querySelector(".user-piedra");return m.addEventListener("click",(t=>{c.style.display="none",p.style.display="none",l.style.display="none",t.target.style.display="none",u.style.display="inherit";let i=s();a.addCurrentPlay("papel",i),setTimeout((()=>{"piedra"==a.getState().currentGame.jugadaPc?n.goTo("/result/win"):"tijeras"==a.getState().currentGame.jugadaPc?n.goTo("/result/loose"):n.goTo("/result/tie")}),3e3),e(i)})),p.addEventListener("click",(t=>{m.style.display="none",l.style.display="none",t.target.style.display="none",c.style.display="none",g.style.display="inherit";let i=s();a.addCurrentPlay("piedra",i),setTimeout((()=>{"tijeras"==a.getState().currentGame.jugadaPc?n.goTo("/result/win"):"papel"==a.getState().currentGame.jugadaPc?n.goTo("/result/loose"):n.goTo("/result/tie")}),3e3),e(i)})),l.addEventListener("click",(t=>{m.style.display="none",p.style.display="none",t.target.style.display="none",c.style.display="none",h.style.display="inherit";let i=s();a.addCurrentPlay("tijera",i),setTimeout((()=>{"papel"==a.getState().currentGame.jugadaPc?n.goTo("/result/win"):"piedra"==a.getState().currentGame.jugadaPc?n.goTo("/result/loose"):n.goTo("/result/tie")}),3e3),e(i)})),setTimeout((()=>{""==a.getState().currentGame.jugadaMia&&n.goTo("/rules")}),4e3),i}},{path:/\/loose/,handler:function(n){const e=document.createElement("div"),t=document.createElement("style");return t.innerHTML="\n            *{\n                margin:0;\n                box-sizing: border-box;\n            }\n           \n            .container{\n                background-color: white;\n                display:flex;\n                height: 217px;\n                flex-direction: column;\n                gap:10px;\n                margin: 0 58px 0 58px;\n                border:solid 10px black;\n                justify-content: space-evenly;\n\n            }\n            @media (min-width: 769px) {\n                .container{\n                    width:404px;\n                }}\n            .h3-container{\n                display:flex;\n                width: 100%;\n                flex-direction: column;\n                justify-content: end;\n                align-items: flex-end;\n                text-align: end;\n\n\n            }\n            .h2-container{\n                \n            }\n            .h2{\n                text-align: center;\n                font-size: 55px;\n                font-family: 'Odibee Sans', cursive;;\n                color:#009048;\n            }\n\n            .h3{\n                text-align: center;\n                font-size: 45px;\n                font-family: 'Odibee Sans', cursive;;\n                color:#009048;\n            }\n            .buttom-container{\n                padding:20px;\n            }\n            @media (min-width: 769px) {\n                .buttom-container{\n                    \n                    width:424px;\n                }}\n            .center{\n                height: 100vh;\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n\n            }\n            @media (min-width: 769px) {\n                .desktop{\n                    width:100%;\n                    display:flex;\n                    justify-content:center;\n                }}\n            \n    ",e.innerHTML=`\n    <div class="center">\n    <component-meme variant="loose"></component-meme>\n    <div class="desktop"><div class="container">\n            <h2 class="h2">Puntaje<h2>\n            <div class="h3-container">\n                <h3 class="h3">Vos: ${r().user}   </h3>\n                <h3 class="h3">Maquína: ${r().pc}   </h3>\n            </div>\n    </div></div>\n    <div class="desktop"><div class="buttom-container"><component-button class="jugar">Jugar otra vez</component-button></div></div>\n    </div>               \n    `,e.appendChild(t),e.querySelector(".jugar").addEventListener("click",(()=>{n.goTo("/rules")})),e}},{path:/\/win/,handler:function(n){const e=document.createElement("div"),t=document.createElement("style");return t.innerHTML="\n            *{\n                margin:0;\n                \n                box-sizing: border-box;\n            }\n            body {\n                background-color: rgba(0, 255, 0, 0.5);\n                \n              }\n            .container{\n                display:flex;\n                height: 217px;\n                flex-direction: column;\n                gap:10px;\n                margin: 0 58px 0 58px;\n                border:solid 10px black;\n                justify-content: space-evenly;\n                background-color: white;\n                    \n                  \n            }\n            @media (min-width: 769px) {\n                .container{\n                    width:404px;\n                }}\n            .h3-container{\n                display:flex;\n                width: 100%;\n                flex-direction: column;\n                justify-content: end;\n                align-items: flex-end;\n                text-align: end;\n\n            }\n            .h2-container{\n\n            }\n            .h2{\n                text-align: center;\n                font-size: 55px;\n                font-family: 'Odibee Sans', cursive;;\n                color:#000000;\n            }\n\n            .h3{\n                text-align: center;\n                font-size: 45px;\n                font-family: 'Odibee Sans', cursive;;\n                color:#000000;\n            }\n            .buttom-container{\n                padding:20px ;\n                \n            }\n            @media (min-width: 769px) {\n                .buttom-container{\n                    \n                    width:424px;\n                }}\n            .center{\n                height: 100vh;\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n\n            }\n            @media (min-width: 769px) {\n            .desktop{\n                width:100%;\n                display:flex;\n                justify-content:center;\n            }}\n    ",e.innerHTML=`\n    <div class="center">\n    <component-meme variant="win"></component-meme>\n    <div class="desktop"><div class="container">\n            <h2 class="h2">Puntaje<h2>\n            <div class="h3-container">\n                <h3 class="h3">Vos: ${d().user}   </h3>\n                <h3 class="h3">Maquína: ${d().pc}   </h3>\n            </div>\n    </div></div>\n    <div class="desktop"><div class="buttom-container"><component-button class="jugar">Jugar otra vez</component-button></div></div>\n    </div>\n                \n    `,e.appendChild(t),e.querySelector(".jugar").addEventListener("click",(()=>{n.goTo("/rules")})),e}},{path:/\/tie/,handler:function(n){const e=document.createElement("div"),t=document.createElement("style");return t.innerHTML="\n            *{\n                margin:0;\n                \n                box-sizing: border-box;\n            }\n            body {\n                background-color: rgba(181 ,178 ,178, 0.6);\n                \n              }\n            .container{\n                background-color: white;\n                display:flex;\n                height: 217px;\n                flex-direction: column;\n                gap:10px;\n                margin: 0 58px 0 58px;\n                border:solid 10px black;\n                justify-content: space-evenly;\n\n            }\n            @media (min-width: 769px) {\n                .container{\n                    width:404px;\n                }}\n\n            .h3-container{\n                display:flex;\n                width: 100%;\n                flex-direction: column;\n                justify-content: end;\n                align-items: flex-end;\n                text-align: end;\n\n            }\n            .h2-container{\n                \n            }\n            .h2{\n                text-align: center;\n                font-size: 55px;\n                font-family: 'Odibee Sans', cursive;;\n                color:#000000;\n            }\n\n            .h3{\n                text-align: center;\n                font-size: 45px;\n                font-family: 'Odibee Sans', cursive;;\n                color:#000000;\n            }\n            .buttom-container{\n                padding:20px;\n            }\n            @media (min-width: 769px) {\n                .buttom-container{\n                    \n                    width:424px;\n                }}\n            .center{\n                height: 100vh;\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n\n            }\n            @media (min-width: 769px) {\n                .desktop{\n                    width:100%;\n                    display:flex;\n                    justify-content:center;\n                }}\n            \n    ",e.innerHTML=`\n    <div class="center">\n    <component-meme variant="tie"></component-meme>\n    <div class="desktop"><div class="container">\n            <h2 class="h2">Puntaje<h2>\n            <div class="h3-container">\n                <h3 class="h3">Vos: ${c().user}   </h3>\n                <h3 class="h3">Maquína: ${c().pc}   </h3>\n            </div>\n    </div></div>\n    <div class="desktop"><div class="buttom-container"><component-button class="jugar">Jugar otra vez</component-button></div></div>\n    </div>\n    \n                \n    `,e.appendChild(t),e.querySelector(".jugar").addEventListener("click",(()=>{n.goTo("/rules")})),e}}];var p;p=new URL(o("27Lyk").resolve("h5stw"),import.meta.url).toString();var m;m=new URL(o("27Lyk").resolve("hqVYS"),import.meta.url).toString();var h;h=new URL(o("27Lyk").resolve("2BL3u"),import.meta.url).toString();var u;u=new URL(o("27Lyk").resolve("iTaEq"),import.meta.url).toString();var g;g=new URL(o("27Lyk").resolve("2w0Vc"),import.meta.url).toString();var v;function x(n){a.init(),function(){class n extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const n=this.getAttribute("variant");var e=document.createElement("style");e.textContent="\n            *{\n                box-sizing: border-box;\n            }\n            .star-cartel{\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            }\n            ";var t=this.attachShadow({mode:"open"});t.appendChild(e);var i="";i="win"==n?u:"loose"==n?v:g;var o=document.createElement("div");o.innerHTML=`<div class="contenedor">\n\n            <div class="star-cartel">\n            <img src=${i} />\n            </div>\n            \n          </div>`,t.appendChild(o)}}customElements.define("component-meme",n)}(),function(){class n extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.render()}render(){const n=this.getAttribute("who");let e=document.createElement("style");e.textContent="\n            *{\n                box-sizing: border-box;\n            }\n            \n            .img{\n                width:100%;\n                height: 190px;\n                cursor: pointer;\n            }\n            .active{\n                height: 500px;\n                color: aqua;\n                margin:20px;\n            }\n            @media (min-width: 769px) {\n                .img{\n               width:100%;\n               height: 250px;\n                }\n                .img:hover {\n             height: 300px;\n          }\n           }\n            ",this.shadow.appendChild(e);let t=document.createElement("div");t.classList.add("conteiner"),t.innerHTML=`\n                <div class="move-container">\n                    <div>\n                        <img src=${m} class="img" >\n                    </div>\n                </div>\n            \n            `,t.className=n,this.shadow.appendChild(t)}}customElements.define("move-papel",n)}(),function(){class n extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.render()}render(){let n=document.createElement("style");n.textContent="\n            *{\n                box-sizing: border-box;\n            }\n\n            .img{\n                width:100%;\n                height: 190px;\n                cursor: pointer;\n            }\n            @media (min-width: 769px) {\n                 .img{\n                width:100%;\n                height: 250px;\n                \n            }\n            .img:hover {\n                height: 300px;\n              }\n            }\n            \n            \n            .container{\n                width:100%;\n                \n            }\n            \n            ",this.shadow.appendChild(n);let e=document.createElement("div");e.classList.add("conteiner"),e.innerHTML=`\n                <div class="move-container">\n                    <div>\n                        <img src=${p} class="img" who="piedra">\n                    </div>\n                \n                \n                </div>\n            \n            `,this.shadow.appendChild(e)}}customElements.define("move-piedra",n)}(),function(){class n extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.render()}render(){let n=document.createElement("style");n.textContent="\n            *{\n                box-sizing: border-box;\n            }\n            \n            .container{\n                width:100%;\n                \n                \n            }\n           \n            \n            .img{\n                width:100%;\n                height: 190px;\n                cursor: pointer;\n            }\n            @media (min-width: 769px) {\n                .img{\n               width:100%;\n               height: 250px;\n               \n           }\n           .img:hover {\n            height: 300px;\n          }\n           }\n            ",this.shadow.appendChild(n);let e=document.createElement("div");e.classList.add("conteiner"),e.innerHTML=`\n                <div class="move-container">\n                    <div>\n                    <img src=${h} class="img" who="tijeras">\n                    </div>\n                </div>\n            \n            `,this.shadow.appendChild(e)}}customElements.define("move-tijeras",n)}(),function(){class n extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.render()}counter(){let n=4,e=setInterval((()=>{n--,3==n?this.shadow.querySelector(".counter").textContent="3":2==n?this.shadow.querySelector(".counter").textContent="2":1==n?this.shadow.querySelector(".counter").textContent="1":0==n?this.shadow.querySelector(".counter").textContent="0":clearInterval(e)}),1e3);return e}render(){this.counter();var n=document.createElement("style");n.textContent='\n            *{\n                box-sizing: border-box;\n            }\n            .circulo {\n                width: 15rem;\n                height: 15rem;\n                border-radius: 50%;\n                background-color: color|transparent|initial|inherit;\n                opacity: 1;\n                border:solid 20px black;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n                margin:0px auto;\n                padding:3%;\n            }\n            .counter{\n                width:100%;\n                font-size:150px;\n                font-family:"Odibee Sans";\n                text-align:center;\n                color: #000000;\n            }\n            ',this.shadow.appendChild(n);var e=document.createElement("div");e.classList.add("counter"),e.classList.add("circulo"),this.shadow.appendChild(e)}}customElements.define("component-counter",n)}(),function(){class n extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const n=this.getAttribute("variant")||"body",e=document.createElement("style");e.textContent="\n                *{\n                    box-sizing: border-box;\n                }\n                \n                .title{\n                    font-size: 80px;\n                    font-weight: bold;\n                    font-family: 'Odibee Sans', cursive;;\n                    color:#009048;\n                    text-align:center;\n                }\n                \n                .body{\n                    font-size: 40px;\n                    font-family: 'Odibee Sans', cursive;;\n                    text-align:center;\n                }\n\n                .tie{\n                    font-size: 90px;\n                    font-weight: bold;\n                    font-family: 'Odibee Sans', cursive;;\n                    color: #009048;\n                    text-align:center;\n                    margin-bottom:20px;\n                    text-decoration: underline;    \n                }\n            ";const t=this.attachShadow({mode:"open"});t.appendChild(e);const i=document.createElement("div");i.className=n,i.textContent=this.textContent,t.appendChild(i)}}customElements.define("component-text",n)}(),function(){class n extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const n=this.textContent;var e=document.createElement("style");e.textContent='\n            *{\n                box-sizing: border-box;\n            }\n            \n            .button{\n                width:100%;\n                color:#D8FCFC;\n                background-color: #006CFC;\n                border:10px solid #001997;\n                font-size:45px;\n                font-family:"Odibee Sans";\n                border-radius: 10px;\n                cursor: pointer;\n                \n            }\n            .button:hover {\n                background-color: #2f44ad;\n              }\n            ';var t=this.attachShadow({mode:"open"});t.appendChild(e);var i=document.createElement("button");i.classList.add("button"),i.innerText=n,t.appendChild(i)}}customElements.define("component-button",n)}(),function(n){function e(n){history.pushState({},"",n),t(n)}function t(t){for(const i of l)if(i.path.test(t)){const t=i.handler({goTo:e});n.firstChild&&n.firstChild.remove(),console.log(t),n.appendChild(t)}}location.host.includes("github.io")?e("/desafio-m5/inicio"):"/"==location.pathname?e("/inicio"):t(location.pathname),window.onpopstate=function(){t(location.pathname)}}(n)}v=new URL(o("27Lyk").resolve("eCOwJ"),import.meta.url).toString(),x(document.querySelector(".root")),console.log(a.getState());
//# sourceMappingURL=index.009c6ab1.js.map
