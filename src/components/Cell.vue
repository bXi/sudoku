<template>
    <span
    ref="cellx"
    :class="{ 
        active: isActive, 
        sameCol: isSameCol, 
        sameRow: isSameRow, 
        sameBox: isSameBox, 
        sameNumber: isSameNumber,  
    }"
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
        if (this.char > 0) {
            this.isStatic = true;
        }
    },
    methods: {
        charAt: function(x, y) {
            this.char = this.sudoku.substr(((x-1)*this.width + (y-1)), 1);
            return (this.char == '0') ? '' : this.char
        },
        activateCell: function() {
            this.isActive = !this.isActive;

            let data = {};
            data.x = this.x;
            data.y = this.y;
            data.isActive = this.isActive;
            data.char = this.char;

            this.emitter.emit('deactivate', data);
        },
        deactivate: function(data) {
            this.isSameBox = false;
            this.isSameRow = false;
            this.isSameCol = false;
            this.isSameNumber = false;
            
            if (data.isActive) {
                if (Math.ceil(data.x / 3) == Math.ceil(this.x / 3) && 
                    Math.ceil(data.y / 3) == Math.ceil(this.y / 3)) {
                    this.isSameBox = true;
                }

                if (this.char > 0 && data.char == this.char) {
                    this.isSameNumber = true;
                }

                if (data.x == this.x) {
                    this.isSameRow = true;
                }

                if (data.y == this.y) {
                    this.isSameCol = true;
                }
            }

            if (!(data.x == this.x && data.y == this.y)) {
                this.isActive = false;
            }

        },
        enterNumber: function(number) {
            if (this.isActive && !this.isStatic) {
                this.char = number[0];
                var index = (this.x-1)*this.width + (this.y-1)
                this.sudoku = this.sudoku.substring(0, index) + number[0] + this.sudoku.substring(index + 1)
                
                let data = {};
                data.x = this.x;
                data.y = this.y;
                data.isActive = true;
                data.char = this.char;

                this.emitter.emit('deactivate', data);

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
            isSameNumber: false,
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
