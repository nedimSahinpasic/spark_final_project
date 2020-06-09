<template>
  <div id="wrapper">
    <div class="disallowMenu"></div>

    <div class="positionHeader">
      <h4>{{position}}</h4>
    </div>
    <div class="headers">
      <div class="header" @click="sortByPopularity()">
        <h3>Popularity</h3>
      </div>
      <div class="header" @click="sortByValue()">
        <h3>Value</h3>
      </div>

      <div class="header" @click="sortByAge()">
        <h3>Age</h3>
      </div>
    </div>

    <div class="playersForSelection">
      <div class="itemsContainer">
        <div class="item" v-for="item in possiblePlayers" :key="item.playerPicture">
          <div class="nameWrapper">
            <div class="favorite">
              <i v-if="!item.favorite" class="fa fa-heart" @click="addOrRemoveFavorite(item)"></i>
              <i
                v-if="item.favorite"
                style="color:red;"
                class="fa fa-heart"
                @click="addOrRemoveFavorite(item)"
              ></i>
            </div>
            <div class="name">
              <h4>{{item.name}} {{item.lastName}}</h4>
            </div>
            <div class="position">
              <p>{{item.stats.position}}</p>
            </div>
          </div>
          <div class="moreDetails">
            <div class="pictureWrapper">
              <img :src="item.playerPicture" />
            </div>
            <div class="clubWrapper">
              <img :src="item.teamCrest" />
              <p>{{item.stats.club}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favorites",

  data() {
    return {};
  },

  computed: {
    possiblePlayers: function() {
      return this.$store.getters.getChoosePlayers;
    },

    position: function() {
      return this.$store.getters.getRequestedPosition.replace(/[0-9]/, "");
    }
  },

  methods: {
    addOrRemoveFavorite: function(player) {
      if (!this.$store.getters.getRemoveFav) {
        this.$store.commit("addToFavorites", player);
        this.$router.push("/").catch(() => {});
      }

      if (this.$store.getters.getRemoveFav && player.favorite == true) {
        this.$store.commit("removeFromFavorites", player);
        this.$forceUpdate();
      }
    },

    sortByPopularity: function() {
      this.possiblePlayers.forEach(player => {
        if (player.popularity === undefined) {
          player.popularity = {};
          player.popularity.percentForCss = 0;
        }
      });

      this.possiblePlayers.sort(
        (a, b) =>
          parseFloat(a.popularity.percentForCss) -
          parseFloat(b.popularity.percentForCss)
      );
    },

    sortByValue: function() {
      this.possiblePlayers.sort(
        (a, b) =>
          parseFloat(parseInt(a.stats.value.replace(/[€.]/g, ""))) -
          parseFloat(parseInt(b.stats.value.replace(/[€.]/g, "")))
      );
    },

    sortByAge: function() {
      this.possiblePlayers.sort(
        (a, b) =>
          parseFloat(calculateAge(a.stats.birthDate)) -
          parseFloat(calculateAge(b.stats.birthDate))
      );

      function calculateAge(birthDate) {
        const ms = Date.now() - Date.parse(birthDate);
        const age = new Date(ms).getUTCFullYear() - 1970;

        return age;
      }
    }
  }
};
</script>

<style scoped>
.fa:hover {
  cursor: pointer;
}

.headers:hover {
  cursor: pointer;
}

.itemsContainer {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  height: 100%;
}

.item {
  display: flex;
  flex-flow: column;
  align-self: center;
  flex: 1;
  max-width: 20vw;
  margin: 0 0.5vw;
}

.playersForSelection {
  position: absolute;
  width: 100%;
  height: 100%;
}

.fa-heart {
  font-size: 22px;
}

.club p {
  font-family: Arial;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 4vh;
  letter-spacing: normal;
  text-align: left;
  vertical-align: middle;
  color: #303030;
}

.item h4 {
  font-family: Arial;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #303030;
}

.position p {
  font-family: Arial;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #54688e;
}

.clubWrapper {
  display: flex;
  box-shadow: 0px 2px 4.9px 0.1px rgba(0, 0, 0, 0.4);
  border: solid 1px rgba(39, 39, 39, 0.5);
  background: #dfdfdf;
  align-items: center;
  justify-content: flex-start;
}

.pictureWrapper img {
  display: block;
  width: 100%;
  height: 35vh;
}

.nameWrapper h4 {
  white-space: nowrap;
}

.nameWrapper {
  display: flex;
  box-shadow: 0px 2px 4.9px 0.1px rgba(0, 0, 0, 0.4);
  border: solid 1px rgba(39, 39, 39, 0.5);
  background: #dfdfdf;
  align-items: center;
  justify-content: space-between;
  padding: 4px 1vw;
}

.headers {
  display: flex;
}

.header {
  background: #dfdfdf;
  flex-grow: 1;
}

.header h3 {
  font-family: Arial;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #232323;
}

.positionHeader h4 {
  font-family: Arial;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #262626;
}

.positionHeader {
  width: 100%;
  background: #dfdfdf;
  padding: 2px;
  text-transform: uppercase;
}

.disallowMenu {
  width: 100%;
  height: 40px;
  background: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

#wrapper {
  position: absolute;
  width: 100%;
  height: calc(100% - 60px);
}

.header {
  background: #cbcbcb;
  width: 33.333%;
}

.header h3 {
  font-family: Arial;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #232323;
}
</style>
