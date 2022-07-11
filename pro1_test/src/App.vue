<template>

  <FirstScreen/>
  <SecondScreen/>
  <SecondProblem/>

</template>

<script>
import FirstScreen from './components/firstScreen.vue';
import SecondScreen from './components/SecondScreen.vue';
import SecondProblem from './components/SecondProblem.vue';

export default {
  name: 'App',
  components: {
    FirstScreen,
    SecondScreen,
    SecondProblem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
