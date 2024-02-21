<template>
    <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">{{ $t('index.section.home.text-1') }}</div>
                <div class="text-2">Max Großmann</div>
                <div class="text-3">{{ $t('index.section.home.text-3') }} <span ref="typing"></span></div>
                <a href="#contact">{{ $t('index.section.home.contact') }}</a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

import Typed from 'typed.js';
import {onMounted, ref} from "vue";

const typing = ref(null);

onMounted(() => {
    new Typed(typing.value, {
        strings: ["Developer", "Blogger", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

</script>