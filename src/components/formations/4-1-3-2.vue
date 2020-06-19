<template>
  <!--   
  <button class="player" id="dm"></button>
  <button class="player" id="cm"></button>
  <button class="player" id="lm"></button>
  <button class="player" id="rm"></button>
  <button class="player" id="cf1"></button>
  <button class="player" id="cf2"></button>
  -->
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

      <div id="lb" class="playerDiv">
        <div class="playerLoaded" v-for="(player, index) in filter('lb')" :key="index">
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('LB', 'lb')"></button>
      </div>

      <div id="rb" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('rb')"
          :key="index"
          @click="removeFromFav('RB', 'rb', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('RB', 'rb')"></button>
      </div>

      <div id="dm" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('dm')"
          :key="index"
          @click="removeFromFav('DM', 'dm', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('DM', 'dm')"></button>
      </div>

      <div id="cm" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('cm')"
          :key="index"
          @click="removeFromFav('CM', 'cm', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('CM', 'cm')"></button>
      </div>

      <div id="lm" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('lm')"
          :key="index"
          @click="removeFromFav('LM', 'lm', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('LM', 'lm')"></button>
      </div>

      <div id="rm" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('rm')"
          :key="index"
          @click="removeFromFav('RM', 'rm', player)"
        >
          <div class="playerPic">
            <img :src="player.formationPicture" />
          </div>
          <div class="playerName">
            <p v-if="player.lastName">{{player.lastName}}</p>
            <p v-else>{{player.name}}</p>
          </div>
        </div>

        <button class="player" @click="select('RM', 'rm')"></button>
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
    this.$store.commit("_4132_");
  },

  data() {
    return {};
  },

  computed: {
    players: function() {
      return this.$store.getters.get_4132_players;
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
          formation: 4132,
          required
        });

        this.$router.push("/selectfavorite").catch(() => {});
      }
    },

    removeFromFav: function(position, required, player) {
      this.$store.commit("removePositionFunction", {
        position,
        formation: 4132,
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
    "lm o10 cm o12 rm"
    "o13 o14 dm o16 oo14"
    "lb o19 o20 o21 rb"
    "o22 cb1 o24 cb2 o26"
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
  justify-self: end;
}

#cb2 {
  grid-area: cb2;
  align-self: center;
  justify-self: start;
}

#lb {
  grid-area: lb;
  align-self: end;
  justify-self: center;
}

#rb {
  grid-area: rb;
  justify-self: center;
  align-self: end;
}

#dm {
  grid-area: dm;
  justify-self: center;
  align-self: end;
}

#cm {
  grid-area: cm;
  justify-self: center;
  align-self: center;
}

#lm {
  grid-area: lm;
  justify-self: center;
  align-self: center;
}

#rm {
  grid-area: rm;
  justify-self: center;
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