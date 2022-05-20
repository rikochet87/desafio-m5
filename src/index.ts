import { initRouter } from "./router";
import { state } from "./state";
import "./components/button";
import "./components/papel";
import "./components/piedra";
import "./components/tijera";

(function () {
  state.getState();
  const root = document.querySelector(".root");
  initRouter(root);
})();
