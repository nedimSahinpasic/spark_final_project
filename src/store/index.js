import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    getData: state => state.formationsData,
    getFormation: state => state.class,
    getPlayersComp: state => state.playersComp,
    getFullObj: state => state.fullObj,
    getGK: state => state.gks,
    getDEF: state => state.defs,
    getMIDS: state => state.mids,
    getATTS: state => state.atts,
    getPlayerDetailsShow: state => state.playerDetailsShow,
    getPlayerDetailsData: state => state.playerDetailsData,
    getChoosePlayers: state => state.choosePlayers,
    get_442_players: state => state._442_players,
    get_4132_players: state => state._4132_players,
    get_433_players: state => state._433_players,
    get_4213_players: state => state._4213_players,
    get_4222_players: state => state._4222_players,
    get_532_players: state => state._532_players,
    get_3322_players: state => state._3322_players,
    getRemoveFav: state => state.removeFav,
    getRequestedPosition: state => state.requestedPosition,
  },

  state: {
    formationsData: [],
    fullObj: [],
    class: '',
    choosePlayers: [],
    playersComp: null,
    gks: [],
    defs: [],
    mids: [],
    atts: [],
    playerDetailsData: null,
    playerDetailsShow: null,
    _442_players: [],
    _4132_players: [],
    _433_players: [],
    _4213_players: [],
    _4222_players: [],
    _532_players: [],
    _3322_players: [],
    currentFormationPlayers: [],
    removeFav: null,
    requestedPosition: '',

  },

  actions: {

    fetchData: function ({ commit }, url) {
      axios.get(url)
        .then(res => {
          commit('loadData', res.data);
          commit("playersByPositions");
        })
    },

  },

  mutations: {

    addToFavorites: function (state, player) {
      console.log(player);
      console.log(state.class);

      switch (state.class) {
        case '4-4-2':
          addToFavorite(player, state._442_players)
          break;
        case '4-1-3-2':
          addToFavorite(player, state._4132_players)
          break;
        case '4-3-3':
          addToFavorite(player, state._433_players)
          break;
        case '4-2-1-3':
          addToFavorite(player, state._4213_players)
          break;
        case '4-2-2-2':
          addToFavorite(player, state._4222_players)
          break;
        case '5-3-2':
          addToFavorite(player, state._532_players)
          break;
        case '3-3-2-2':
          addToFavorite(player, state._3322_players)
          break;

      }

      function addToFavorite(player, formationPlayersObject) {
        formationPlayersObject.forEach(playerItem => {
          if (playerItem.formationPicture == player.formationPicture) {
            playerItem.favorite = true;
          }

        })
      }

      console.log(state._442_players);
    },

    removeFromFavorites: function (state, player) {

      state.removeFav = false;
      console.log(player);
      console.log(state.class);

      switch (state.class) {
        case '4-4-2':
          removeFromFavorite(player, state._442_players)
          break;
        case '4-1-3-2':
          removeFromFavorite(player, state._4132_players)
          break;
        case '4-3-3':
          removeFromFavorite(player, state._433_players)
          break;
        case '4-2-1-3':
          removeFromFavorite(player, state._4213_players)
          break;
        case '4-2-2-2':
          removeFromFavorite(player, state._4222_players)
          break;
        case '5-3-2':
          removeFromFavorite(player, state._532_players)
          break;
        case '3-3-2-2':
          removeFromFavorite(player, state._3322_players)
          break;

      }

      function removeFromFavorite(player, formationPlayersObject) {
        formationPlayersObject.forEach(playerItem => {
          if (playerItem.formationPicture == player.formationPicture) {
            playerItem.favorite = false;
          }

        })
      }

      console.log(state._442_players);
    },

    _442_: function (state) {
      if (state._442_players.length == 0) {
        state._442_players = JSON.parse(JSON.stringify(state.fullObj.players));
        state._442_players.forEach(player => {
          player.favorite = false;
        })
      }

      state.currentFormationPlayers = state._442_players;
    },

    _4132_: function (state) {
      if (state._4132_players.length == 0) {
        state._4132_players = JSON.parse(JSON.stringify(state.fullObj.players));
        state._4132_players.forEach(player => {
          player.favorite = false;
        })
      }

      state.currentFormationPlayers = state._4132_players;
    },

    _433_: function (state) {
      if (state._433_players.length == 0) {
        state._433_players = JSON.parse(JSON.stringify(state.fullObj.players));
        state._433_players.forEach(player => {
          player.favorite = false;
        })
      }

      state.currentFormationPlayers = state._433_players;
    },

    _4213_: function (state) {
      if (state._4213_players.length == 0) {
        state._4213_players = JSON.parse(JSON.stringify(state.fullObj.players));
        state._4213_players.forEach(player => {
          player.favorite = false;
        })
      }

      state.currentFormationPlayers = state._4213_players;
    },

    _4222_: function (state) {
      if (state._4222_players.length == 0) {
        state._4222_players = JSON.parse(JSON.stringify(state.fullObj.players));
        state._4222_players.forEach(player => {
          player.favorite = false;
        })
      }

      state.currentFormationPlayers = state._4222_players;
    },

    _532_: function (state) {
      if (state._532_players.length == 0) {
        state._532_players = JSON.parse(JSON.stringify(state.fullObj.players));
        state._532_players.forEach(player => {
          player.favorite = false;
        })
      }

      state.currentFormationPlayers = state._532_players;
    },

    _3322_: function (state) {
      if (state._3322_players.length == 0) {
        state._3322_players = JSON.parse(JSON.stringify(state.fullObj.players));
        state._3322_players.forEach(player => {
          player.favorite = false;
        })
      }

      state.currentFormationPlayers = state._3322_players;
    },

    removePositionFunction: function (state, obj) {
      switch (obj.formation) {
        case 442:
          filterPosition(state._442_players, obj.position, obj.required, obj.player);
          break;
        case 4132:
          filterPosition(state._4132_players, obj.position, obj.required, obj.player);
          break;
        case 433:
          filterPosition(state._433_players, obj.position, obj.required, obj.player);
          break;
        case 4213:
          filterPosition(state._4213_players, obj.position, obj.required, obj.player);
          break;
        case 4222:
          filterPosition(state._4222_players, obj.position, obj.required, obj.player);
          break;
        case 532:
          filterPosition(state._532_players, obj.position, obj.required, obj.player);
          break;
        case 3322:
          filterPosition(state._3322_players, obj.position, obj.required, obj.player);
          break;

      }

      function filterPosition(players, position, requiredPos, targetPlayer) {
        state.requestedPosition = requiredPos;
        state.removeFav = true;
        state.choosePlayers = [];
        state.choosePlayers.push(targetPlayer);

        players.forEach(player => {
          player.stats.posiblePositions.forEach(positionItem => {
            if (positionItem == position && player.favorite != true) {
              player.requiredPosition = requiredPos;
              state.choosePlayers.push(player)
            }
          })
        })
      }
    },

    positionFunction: function (state, obj) {

      switch (obj.formation) {
        case 442:
          filterPosition(state._442_players, obj.position, obj.required);
          break;
        case 4132:
          filterPosition(state._4132_players, obj.position, obj.required);
          break;
        case 433:
          filterPosition(state._433_players, obj.position, obj.required);
          break;
        case 4213:
          filterPosition(state._4213_players, obj.position, obj.required);
          break;
        case 4222:
          filterPosition(state._4222_players, obj.position, obj.required);
          break;
        case 532:
          filterPosition(state._532_players, obj.position, obj.required);
          break;
        case 3322:
          filterPosition(state._3322_players, obj.position, obj.required);
          break;

      }

      function filterPosition(players, position, requiredPos) {
        state.requestedPosition = requiredPos;
        state.removeFav = false;
        state.choosePlayers = [];

        players.forEach(player => {
          player.stats.posiblePositions.forEach(positionItem => {
            if (positionItem == position && player.favorite != true) {
              player.requiredPosition = requiredPos;
              state.choosePlayers.push(player)
            }
          })
        })
      }



    },

    playersByPositions: function (state) {
      let position;

      state.gks = [];
      state.defs = [];
      state.mids = [];
      state.atts = [];

      state.currentFormationPlayers.forEach(element => {
        position = element.stats.position

        if (position === 'GK') {
          state.gks.push(element);
        }

        if (position == "CB" || position === "LB" || position === "RB") {
          state.defs.push(element);
        }

        if (position === "DM" || position === "CM" || position === "LM" || position === "RM" || position === "AM") {
          state.mids.push(element);
        }

        if (position === "CF" || position === "LW" || position === "RW") {
          state.atts.push(element);
        }
      });
    },

    loadData: function (state, data) {
      state.formationsData = data.formations;
      state.fullObj = data;
      state.currentFormationPlayers = data.players;
      console.log(state.fullObj)
    },

    storeFormationClass: function (state, data) {
      state.class = data;

    },

    storePlayerRunComp: function (state, data) {
      data.player.stats.age = calculateAge(data.player.stats.birthDate)
      data.player.stats.weakFoot = weekFoot(data.player.stats.preferredFoot);

      state.playerDetailsData = data.player;
      state.playerDetailsShow = data.show;


      function weekFoot(strongFoot) {
        if (strongFoot == 'left')
          return 'right';
        else
          return 'left';
      }

      function calculateAge(birthDate) {
        const ms = Date.now() - Date.parse(birthDate);
        const age = new Date(ms).getUTCFullYear() - 1970;

        return age;
      }





    },

    closePlayerDetails: function (state, data) {
      state.playerDetailsShow = data;
    },

    loadPlayersComp: function (state, data) {
      state.playersComp = data;
    },
  },
})
