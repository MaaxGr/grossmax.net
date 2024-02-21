<script lang="ts">
import { defineComponent } from '#imports'
export default defineComponent({
    props: {
        code: {
            type: String,
            default: ''
        },
        language: {
            type: String,
            default: null
        },
        filename: {
            type: String,
            default: null
        },
        highlights: {
            type: Array as () => number[],
            default: () => []
        }
    }
})
</script>
    
<template>
    <div class="container">
        <slot />
    </div>
</template>
    
<style>
.container {
    background: #1e1e1e;
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    color: rgb(224, 224, 224);
    padding: 10px;
    margin-bottom: 10px;
}

pre code .line {
    display: block;
    min-height: 1rem;
}

p, ul {
    margin-bottom: 10px;
}

</style>