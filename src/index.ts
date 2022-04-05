import { state } from "./state"
import { initRouter } from "./router"
import { initText } from "./components/text/index"
import { initButton } from "./components/button/index"
import { initCounter } from "./components/counter/index"
import { initPiedra } from "./components/move/piedra"
import { initPapel } from "./components/move/papel"
import { initTijeras } from "./components/move/tijeras"
import { initStar } from "./components/meme/index"

function initApp(param) {
    state.init()
    initStar()
    initPapel()
    initPiedra()
    initTijeras()
    initCounter()
    initText()
    initButton()
    initRouter(param)
}


(function () {


    const root = document.querySelector(".root");
    initApp(root);
    console.log(state.getState());

})()
