<template>
  <div id="wrapper">
    <playerDetails v-if="playerDetailsComp"></playerDetails>
    <div class="headers">
      <div class="header">
        <h3>GK</h3>
      </div>
      <div class="header">
        <h3>DEF</h3>
      </div>
      <div class="header">
        <h3>MID</h3>
      </div>
      <div class="header">
        <h3>ATT</h3>
      </div>
    </div>

    <div class="players_wrapper">
      <div class="gk_wrapper wrappersec">
        <div class="mobileHeader">
          <div class="headers">
            <div class="mobileHeader">
              <h3>GK</h3>
            </div>
          </div>
        </div>

        <div class="gkWrapperItems">
          <div class="item" v-for="item in goalkeepers" :key="item.playerPicture">
            <div class="nameWrapper" @click="show_hide(item.playerPicture)">
              <div class="favorite">
                <i v-if="item.favorite" style="color:red;" class="fa fa-heart"></i>
                <i v-if="!item.favorite" class="fa fa-heart"></i>
              </div>
              <div class="name">
                <h4>{{item.name}} {{item.lastName}}</h4>
              </div>
              <div class="position">
                <p>{{item.stats.position}}</p>
              </div>
            </div>
            <div class="moreDetails" :id="item.playerPicture" @click="details(item)">
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

      <div class="def_wrapper wrappersec">
        <div class="mobileHeader">
          <div class="headers">
            <div class="mobileHeader">
              <h3>DEF</h3>
            </div>
          </div>
        </div>
        <div class="defWrapperItems">
          <div class="item" v-for="item in defenders" :key="item.playerPicture">
            <div class="nameWrapper" @click="show_hide(item.playerPicture)">
              <div class="favorite">
                <i v-if="item.favorite" style="color:red;" class="fa fa-heart"></i>
                <i v-if="!item.favorite" class="fa fa-heart"></i>
              </div>
              <div class="name">
                <h4>{{item.name}} {{item.lastName}}</h4>
              </div>
              <div class="position">
                <p style="color:#5a2e3a">{{item.stats.position}}</p>
              </div>
            </div>
            <div class="moreDetails" :id="item.playerPicture" @click="details(item)">
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

      <div class="mid_wrapper wrappersec">
        <div class="mobileHeader">
          <div class="mobileHeader">
            <h3>MID</h3>
          </div>
        </div>
        <div class="midWrapperItems">
          <div class="item" v-for="item in midfielders" :key="item.playerPicture">
            <div class="nameWrapper" @click="show_hide(item.playerPicture)">
              <div class="favorite">
                <i v-if="item.favorite" style="color:red;" class="fa fa-heart"></i>
                <i v-if="!item.favorite" class="fa fa-heart"></i>
              </div>
              <div class="name">
                <h4>{{item.name}} {{item.lastName}}</h4>
              </div>
              <div class="position">
                <p style="color: #429452">{{item.stats.position}}</p>
              </div>
            </div>
            <div class="moreDetails" :id="item.playerPicture" @click="details(item)">
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

      <div class="att_wrapper wrappersec">
        <div class="mobileHeader">
          <div class="headers">
            <div class="mobileHeader">
              <h3>ATT</h3>
            </div>
          </div>
        </div>
        <div class="attWrapperItems">
          <div class="item" v-for="item in attackers" :key="item.playerPicture">
            <div class="nameWrapper" @click="show_hide(item.playerPicture)">
              <div class="favorite">
                <i v-if="item.favorite" style="color:red;" class="fa fa-heart"></i>
                <i v-if="!item.favorite" class="fa fa-heart"></i>
              </div>
              <div class="name">
                <h4>{{item.name}} {{item.lastName}}</h4>
              </div>
              <div class="position">
                <p style="color: #ced02e">{{item.stats.position}}</p>
              </div>
            </div>
            <div class="moreDetails" :id="item.playerPicture" @click="details(item)">
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
  </div>
</template>

<script>
export default {
  name: "Players",

  data() {
    return {};
  },

  computed: {
    goalkeepers: function() {
      return this.$store.getters.getGK;
    },

    defenders: function() {
      return this.$store.getters.getDEF;
    },

    midfielders: function() {
      return this.$store.getters.getMIDS;
    },

    attackers: function() {
      return this.$store.getters.getATTS;
    },

    playerDetailsComp: function() {
      return this.$store.getters.getPlayerDetailsShow;
    }
  },

  methods: {
    details(player) {
      const show = true;
      this.$store.commit("storePlayerRunComp", { player, show });
    },

    show_hide(item) {
      if (document.getElementById(item).style.display == "block")
        document.getElementById(item).style.display = "none";
      else document.getElementById(item).style.display = "block";
    }
  }
};
</script>

<style scoped>
@media (max-width: 600px) {
  .item {
    margin-bottom: 3px !important;
  }

  .header {
    display: none !important;
  }

  .mobileHeader {
    display: block !important;
    background: #dfdfdf;
    flex-grow: 1;
    box-shadow: 0px 2px 4.9px 0.1px rgba(0, 0, 0, 0.4);
  }

  .mobileHeader h3 {
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

  .players_wrapper {
    flex-direction: column;
    justify-content: center !important;
  }

  .wrappersec {
    min-width: 80% !important;
    align-self: center !important;
  }
}

.mobileHeader {
  display: none;
}

.moreDetails {
  display: none;
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

.item {
  margin-bottom: 2vh;
}

.item:hover {
  cursor: pointer;
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
  max-width: 100%;
  max-height: 100%;
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

.players_wrapper {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 4vh;
  justify-content: space-around;
}
.wrappersec {
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 20%;
  margin-bottom: 20px;
}

#wrapper {
  width: 80%;
  margin: auto;
  height: 100%;
}

.headers {
  display: flex;
}

.headers:hover {
  cursor: default;
}

.header {
  background: #dfdfdf;
  flex-grow: 1;
  box-shadow: 0px 2px 4.9px 0.1px rgba(0, 0, 0, 0.4);
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
