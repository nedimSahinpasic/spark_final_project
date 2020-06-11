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
  width: 100% !important;
  height: calc(100vh - 40px);
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
}

#project_body::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>