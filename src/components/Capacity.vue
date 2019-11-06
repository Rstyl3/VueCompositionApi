<template>
  <div class="capacity-wrapper">
    <h2>Emitting event</h2>
    <p>Capacity: {{ state.capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
    <button @click="reset()">Reset</button>
  </div>
</template>

<script>
import { ref,reactive, watch, toRefs } from '@vue/composition-api';

export default {
  props:['value'],
  setup(props, context) { //context is used instead of this.$
    const state = reactive({
      capacity : props.value
    })
    watch(() => { //to update state data from props
       state.capacity = props.value
    })
    function increaseCapacity() {
      state.capacity++;
      console.log(state.capacity)
      context.emit('getvalue', state.capacity)
    }
    function reset(){
      context.emit('getvalue', 0)
    }
    return { state , increaseCapacity, reset };
  },
};


</script>

<style scoped>
.capacity-wrapper{
 width: 100%;
 padding: 10px
}
</style>