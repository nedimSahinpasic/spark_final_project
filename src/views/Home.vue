<template>
  <div id="pitch_div">
    <div id="pitch">
      <component :is="formation"></component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  computed: {
    formation: function() {
      return this.$store.getters.getFormation;
    },

    players: function() {
      return this.$store.getters.getPlayersComp;
    }
  }
};
</script>

<style scoped>
@media (max-width: 600px) {
  #pitch_div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85% !important;
    height: 90% !important;
  }
}

#pitch_div {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 80%;
}

#pitch {
  width: 100%;
  height: 100%;
  background: url("../assets/pitch.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
