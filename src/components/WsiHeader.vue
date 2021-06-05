<template>
  <div id="wsi-header" class="container">
    <div id="entradas">
        <input type="text" id="link" class="form-control input-field" placeholder="YOUTUBE VIDEO URL" v-model="url">
    </div>
  <div class="container pr-4">
        <button class="btn wsi-btn-primary" @click="catch_video">BAIXAR</button>
  </div>
  </div>
</template>


<script>
export default {

  methods:{
    catch_video(){
      let url_values = this.url.split("youtube");
      //https://img.youtube.com/vi/videID/mqdefault.jpg
      let new_url = url_values.join("ssyoutube");
      window.open(new_url);

    this.$store.dispatch("addVideo", this.url)
    this.url=""
    }
  },
  data() {
    return {
      url: "",
    }
  },
}
</script>

<style lang="scss" scoped>
div{padding: 5px;}
#wsi-header{
  margin-top: 10px;
  border:1px solid green;
  border-radius: 5px 5px 0 0;
  height: 130px;
  input{
    width: 98%;
    border-radius: 5px;
    background-color: white;
    padding-inline: 5px;
  }
  #entradas{
    margin-top: 15px;
  }
  button{
    float:right;
    margin-right:5px; 
  }
}
</style>