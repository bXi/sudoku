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

export default {
    name: 'Cell',
    mounted() {
        this.emitter.on('deactivate', position => this.deactivate(position) );
        this.emitter.on('enterNumber', number => this.enterNumber(number) );
    },
    methods: {
        charAt: function(x, y) {
            this.char = this.sudoku.substr(((x-1)*this.width + (y-1)), 1);
            return (this.char == '0') ? '' : this.char
        },
        activateCell: function() {
            this.emitter.emit('deactivate', [this.x, this.y, this.isActive]);
            this.isActive = !this.isActive;
        },
        deactivate: function(position) {
            this.isSameBox = false;
            this.isSameRow = false;
            this.isSameCol = false;
            
            if (!position[2] && (Math.ceil(position[0] / 3) == Math.ceil(this.x / 3) && 
                                 Math.ceil(position[1] / 3) == Math.ceil(this.y / 3))) {
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
                var index = (this.x-1)*this.width + (this.y-1);

                this.sudoku = this.sudoku.substring(0, index) + data[0] + this.sudoku.substring(index + 1);
                this.$forceUpdate();
            }
        },
    },
    props: {
        x: Number,
        y: Number,
        width: Number,
        height: Number,
    },
    data() {
        return {
            char: '',
            isStatic: false,
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
