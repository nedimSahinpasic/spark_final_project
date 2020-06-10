<template>
  <nav>
    <div id="menu-container">
      <div class="Perfect-Squad" @click="pushHome()">
        <h3>Perfect squad</h3>
      </div>

      <a href="#" class="toggle-button" @click="openMobileMenu=!openMobileMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>

      <div class="mobileMenu" v-if="openMobileMenu">
        <div class="mobileMenuButtons" @click="players(); openMobileMenu=!openMobileMenu">
          <p>Players</p>
        </div>

        <div class="mobileMenuButtons" @click="favorites(); openMobileMenu=!openMobileMenu">
          <p>Favorites</p>
        </div>

        <div class="mobileFormationContariner">
          <div class="formation_dropdown">
            <p @click="pushHome(); openMobileMenu=!openMobileMenu">Formation</p>
            <div class="Formation" @click="helper()">
              <p>{{this.title}}</p>

              <div class="dropDownList" v-show="isOpen">
                <div v-for="(item, i) in object" :key="i" class="dropDownItem">
                  <a
                    href="#"
                    @click="passFormation(i); openMobileMenu=!openMobileMenu"
                    :id="i"
                  >{{ item.formation }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="second_part">
        <div class="Players" @click="players()">
          <p>Players</p>
        </div>

        <div class="Favorites" @click="favorites()">
          <p>Favorites</p>
        </div>

        <div class="formation_dropdown">
          <p @click="pushHome()">Formation</p>
          <div class="Formation" @click="helper()">
            <p>{{this.title}}</p>

            <div class="dropDownList" v-show="isOpen">
              <div v-for="(item, i) in object" :key="i" class="dropDownItem">
                <a href="#" @click="passFormation(i)" :id="i">{{ item.formation }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="spacer"></div>
  </nav>
</template>

<script>
export default {
  name: "Header",

  computed: {
    object: function() {
      return this.$store.getters.getData;
    }
  },

  data() {
    return {
      isOpen: false,
      title: ": none selected",
      arrayForDropColor: [],
      openMobileMenu: false
    };
  },

  methods: {
    passFormation: function(formation) {
      let check = false;

      this.arrayForDropColor.forEach(element => {
        document.getElementById(element).style.color = "";

        if (element == formation) check = true;
      });

      if (check == false) this.arrayForDropColor.push(formation);

      document.getElementById(formation).style.color = "#f09e00";

      this.title = ": " + formation;
      this.$store.commit("storeFormationClass", formation);
      this.$router.push("/").catch(() => {});
    },

    players: function() {
      this.isOpen = false;
      this.$store.commit("playersByPositions");
      this.$router.push("/players").catch(() => {});
    },

    helper: function() {
      this.isOpen = !this.isOpen;
      /* document.getElementById("project_body").style.height =
        "calc(100vh - 40px)";
      this.$router.push("/").catch(() => {}); */
    },

    pushHome: function() {
      /*  document.getElementById("project_body").style.height =
        "calc(100vh - 40px)"; */
      this.$router.push("/").catch(() => {});
    },

    favorites: function() {
      this.isOpen = false;
      /* this.$router.push("/favorites").catch(() => {}); */
    }
  }
};
</script>

<style scoped>
@media (max-width: 600px) {
  .toggle-button {
    display: flex;
  }

  #second_part {
    display: none !important;
  }

  .mobileMenu {
    position: absolute;
    background: #1a5a07;
    opacity: 0.9;
    top: 40px;
    width: 100%;
    height: auto;
    display: flex !important;
    flex-flow: column;
    align-items: center;
  }

  .mobileMenuButtons:hover {
    cursor: pointer;
  }

  .mobileMenuButtons {
    margin-top: 2vh;
  }

  .mobileMenuButtons p {
    color: white;
  }
}

.mobileMenu {
  display: none;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  background: white;
  border-radius: 10px;
}

.toggle-button {
  position: absolute;
  top: 0.6rem;
  right: 1rem;
  flex-direction: column;
  justify-content: space-between;
  width: 31px;
  height: 21px;
}

.dropDownList a:hover {
  background: rgba(1, 1, 1, 0.1);
}

#second_part p:hover {
  background: rgba(1, 1, 1, 0.1);
}

.formation_dropdown:hover {
  cursor: pointer;
}

.formation_dropdown {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
}

.dropDownItem {
  text-align: center;
}

.formation_dropdown p {
  font-family: Arial;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: 40px;
  letter-spacing: normal;
  text-align: left;
  color: #ebebeb;
  font-size: 15px;
  font-style: normal;
}

.Formation {
  font-family: Arial;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: 40px;
  letter-spacing: normal;
  text-align: left;
  color: #ebebeb;
  font-size: 15px;
  font-style: normal;
}

.Formation a {
  color: white;
  text-decoration: none;
}

.Formation p {
  font-style: italic;
}

.dropDownList {
  background-color: #1a5a07;
  opacity: 0.9;
}

#menu-container {
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100vw;
  height: 40px;
  background: #1a5a07;
  opacity: 0.9;
  box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.Perfect-Squad {
  margin-left: 10vw;
  white-space: nowrap;
}

.Perfect-Squad:hover {
  cursor: pointer;
}

.Perfect-Squad h3 {
  font-family: Arial;
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ebebeb;
  line-height: 40px;
}

#second_part {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 30px;
  margin-left: auto;
  margin-right: 10vw;
}

.Players {
  width: 50px;
  height: 14px;
  font-family: Arial;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 40px;
  letter-spacing: normal;
  text-align: left;
  color: #ebebeb;
}

.Players:hover {
  cursor: pointer;
}

.Favorites:hover {
  cursor: not-allowed;
}

.Favorites {
  width: 61px;
  height: 11px;
  font-family: Arial;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 40px;
  letter-spacing: normal;
  text-align: left;
  color: #ebebeb;
}

.Formation-none-selected {
  z-index: 10;
  width: 168px;
  height: 11px;
  font-family: Arial;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: 40px;
  letter-spacing: normal;
  text-align: left;
  color: #ebebeb;
}
.Formation-none-selected .text-style-1 {
  font-size: 15px;
  font-style: normal;
}

#spacer {
  height: 40px;
}
</style>