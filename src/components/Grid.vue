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
        ],
    }),
    methods: {
       enterNumber: function(number) {
            this.emitter.emit('enterNumber', [number.event.key]);
       }, 
    },

    props: {
        width: Number,
        height: Number,
    },
}
</script>