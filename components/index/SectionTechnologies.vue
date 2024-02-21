
<script setup>

const props = defineProps({
  technologies: []
});

</script>

<template>
  <section class="skills" id="skills">
    <div class="max-width">
      <h2 class="title">Technologies</h2>
      <div class="app-layout-flex">
        <div class="column left">
          <p class="mb-4">{{ $t('index.section.technologies.text-1') }}</p>
          <p>{{ $t('index.section.technologies.text-2') }}</p>

        </div>
        <div class="column right">
          <IndexProgressBarInfo v-for="technology of technologies" :key="technology.title" :title="technology.title" :subtitle="technology.subtitle"  :percent="technology.percentage"></IndexProgressBarInfo>

          <!--<IndexProgressBarInfo title="Kotlin Backends" subtitle="RestAPIs, Ktor, Ktorm, Koin" :percent=100></IndexProgressBarInfo>
          <IndexProgressBarInfo title="DevOps" subtitle="Debian, Docker, GitLab" :percent=90></IndexProgressBarInfo>
          <IndexProgressBarInfo title="MySQL" subtitle="CRUD, Grants, Replication" :percent=80></IndexProgressBarInfo>
          <IndexProgressBarInfo title="Vue" subtitle="TypeScript, JavaScript, Composition API" :percent=70></IndexProgressBarInfo>
          <IndexProgressBarInfo title="Android" subtitle="Kotlin, MVVM, Jetpack Compose" :percent=60></IndexProgressBarInfo>
          <IndexProgressBarInfo title="Oracle" subtitle="CRUD, Stored Procedures" :percent=50></IndexProgressBarInfo>
          <IndexProgressBarInfo title="PHP" subtitle="Dashboards, Scripting" :percent=40></IndexProgressBarInfo>-->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.skills .title::after{
    content: "my interests";
}
.skills .app-layout-flex .column {
    width: calc(50% - 30px);
}
.skills .app-layout-flex .left .text{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}
.skills .app-layout-flex .left p{
    text-align: justify;
}
.skills .app-layout-flex .left a{
    display: inline-block;
    background: var(--app-color-accent);
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 16px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid var(--app-color-accent);
    transition: all 0.3s ease;
}
.skills .app-layout-flex .left a:hover{
    color: var(--app-color-accent);
    background: none;
}

@media (max-width: 947px){
  .skills .app-layout-flex {
    gap: 50px;
  }

  .skills .app-layout-flex .column {
    width: 100%;
  }

}

</style>
