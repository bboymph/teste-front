<template>
  <div class="margin">

    <div class="ui form">
      <div class="inline field">
        <label>Por qual personagem você procura?</label>
        <input type="text" placeholder="Super Whatever">
      </div>
    </div>

    <h1 class="bg-white"> Personagens </h1>

    <div class="mt">
      <div v-if="quadrinhos.length < 1" class="ui active dimmer">
        <div class="ui text loader">Loading</div>
      </div>
      <div class="ui link cards">
        <div v-for="personagem in quadrinhos" class="card mt">
          <div class="image">
            <img v-bind:src="getImagem(personagem)">
          </div>
          <div class="content">
            <div class="header">{{ personagem.name }}</div>
            <div class="meta">
              <a>Categoria</a>
            </div>
            <div class="description">
              Descrição lorem ipsum dolum siamet.
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">
              Detalhes
            </span>
            <span>
              <i class="extra content"></i>
              Modificado em ...
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import MarvelApi from '@/services/marvelAPI';

  export default {
    name: 'ListCharacters',
    data() {
      return {
        quadrinhos: [],
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
    getImagem: function(quadrinho) {
        if (quadrinho.thumbnail) {
          return quadrinho.thumbnail.path + '/standard_xlarge.jpg';
        }
      }
    },
    created() {
      var self = this
      MarvelApi.getAllComics(10, comics => {
        self.quadrinhos = comics.data.data.results;
        console.log(comics.data.data.results);
      })
      console.log(this.quadrinhos);
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .margin {
    margin: 15px;
  }

  .mt {
    margin-top: 30px;
  }

</style>
