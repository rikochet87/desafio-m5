import { initWelcomePage} from "./pages/welcome"
import {initLoose} from "./pages/result/loose"
import {initWin} from "./pages/result/win"
import { initRules } from "./pages/rules"
import {initPlay} from "./pages/play"
import {initTie} from "./pages/result/tie"

  

const BASE_PATH = "/desafio-m5";

// function isGithubPages() {
//   return location.host.includes("github.io");
// }

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
        
        history.pushState({}, "", path);
        handleRoute(path);
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
      goTo(BASE_PATH + "/inicio")
    }else if(location.pathname == "/"){
      goTo("/inicio")
    }
    else{handleRoute(location.pathname);}
     
    window.onpopstate = function (){
      handleRoute(location.pathname);
    };
   
  }