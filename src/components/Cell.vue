<template>
    <span
        :class="{ active: isActive }"

        v-on:click="activateCell"
        v-bind:col="y"

        v-bind:row="x">
        {{ charAt(x, y) }}
    </span>
</template>

<script>
export default {
    name: 'Cell',
    methods: {
        charAt: function(x, y) {
            var char = this.sudoku.substr(((x-1)*this.width + (y-1)), 1);
            return (char == '0') ? '' : char
        },
        activateCell: function() {
            this.isActive = !this.isActive;
        }
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
            hasError: false,
            activeClass: 'active',
            errorClass: 'text-danger',
        }
    }
}
</script>

<style scoped>
.grid span:hover {
    background-color: #02487322;
}

.grid span.active {
    background-color: #02487355;
}

.grid span {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
}


</style>
