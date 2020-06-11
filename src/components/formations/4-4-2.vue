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

      <div id="lb" class="playerDiv">
        <div
          class="playerLoaded"
          v-for="(player, index) in filter('lb')"
          :key="index"
          @click="removeFromFav('LB', 'lb', player)"
        >
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
    this.$store.commit("_442_");
  },

  data() {
    return {};
  },

  computed: {
    players: function() {
      return this.$store.getters.get_442_players;
    }
  },

  methods: {
    select: function(position, required) {
      this.$store.commit("positionFunction", {
        position,
        formation: 442,
        required
      });

      this.$router.push("/favorites").catch(() => {});
    },

    removeFromFav: function(position, required, player) {
      this.$store.commit("removePositionFunction", {
        position,
        formation: 442,
        required,
        player
      });

      this.$router.push("/favorites").catch(() => {});
    },

    filter: function(position) {
      let requiredPlayer = [];

      this.players.forEach(player => {
        if (player.requiredPosition == position && player.favorite) {
          requiredPlayer.push(player);
        }
      });

      return requiredPlayer;
    }
  }
};
</script>

<style scoped>
@media (max-width: 600px) {
  .playerName {
    width: 100% !important;
    height: 100% !important;
    background: white;
    opacity: 0.8;
  }

  .playerPic img {
    width: 85% !important;
    margin: auto;
    height: auto;
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
  width: 5vw;
  height: 2vh;
  background: white;
  opacity: 0.8;
}

.playerPic img {
  width: 5vw;
  height: auto;
  display: block;
}

#pitch {
  width: 100%;
  height: 100%;
  margin: auto;
  background-image: url("../../assets/pitch.jpg");
  background-repeat: no-repeat;
  background-size: fill;
  background-size: 100% 100%;
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
    "lm o10 o11 o12 rm"
    "o13 cm1 o15 cm2 oo14"
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

#cm1 {
  grid-area: cm1;
  justify-self: center;
  align-self: center;
}

#cm2 {
  grid-area: cm2;
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