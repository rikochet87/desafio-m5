import { initWelcomePage} from "./pages/welcome/index"
import {initLoose} from "./pages/result/loose/index"
import {initWin} from "./pages/result/win/index"
import { initRules } from "./pages/rules/index"
import {initPlay} from "./pages/play/index"
import {initTie} from "./pages/result/tie/index"

  

const BASE_PATH = "/desafio5";

function isGithubPages() {
  return location.host.includes("github.io");
}

const routes = [
    {
      path: /\/inicio/,
      handler: initWelcomePage,
    },
    {
        path: /\/rules/,
        handler: initRules,
      },{
        path: /\/play/,
        handler: initPlay,
      },
      {
        path: /\/loose/,
        handler: initLoose,
      },{
        path: /\/win/,
        handler: initWin,
      },
      {
        path: /\/tie/,
        handler: initTie,
      },
  ];

export function initRouter (container){

    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
      }

    function handleRoute(route) {
        
        
        for (const r of routes) {
          if (r.path.test(route)) { 
            
           const el =  r.handler({goTo:goTo});
        
           if (container.firstChild){
            
            container.firstChild.remove()
           }
           console.log(el)
           container.appendChild(el)
          }
        }
      }


    if (location.host.includes("github.io")){
      goTo("/inicio")
    }else if(location.pathname == "/"){
      goTo("/inicio")
    }
    else{handleRoute(location.pathname);}
     
    window.onpopstate = function (){
      handleRoute(location.pathname);
    }
    
  }