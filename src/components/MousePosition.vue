<template>
  <div>
      Mouse Position: x {{ x }} / y {{ y }}
  </div>
</template>

<script>
import useMousePosition from "../composables/use-mouse-position";

export default {
  setup(){
      const {x,y} = useMousePosition()
      return {x , y}
  }
}
</script>

<style>

</style>