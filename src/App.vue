<template>
  <div id="app" class="row col-12">
    <div class="downloader col-lg-6">
      <h4>@WALTERSILVA5 YOUTUBE DOWNLOADER</h4>
      <wsi-header />
      <wsi-baixados />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import WsiHeader from "./components/WsiHeader.vue";
import WsiBaixados from "./components/WsiBaixados.vue";
export default defineComponent({
  name: "App",
  components: {
    WsiHeader,
    WsiBaixados,
  },
  methods: {
    add() {
      alert("funciona");
      //console.log(videos)
    },
  },
});
</script>

<style lang="scss">

body, html{
  background-color: black;
}
#app{
  background-color: black;
  text-align: center;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  min-height: 600px;
  .downloader {
    border-radius: 6px;
    border: 1px solid yellowgreen
  }
  h4 {
    font-weight: bold;
    margin-top: 20px;
    color: greenyellow;
  }
}
</style>
