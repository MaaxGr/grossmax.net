<script setup lang="ts">

const props = defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, required: false },
    percent: { type: Number, required: false, default: '' },
});
</script>

<template>
    <div class="bars">
        <div class="info">
            <span>{{ title }} <small class="ml-2">{{ subtitle }}</small> </span>
            <span>{{ percent }}%</span>
        </div>
        <div class="line blaa"></div>
    </div>
</template>

<style scoped>

small {
    font-size: 13px;
}

.bars {
    margin-bottom: 15px;
}

.info {
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    justify-content: space-between;
}

span {
    font-weight: 500;
    font-size: 18px;
}

.line {
    height: 5px;
    width: 100%;
    background: lightgrey;
    position: relative;
}

.line::before {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: var(--app-color-accent);
}

.blaa::before {
    width: v-bind(percent + "%");
}
</style>