
<template>
  <Grid 
    v-bind:width="9" 
    v-bind:height="9" />
  <KillerCalculator />
</template>

<script>
import Grid from './components/Grid.vue'
import KillerCalculator from './components/KillerCalculator.vue'

export default {
  name: 'Sudoku',
  components: {
    Grid,
    KillerCalculator
  }
}
</script>