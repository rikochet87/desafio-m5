import { init as initWelcome } from "./pages/welcome";
import { init as initRules } from "./pages/rules";
import { init as initPlay } from "./pages/play";
import { init as initResults } from "./pages/results";

const BASE_PATH = "/desafio-m5";

const routes = [
  {
    path: /\/inicio/,
    handler: initWelcome,
  },
  {
    path: /\/rules/,
    handler: initRules,
  },
  {
    path: /\/play/,
    handler: initPlay,
  },
  {
    path: /\/results/,
    handler: initResults,
  },
];

export function initRouter(container) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.handler({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        console.log(el);
        container.appendChild(el);
      }
    }
  }

  if (location.host.includes("github.io")) {
    goTo(BASE_PATH + "/inicio");
  } else if (location.pathname == "/") {
    goTo("/inicio");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
