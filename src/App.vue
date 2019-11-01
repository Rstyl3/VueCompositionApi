<template>
  <div id="app">
    <Capacity :value="initial" @getvalue="hdlValue" />
    <SearchBrews style="height: 500px" />
  </div>
</template>

<script>
import SearchBrews from './components/SearchBrews.vue';
import Capacity from './components/Capacity.vue';

export default {
  name: 'app',
  components: {
    SearchBrews,
    Capacity,
  },
  data() {
    return {
      initial: 3,
    };
  },
  methods:{
    hdlValue(v){
      console.log("Got emitted value", v)
      this.initial = v
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
