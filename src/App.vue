
<template>
  <div id="app">
    <mainPageHeader></mainPageHeader>
    <pageBody></pageBody>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch(
      "fetchData",
      "https://jsonblob.com/api/45874689-08dd-11eb-a3c1-d9239196887e"
    );
  }
};
</script>

<style>
html {
  height: 100%;
}
body {
  min-height: 100%;
}

#app {
  height: 100%;
}

* {
  margin: 0px;
  padding: 0px;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}
</style>
 
