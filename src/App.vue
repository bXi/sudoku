
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