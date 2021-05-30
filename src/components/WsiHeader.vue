<template>
  <div id="wsi-header" class="container-fluid">
    <div id="entradas">
        <input type="text" id="link" class="form-control" placeholder="YOUTUBE VIDEO URL">
    </div>
    <button class="btn">BAIXAR</button>
  </div>
</template>


<script lang="ts">
export default {
  
}
</script>

<style lang="scss" scoped>
div{padding: 5px;}
#wsi-header{
  margin-top: 10px;
  border:1px solid green;
  border-radius: 5px 5px 0 0;
  height: 130px;
  #entradas{
    margin-top: 15px;
  }
  button{
    font-weight: bold;
    background-color: greenyellow;
    border:1px solid green;
    float:right;
    margin-top: 10px;
  }
}
</style>