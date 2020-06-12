<template>
  <div id="wrapper">
    <div class="button_exit" @click="closePlayerDetails()">
      <p>X</p>
    </div>
    <div id="playerDetailsWrapper">
      <div id="playerBasic">
        <div id="playerName">
          <h4 id="name">{{player.name}} {{player.lastName}}</h4>
          <h4
            id="position"
            :style="{ background:'#' + calculateColor(player)}"
          >{{player.stats.position}}</h4>
          <div id="starsOuter">
            <i
              class="fas fa-star"
              @mouseenter="changeWidth(20)"
              @mouseleave="backToDef(player)"
              @click="givePopularity(player, 1)"
            ></i>
            <i
              class="fas fa-star"
              @mouseenter="changeWidth(40)"
              @mouseleave="backToDef(player)"
              @click="givePopularity(player, 2)"
            ></i>
            <i
              class="fas fa-star"
              @mouseenter="changeWidth(60)"
              @mouseleave="backToDef(player)"
              @click="givePopularity(player, 3)"
            ></i>
            <i
              class="fas fa-star"
              @mouseenter="changeWidth(80)"
              @mouseleave="backToDef(player)"
              @click="givePopularity(player, 4)"
            ></i>
            <i
              class="fas fa-star"
              @mouseenter="changeWidth(100)"
              @mouseleave="backToDef(player)"
              @click="givePopularity(player, 5)"
            ></i>

            <div id="starsInner">
              <i
                class="fas fa-star"
                @mouseenter="changeWidth(20)"
                @mouseleave="backToDef(player)"
                @click="givePopularity(player, 1)"
              ></i>
              <i
                class="fas fa-star"
                @mouseenter="changeWidth(40)"
                @mouseleave="backToDef(player)"
                @click="givePopularity(player, 2)"
              ></i>
              <i
                class="fas fa-star"
                @mouseenter="changeWidth(60)"
                @mouseleave="backToDef(player)"
                @click="givePopularity(player, 3)"
              ></i>
              <i
                class="fas fa-star"
                @mouseenter="changeWidth(80)"
                @mouseleave="backToDef(player)"
                @click="givePopularity(player, 4)"
              ></i>
              <i
                class="fas fa-star"
                @mouseenter="changeWidth(100)"
                @mouseleave="backToDef(player)"
                @click="givePopularity(player, 5)"
              ></i>
            </div>
          </div>
          <img :src="player.formationPicture" />
        </div>

        <div id="playerInfo">
          <div id="country">
            <p>{{player.nationality}}</p>
            <img :src="player.nationalityFlag" />
          </div>
          <div id="club">
            <p>{{player.stats.club}}</p>
            <img :src="player.teamCrest" />
          </div>
          <div id="birthDate">
            <p>Birth</p>
            <p>{{player.stats.birthDate}}</p>
          </div>
          <div id="age">
            <p>Age</p>
            <p>{{player.stats.age}}</p>
          </div>
          <div id="preferredPositions">
            <p>Preffered positions</p>
            <p>{{player.stats.position}}</p>
          </div>
          <div id="positions">
            <p>Positions</p>
            <div class="allPositionsContainer">
              <div class="allPositions" v-for="item in player.stats.posiblePositions" :key="item">
                <p>{{item}}</p>
              </div>
            </div>
          </div>
          <div id="foot">
            <p>Weak foot</p>
            <p>{{player.stats.weakFoot}}</p>
          </div>
          <div id="value">
            <p>Value</p>
            <p>{{player.stats.value}}</p>
          </div>
        </div>
      </div>

      <div id="playerSkills">
        <div
          class="skillsWrapper"
          v-for="playerSkill in player.playerSkills"
          v-bind:key="playerSkill.name"
        >
          <div class="skillsHeader">
            <h4>{{playerSkill.name}}</h4>
          </div>

          <div class="skillItems" v-for="skill in playerSkill.skills" v-bind:key="skill.name">
            <div class="skill">
              <div id="skill_name">
                <p>{{skill.name}}</p>
              </div>
              <div id="skill_bar">
                <div
                  id="skill_per"
                  :style="{ width: skill.value + '%', background:'#' + calculateColor(player)}"
                ></div>
              </div>
              <div id="skill_per_num">
                <p>{{skill.value}}</p>
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
  name: "playerDetails",

  computed: {
    player: function() {
      return this.$store.getters.getPlayerDetailsData;
    }
  },

  methods: {
    closePlayerDetails: function() {
      this.$store.commit("closePlayerDetails", false);
    },

    changeWidth(percent) {
      document.getElementById("starsInner").style.width = percent + "%";
      this.$forceUpdate();
    },

    backToDef(player) {
      if (player.popularity != undefined) {
        let percent = null;
        player.popularity.grades.forEach(grade => {
          percent += grade;
        });

        percent = percent / player.popularity.grades.length;
        percent = percent * 20;
        player.popularity.percentForCss = percent;

        document.getElementById("starsInner").style.width =
          player.popularity.percentForCss + "%";
      } else document.getElementById("starsInner").style.width = 0 + "%";
    },

    givePopularity(player, popularityGrade) {
      if (player.popularity === undefined) {
        player.popularity = {};
      }
      if (player.popularity.grades === undefined) {
        player.popularity.grades = [];
      }
      player.popularity.grades.push(popularityGrade);
      this.$forceUpdate();
    },

    calculateColor(player) {
      let position = player.stats.position;

      if (position === "GK") {
        return "54688e";
      }

      if (position === "CB" || position === "LB" || position === "RB") {
        return "5b2f3b";
      }

      if (
        position === "DM" ||
        position === "CM" ||
        position === "LM" ||
        position === "RM" ||
        position === "AM"
      ) {
        return "589a5f";
      }

      if (position === "CF" || position === "LW" || position === "RW") {
        return "ced02e";
      }
    }
  },

  mounted() {
    if (this.player.popularity != undefined) {
      let percent = null;

      this.player.popularity.grades.forEach(grade => {
        percent += grade;
      });

      percent = percent / this.player.popularity.grades.length;
      percent = percent * 20;
      this.player.popularity.percentForCss = percent;

      document.getElementById("starsInner").style.width =
        this.player.popularity.percentForCss + "%";
    } else {
      document.getElementById("starsInner").style.width = 0 + "%";
    }
  }
};
</script>

