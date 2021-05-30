<template>
  <div id="app" class="row col-12">
    <div class="downloader col-sm-6">
      <h4>WSI YOUTUBE DOWNLOADER</h4>
      <wsi-header/>
      <wsi-baixados/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import "./../node_modules/bootstrap/scss/bootstrap.scss";

import WsiHeader from "./components/WsiHeader.vue";
import WsiBaixados from "./components/WsiBaixados.vue"
import "./assets/styles.scss";
export default defineComponent({
  name: "App",
  components: {
    WsiHeader,
    WsiBaixados
  },
});
</script>

<style lang="scss">
#app {
  text-align: center;
  color: white;
  font-weight: bold;
  display:flex;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 5px;
  min-height: 600px;
  .downloader{
    border-radius:6px;
    background-color:black;
  }
  h4{
    font-weight: bold;
    margin-top: 20px;
    color: greenyellow;
  }
}
</style>
