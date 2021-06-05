<template>
  <div class="videos">
    <table class="table table-light">
      <tbody>
        <template v-for="video in videos_local" :key="video">
          <tr>
            <th scope="row">{{video}}</th>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      videos_local: {},
    };
  },
  computed: {
    ...mapState({
      videos: "videos",
    }),
  },
  watch: {
    videos(newValue) {
      console.log("mudou")
      this.videos_local = newValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.videos {
  border: 1px solid green;
  border-radius: 0 0 5px 5px;
  height: 80%;
}
</style>
