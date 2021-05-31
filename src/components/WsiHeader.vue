<template>
  <div id="wsi-header" class="container-fluid">
    <div id="entradas">
        <input type="text" id="link" class="form-control input-field" placeholder="YOUTUBE VIDEO URL" v-model="url">
    </div>
    <button class="btn wsi-btn-primary" @click="catchV">BAIXAR</button>
  </div>
</template>


<script>
  class Video{
    url; 
    constructor(new_url){
      this.url = new_url;
    }
  }
export default {

  methods:{
    catchV(){
      let url_values = this.url.split("youtube");
      //https://img.youtube.com/vi/videID/mqdefault.jpg
      //http://gdata.youtube.com/feeds/api/videos/bvC_0foemLY
      let new_url = url_values.join("ssyoutube");
      let video =  new Video(new_url)
      this.videos.push(video)
      console.log(this.videos)
      window.open(new_url);
    }
  },
  data() {
    return {
      url: "",
      videos: new Array()
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