<template>
    <span
        ref="cellx"
        :class="{ active: isActive, sameCol: isSameCol, sameRow: isSameRow, sameBox: isSameBox }"
        v-on:click="activateCell"
        v-bind:col="y"
        v-bind:row="x">
        {{ charAt(x, y) }}
    </span>
</template>

<script>

import mitt from 'mitt'

const emitter = mitt()




export default {
    name: 'Cell',
    mounted() {
        emitter.on('deactivate', position => this.deactivate(position) );
    },
    methods: {
        charAt: function(x, y) {
            var char = this.sudoku.substr(((x-1)*this.width + (y-1)), 1);
            return (char == '0') ? '' : char
        },
        activateCell: function() {
            emitter.emit('deactivate', [this.x, this.y, this.isActive]);
            this.isActive = !this.isActive;
        },
        deactivate: function(position) {
            this.isSameBox = false;
            this.isSameRow = false;
            this.isSameCol = false;
            

            if (!position[2] && (Math.ceil(position[0] / 3) == Math.ceil(this.x / 3) && Math.ceil(position[1] / 3) == Math.ceil(this.y / 3))) {
                this.isSameBox = true;
            }




            if (!position[2] && position[0] == this.x) {
                this.isSameRow = true;
            }

            if (!position[2] && position[1] == this.y) {
                this.isSameCol = true;
            }

            if (!(position[0] == this.x && position[1] == this.y)) {
                this.isActive = false;
            }

        },
        enterNumber: function(data) {
            if (this.isActive) {
                data
            }
        },
    },
    props: {
        sudoku: String,
        x: Number,
        y: Number,
        width: Number,
        height: Number,
    },
    data() {
        return {
            isActive: false,
            isSameBox: false,
            isSameRow: false,
            isSameCol: false,
            hasError: false,
            activeClass: 'active',
            errorClass: 'text-danger',
        }
    }
}
</script>
