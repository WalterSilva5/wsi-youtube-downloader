<template>
  <div class="baixados container-fluid">
    <h4>VIDEOS BAIXADOS</h4>
    <wsi-videos/>
  </div>
</template>


<script lang="ts">
import WsiVideos from "./WsiVideos.vue"
export default {
  components:{
    WsiVideos
    }
}
</script>

<style lang="scss" scoped>
.baixados{
  padding: 5px;
  border:1px solid green;
  border-radius: 0 0 5px 5px;
  height: 300px;
}
</style>