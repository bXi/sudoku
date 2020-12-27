<template>
   
    <div class="grid">
   <Keypress key-event="keydown" :multiple-keys="multiple" @success="enterNumber" />
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
import Keypress from 'vue-keypress'
export default {
    name: 'Grid',
    components: {
        Column,
        Keypress,
    },
    data: () => ({
        multiple: [
            {
                keyCode: 49,
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 50, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 51, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 52,
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 53, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 54, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 55,
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 56, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 57, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 48, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 97,
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 98, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 99, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 100,
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 101, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 102, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 103,
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 104, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 105, 
                modifiers: [],
                preventDefault: false,
            },
            {
                keyCode: 96, 
                modifiers: [],
                preventDefault: false,
            },
        ],
    }),
    methods: {
       enterNumber: function(number) {
            this.emitter.emit('enterNumber', [number.event.key]);
       },
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