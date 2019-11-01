<template>
  <div class="capacity-wrapper">
    <h2>Emitting event</h2>
    <p>Capacity: {{ value }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
    <button @click="reset()">Reset</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  props:['value'],
  setup(props, context) { //context is used instead of this.$
    const capacity = ref(props.value);

    function increaseCapacity() {
      capacity.value++;
      context.emit('getvalue', capacity.value)
    }
    function reset(){
      context.emit('getvalue', 0)
    }
    return { capacity, increaseCapacity, reset };
  },
};


</script>

<style scoped>
.capacity-wrapper{
 width: 100%;
 padding: 10px
}
</style>