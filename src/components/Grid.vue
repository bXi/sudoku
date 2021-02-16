<template>
    <div class="grid">
        <SudokuKeyHandler />
        <ul>
            <li v-for="y in width" v-bind:key="y">
                <ul>
                    <Column 
                        v-bind:width="width"
                        v-bind:height="height"
                        v-bind:y="y" />
                </ul>
            </li>
        </ul>
    </div>

    <span class="currentstring">{{ getSudokuString() }}</span>

</template>

<script>
import Column from './Column.vue'
import SudokuKeyHandler from './SudokuKeyHandler.vue'
export default {
    name: 'Grid',
    components: {
        Column,
        SudokuKeyHandler
    },
    methods: {
       getSudokuString: function() {
           return this.sudoku;
       },
    },

    props: {
        width: Number,
        height: Number,
    },
}
</script>

<style scoped>
    .currentstring {
        font-size:0.8em;
        text-align: center;
        width: 100%;
        display: block;
        position: fixed;
        bottom: 10px;
        color: #ddd;
    }
    .currentstring:hover {
        color: #888;
    }
</style>