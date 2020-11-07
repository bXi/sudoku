<template>
    <li v-for="x in height" 
        v-bind:key="x">
        <Cell 
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
        x: Number,
        y: Number,
        width: Number,
        height: Number,
    }
}
</script>
