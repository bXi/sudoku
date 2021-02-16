<template>
    <div>
        <h3>Calculator</h3>
        <div>
            <label><input v-model="sum" @change="onInputChange" placeholder="Sum" type="number" /></label>
            <label><input v-model="cells" @change="onInputChange" placeholder="Cells" type="number" /></label>
        </div>
    </div>
</template>

<script>


export default {
    name: 'KillerCalculator',
    methods: {
        onInputChange() {
            console.log(this.sum * this.cells)
        },
    },
    data() {
        return {
            sum: 45,
            cells: 9,
        }
    }

}
</script>

<style scoped>
    div {
        border: 1px solid #f00;
        position: absolute;
        left: 65%;
    }
</style>
