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