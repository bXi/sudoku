<template>
    <div class="grid">
        <ul>
            <li v-for="y in width" v-bind:key="y">
                <ul>
                    <Column 
                        v-bind:sudoku="sudoku"
                        v-bind:width="width"
                        v-bind:height="height"
                        v-bind:y="y" />
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>

import Column from './Column.vue'

export default {
    name: 'Grid',
    components: {
        Column,
    },
    props: {
        sudoku: String,
        width: Number,
        height: Number,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
}
.grid li {
    list-style: none;
}
.grid > ul {
    display: inline-flex;
    border: 1px solid #000;
}


.grid span {
    margin: 0 auto;
}


</style>
