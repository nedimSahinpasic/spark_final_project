<template>
  <div id="pitch">
    <div id="formation">
      <div class="playerDiv" id="gk">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('gk')"
          :key="index"
          @click="removeFromFav('GK', 'gk', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('GK', 'gk')"></button>
      </div>

      <div id="cb1" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('cb1')"
          :key="index"
          @click="removeFromFav('CB', 'cb1', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('CB', 'cb1')"></button>
      </div>

      <div id="cb2" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('cb2')"
          :key="index"
          @click="removeFromFav('CB', 'cb2', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('CB', 'cb2')"></button>
      </div>

      <div id="cb3" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('cb3')"
          :key="index"
          @click="removeFromFav('CB', 'cb3', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('CB', 'cb3')"></button>
      </div>

      <div id="cm1" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('cm1')"
          :key="index"
          @click="removeFromFav('CM', 'cm1', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('CM', 'cm1')"></button>
      </div>

      <div id="cm2" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('cm2')"
          :key="index"
          @click="removeFromFav('CM', 'cm2', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('CM', 'cm2')"></button>
      </div>

      <div id="cm3" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('cm3')"
          :key="index"
          @click="removeFromFav('CM', 'cm3', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('CM', 'cm3')"></button>
      </div>

      <div id="am1" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('am1')"
          :key="index"
          @click="removeFromFav('AM', 'am1', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('AM', 'am1')"></button>
      </div>

      <div id="am2" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('am2')"
          :key="index"
          @click="removeFromFav('AM', 'am2', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('AM', 'am2')"></button>
      </div>

      <div id="cf1" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('cf1')"
          :key="index"
          @click="removeFromFav('CF', 'cf1', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('CF', 'cf1')"></button>
      </div>

      <div id="cf2" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('cf2')"
          :key="index"
          @click="removeFromFav('CF', 'cf2', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('CF', 'cf2')"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("_3322_");
  },

  data() {
    return {};
  },

  computed: {
    players: function() {
      return this.$store.getters.get_3322_players;
    },

    favorites: function() {
      return this.$store.getters.getIsFavorite;
    }
  },

  methods: {
    select: function(position, required) {
      if (this.favorites == true) {
        this.$store.commit("positionFunction", {
          position,
          formation: 3322,
          required
        });

        this.$router.push("/selectfavorite").catch(() => {});
      }
    },

    removeFromFav: function(position, required, player) {
      this.$store.commit("removePositionFunction", {
        position,
        formation: 3322,
        required,
        player
      });

      this.$router.push("/selectfavorite").catch(() => {});
    },

    filter: function(position) {
      if (this.favorites == true) {
        let requiredPlayer = [];

        this.players.forEach(player => {
          if (player.requiredPosition == position && player.favorite) {
            requiredPlayer.push(player);
          }
        });

        return requiredPlayer;
      }
    }
  }
};
</script>

<style scoped>
@media (max-width: 600px) {
  .playerName {
    width: 16.3vw !important;
    height: auto !important;
    background: white;
    opacity: 0.8;
    white-space: nowrap;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    max-width: none !important;
  }

  .playerName::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent;
  }

  .playerPic img {
    width: 15vw !important;
    margin: auto;
    height: auto !important;
    display: block;
  }
}

.player:hover {
  cursor: pointer;
}

.playerLoaded:hover {
  cursor: pointer;
}

.playerDiv > *:nth-child(2) {
  display: none;
}

.playerName p {
  text-align: center;
}

.playerName {
  max-width: 5.8vw;
  height: auto;
  background: white;
  opacity: 0.8;
  white-space: nowrap;
}

.playerPic img {
  width: 5vw;
  height: 9vh;
  display: block;
  margin: auto;
}

#formation {
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "o1 o2 o3 o4 oo5"
    "o5 cf1 o7 cf2 oo9"
    "o9 am1 o11 am2 oo13"
    "o13 cm1 cm2 cm3 oo14"
    "o18 o19 o20 o21 oo22"
    "o22 cb1 cb2 cb3 o26"
    "o27 o28 gk o30 o31";
}

.player {
  width: 25px;
  height: 25px;
  box-shadow: 0px 2px 4.9px 0.1px rgba(0, 0, 0, 0.4);
  border: solid 1px rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.4);
}

#gk {
  grid-area: gk;
  justify-self: center;
  align-self: center;
}

#cb1 {
  grid-area: cb1;
  align-self: center;
  justify-self: center;
}

#cb2 {
  grid-area: cb2;
  align-self: center;
  justify-self: center;
}

#cb3 {
  grid-area: cb3;
  align-self: center;
  justify-self: center;
}

#am1 {
  grid-area: am1;
  justify-self: center;
  align-self: center;
}

#am2 {
  grid-area: am2;
  justify-self: center;
  align-self: center;
}

#cm1 {
  grid-area: cm1;
  justify-self: start;
  align-self: center;
}

#cm2 {
  grid-area: cm2;
  justify-self: center;
  align-self: end;
}

#cm3 {
  grid-area: cm3;
  justify-self: end;
  align-self: center;
}

#cf1 {
  grid-area: cf1;
  justify-self: center;
  align-self: center;
}

#cf2 {
  grid-area: cf2;
  justify-self: center;
  align-self: center;
}
</style>