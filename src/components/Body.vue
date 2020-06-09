<template>
  <div id="project_body">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "projectBody"
};
</script>

<style scoped>
#project_body {
  background: url("../assets/background.jpg");
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: 100% 100%;
  max-width: 100% !important;
  min-height: calc(100vh - 40px);
  position: relative;
}
</style>