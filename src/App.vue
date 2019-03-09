<template>
  <div id="app">
    <Depunctuator/>
  </div>
</template>

<script>
import Depunctuator from './components/Depunctuator.vue'

export default {
  name: 'app',
  components: {
    Depunctuator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
