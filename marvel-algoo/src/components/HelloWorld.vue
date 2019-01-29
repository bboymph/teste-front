<template>
  <div class="ui background">
    <div class="ui inverted segment">
      <div class="ui inverted secondary pointing menu">
        <a class="active item">
          Personagens
        </a>
        <a class="item">
          Sobre
        </a>
      </div>
    </div>
    <div>
      <router-view/>
    </div>    
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.background {
  background-color: gray;
  min-height: 800px;
}
</style>
