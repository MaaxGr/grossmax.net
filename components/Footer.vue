<script setup lang="ts">

const route = useRoute();
const backgroundColor = ref('');
const textColor = ref('');

onMounted(() => {
    setColors(route.name.toString())
});

watch(() => route.name, () => {
    setColors(route.name.toString())
});

function setColors(page: string) {
    if (page == 'index') {
        backgroundColor.value = '#fff'
        textColor.value = '#000'
    } else {
        backgroundColor.value = '#000'
        textColor.value = '#fff'
    }
}

</script>

<template>
    <footer>
        <span>Created By Max Großmann | <span class="bi bi-c-circle"></span>
            2022 All rights reserved. | <NuxtLink :to="localePath('imprint')">Imprint</NuxtLink> </span>
    </footer>
</template>

<style scoped>
footer {
    background: v-bind(backgroundColor);
    padding: 15px 23px;
    color: v-bind(textColor);
    text-align: center;
}

footer span a {
    color: var(--app-color-accent);
    text-decoration: none;
}

footer span a:hover {
    text-decoration: underline;
}
</style>