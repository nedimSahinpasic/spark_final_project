
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
      "https://jsonblob.com/api/jsonBlob/50fd5df9-8283-11ea-a9e3-ab457510f846"
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
 