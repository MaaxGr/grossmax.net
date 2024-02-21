<template>
    <section class="about" id="about">
        <div class="max-width">
            <SectionTitle :title="$t('index.section.about.title')" :subtitle="$t('index.section.about.subtitle')"></SectionTitle>
            <div class="about-content">
                <div class="column left">
                    <img src="/images/profile-1.jpg" alt="">
                </div>
                <div class="column right">
                    <div class="text">{{ $t('index.section.about.header') }}</div>
                    <p class="mb-4">{{ $t('index.section.about.p-1') }}</p>
                    <p v-html="$t('index.section.about.p-2')"></p>
                    <a class="button" href="https://www.linkedin.com/in/grossmannmax" target="_blank">{{
                    $t('index.section.about.cv') }} <i class="ml-1 bi bi-linkedin"></i></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

.about-content .left {
    width: 45%;
}

.about-content .left img {
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 6px;
}

.about-content .right {
    width: 55%;
}

.about-content .right .text {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
}

.about-content .right .text span {
    color: var(--app-color-accent);
}

.about-content .right p {
    text-align: justify;
}

.about-content .right a.button {
    display: inline-block;
    background: var(--app-color-accent);
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid var(--app-color-accent);
    transition: all 0.3s ease;
}

.about-content .right a.button:hover {
    color: var(--app-color-accent);
    background: none;
}


@media (max-width: 947px) {
    .about-content .left {
        width: 100%;
    }

}

@media (min-width: 947px) {
  .right {
    padding-left: 18px;
  }
}


</style>