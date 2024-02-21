<template>
    <h2 class="title" :style="cssVars">{{ props.title }} </h2>
</template>


<script setup lang="ts">

const props = defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
});

const i18n = useI18n();

const cssVars = computed(
    () => {
        return { '--text': JSON.stringify(props.subtitle) }
    }
)

</script>

<style scoped>
.title::after {
    content: var(--text);
}
</style>