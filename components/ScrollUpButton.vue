<template>
    <div class="btn" :class="{show: visible}" @click="scrollToTop">
        <i class="bi bi-arrow-up-square"></i>
    </div>
</template>

<script setup lang="ts">

const visible = ref(false);

onMounted(() => {
    updateButtonVisible();

    window.addEventListener("scroll", () => {
        updateButtonVisible();
    });
});

function updateButtonVisible() {
    var curr = window.pageYOffset;
    if (curr > 500) {
        visible.value = true;
    } else {
        visible.value = false;
    }
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

</script>

<style scoped>
.btn {
    position: fixed;
    height: 45px;
    width: 42px;
    background: var(--app-color-accent);
    right: 30px;
    bottom: 10px;
    text-align: center;
    line-height: 45px;
    color: #fff;
    z-index: 9999;
    font-size: 30px;
    border-radius: 6px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
}

.btn.show {
    bottom: 30px;
    opacity: 1;
    pointer-events: auto;
}

.btn:hover {
    filter: brightness(90%);
}
</style>