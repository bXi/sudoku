<template>
    <li v-for="x in height" 
        v-bind:key="x">
        <Cell 
            v-bind:sudoku="sudoku"
            v-bind:width="width"
            v-bind:height="height"
            v-bind:x="x"
            v-bind:y="y" />
    </li>
</template>

<script>

import Cell from './Cell.vue'


export default {
    name: 'Column',
    components: {
        Cell,
    },
    props: {
        sudoku: String,
        x: Number,
        y: Number,
        width: Number,
        height: Number,
    }
}
</script>

<style scoped>
.grid > ul > li > ul > li {
    display: table;
    align-items: center;
    width: 40px;
    height: 40px;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
}

.grid > ul > li:nth-child(3n+0) > ul > li{
    border-right: 1px solid #888;
    
}
.grid > ul > li > ul > li:nth-child(3n+0) {
    border-bottom: 1px solid #888;
}

.grid > ul > li:nth-child(9) > ul > li{
    border-right: none;
}
.grid > ul > li > ul > li:nth-child(9) {
    border-bottom: none;
}


</style>