<style scoped>
@media (max-width: 600px) {
  .allPositionsContainer p {
    margin-left: 4px !important;
  }

  img {
    justify-self: center;
  }

  #position {
    justify-self: center !important;
  }

  #starsOuter {
    justify-self: center !important;
  }

  #playerName {
    display: grid;
    grid-template-columns: 1fr !important;
    grid-template-rows: 1fr 1fr 1fr !important;
    grid-column-gap: 30px !important;
  }

  #name {
    white-space: normal !important;
  }

  #playerDetailsWrapper {
    width: 100% !important;
    height: 100% !important;
    flex-direction: column !important;
  }

  .button_exit {
    position: relative;
    top: 1% !important;
    left: 93% !important;
    z-index: 1000;
    display: inline-block;
    border-radius: 50%;
    width: 4vh;
    height: 4vh;
    text-align: center;
    color: #727373;
    border: solid 1px rgba(39, 39, 39, 0.65);
  }
}

#playerSkills::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

#playerBasic::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.allPositionsContainer p {
  margin-left: 0.2vw;
}

.allPositionsContainer {
  display: flex;
}

#country p {
  text-transform: capitalize;
}

.button_exit:hover {
  cursor: pointer;
}

.button_exit p {
  font-family: Arial;
  font-size: 2vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 4vh;
  letter-spacing: normal;
  text-align: center;
}

.button_exit {
  position: relative;
  top: 13.3%;
  left: 74%;
  z-index: 1000;
  display: inline-block;
  border-radius: 50%;
  width: 4vh;
  height: 4vh;
  text-align: center;
  color: #727373;
  border: solid 1px rgba(39, 39, 39, 0.65);
}

.skill p {
  text-transform: capitalize;
}

.skill {
  margin-bottom: 0.5vh;
}

.skillItems {
  display: flex;
  flex-direction: column;
  padding: 0.2vh 1vw;
}

#skill_name {
  flex: 0 0 32%;
}

#skill_per_num {
  flex: 0 0 3%;
  padding-left: 0.1vw;
  align-self: center;
}

#skill_per_num p {
  text-align: end;
}

#skill_bar {
  height: 6px;
  background-color: rgba(0, 0, 0, 0.3);
  justify-self: end;
  align-self: center;
  flex: 0 0 60%;
}

#skill_per {
  height: 6px;
  border: solid 1px rgba(39, 39, 39, 0.1);
  flex: 0 0 5%;
}

.skill {
  width: 100%;
  display: flex;
}

.skillsWrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 1vh;
}

.skillsHeader {
  margin-bottom: 1vh;
  width: 100%;
  height: 3vh;
  background: #eaeae8;
  padding-left: 1vw;
}

.skillsHeader h4 {
  text-transform: capitalize;
  font-family: Arial;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3vh;
  letter-spacing: normal;
  text-align: left;
  color: #434343;
}

#playerSkills {
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

#playerSkills p {
  font-family: Arial;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #434343;
}

#playerInfo p {
  height: 12px;
  font-family: Arial;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #434343;
  white-space: nowrap;
}

#starsOuter {
  position: relative;
  display: inline-block;
  align-self: center;
  justify-self: right;
  color: #b8b8b8;
}

#starsOuter:hover {
  cursor: pointer;
}

#starsInner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0%;
  color: #eaba07;
}

#playerInfo {
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
}

#playerInfo > div {
  margin: 6px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}

#playerName {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row: 1fr 1fr;
  grid-column-gap: 10px;
}

#playerName > img {
  border-radius: 50%;
}

#position {
  width: 40px;
  height: 40px;
  font-family: Arial;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  display: flex;
  background: #589a5f;
}

#name {
  font-family: Arial;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #292929;
  white-space: nowrap;
  align-self: center;
}

.far {
  justify-self: right;
}

#wrapper {
  min-width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

#playerDetailsWrapper {
  background: #dfdfdf;
  width: 60%;
  height: 75%;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  position: absolute;
  display: flex;
  padding: 5vh;
}

#playerBasic {
  overflow: auto;
  flex: 1;
  padding: 3vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#playerSkills {
  padding: 3vh;
  flex: 1;
  border-left: 1px solid rgba(0, 0, 0, 0.5);
}
</style>
