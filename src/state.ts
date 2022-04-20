type Jugado = "piedra" | "papel" | "tijera" | "";
type Jugar = {
  jugadaMia: Jugado;
  jugadaPc: Jugado;
};

const state = {
  data: {
    currentGame: {
      jugadaMia: "",
      jugadaPc: "",
    },
    histoy: [],
  },
  listeners: [],
  init() {
    let localData = localStorage.getItem("saved-state");
    if (localData !== null) {
      this.setState(JSON.parse(localData));
    } else {
      this.setState({
        currentGame: {
          jugadaMia: "",
          jugadaPc: "",
        },
        histoy: [],
      });
    }
  },
  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    localStorage.setItem("saved-state", JSON.stringify(newState));
  },

  subscribe(callback) {
    this.listeners.push(callback);
  },

  addCurrentPlay(jugadaMia: Jugado, jugadaPc: Jugado) {
    const data = this.getState();
    const newData = {
      ...data,
      currentGame: { jugadaMia: jugadaMia, jugadaPc: jugadaPc },
    };
    this.setState(newData);
    this.whoWins({ jugadaMia, jugadaPc });
  },

  whoWins(played: Jugar) {
    const data = this.getState();

    const ganeConPapel =
      played.jugadaMia == "papel" && played.jugadaPc == "piedra";
    const GaneConPiedra =
      played.jugadaMia == "piedra" && played.jugadaPc == "tijera";
    const GaneConTijera =
      played.jugadaMia == "tijera" && played.jugadaPc == "papel";
    const gane = [ganeConPapel, GaneConPiedra, GaneConTijera].includes(true);

    const perdiConPapel =
      played.jugadaPc == "papel" && played.jugadaMia == "piedra";
    const perdiConPiedra =
      played.jugadaPc == "piedra" && played.jugadaMia == "tijera";
    const perdiConTijera =
      played.jugadaPc == "tijera" && played.jugadaMia == "papel";
    const perdi = [perdiConPapel, perdiConPiedra, perdiConTijera].includes(
      true
    );

    if (gane == true) {
      data.histoy.push(1);
      this.setState(data);
    } else if (perdi == true) {
      data.histoy.push(0);
      this.setState(data);
    }
  },
};

export { state };
