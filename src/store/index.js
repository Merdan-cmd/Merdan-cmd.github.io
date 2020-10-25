import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentIndex: 0,
    cards: [
      {
        title: "Bottle Flip Challenge",
        description:
          "So this challenge is all about your bottle flip talent.You got one minute to do the bottle flip as often as you can to win this challenge an tenfold your entry.",
        img: "/bottle.png",
        entry: "5$",
        win: "50$",
      },
      {
        title: "Keep it Up Challenge",
        description:
          "This is for all the soccer lunatics. The task is simple: just keep the ball up as often as you can. Of course you are not allowed to use your hands. Only your feet. Win this challenge and tenfold your entry.",
        img: "/Football.png",
        entry: "2$",
        win: "20$",
      },
      {
        title: "Ping to the Pong Challenge",
        description:
          "This challenge is easy. Just take a ping pong ball and a bat. This is all you need. Then start to hold the ball up with your bat. Do it as often as you can within a minute and win this challenge so we can tenfold your entry.",
        img: "/pong.jpg",
        entry: "3$",
        win: "30$",
      },
    ],
  },
  getters: {
    currentIndex: (state) => {
      return state.currentIndex;
    },
    cards: (state) => {
      return state.cards;
    },
  },
  mutations: {
    nextIndex: (state) => {
      if (state.currentIndex < state.cards.length - 1) state.currentIndex++;
    },
    prevIndex: (state) => {
      if (state.currentIndex > 0) state.currentIndex--;
    },
  },
  actions: {},
  modules: {},
});
