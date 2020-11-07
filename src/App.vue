<!--
 1  2 3  
  2  3 4 
 5      6
  47   5 
   1    3
 7  68   
3    4 9 
   6  1 4
  6      
-->
<template>
  <Grid 
    v-bind:width="9" 
    v-bind:height="9" />
</template>

<script>
import Grid from './components/Grid.vue'

export default {
  name: 'Sudoku',
  components: {
    Grid
  }
}
</script>