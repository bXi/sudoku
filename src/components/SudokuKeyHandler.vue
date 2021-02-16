<template>
    <Keypress key-event="keydown" :multiple-keys="multiple" @success="enterNumber" />
</template>

<script>
import Keypress from 'vue-keypress'
export default {
    name: 'SudokuKeyHandler',
    components: {
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
    },

}
</script>