<script setup>

/*

const projects = [
  {
    name: 'JsonViewer',
    text: 'JsonViewer is Plugin for JetBrains IDEAs (e.g. IntelliJ) with over 30.000 downloads for Quick-Formatting JSON-Data',
    icon: 'bi-filetype-json',
    link: 'https://plugins.jetbrains.com/plugin/14149-json-viewer'
  },
  {
    name: 'Homium',
    text: 'Homium is a Housekeeping-App for Android, specialized for food with an integrated voice assistant',
    icon: 'bi-house-door',
    link: 'https://github.com/MademDevs/Homium'
  },
  {
    name: 'GitlabManager',
    text: 'JsonViewer is Plugin for JetBrains IDEAs (e.g. IntelliJ) with over 30.000 downloads for Quick-Formatting JSON-Data',
    icon: 'bi-git',
    link: 'https://github.com/maaxgr/GitlabManager'
  }
]
 */

const props = defineProps({
  projects: []
});

</script>



<template>
    <section class="services" id="services">
        <div class="max-width">
            <h2 class="title">My projects</h2>
            <div class="serv-content">
              <a class="card" v-for="project of projects" :key="project.name" target="_blank" :href="project.link" >
                <div class="box">
                  <i :class="project.icon"></i>
                  <div class="text">{{ project.name }}</div>
                  <p>{{ project.text }}</p>
                </div>
              </a>
            </div>
        </div>
    </section>
</template>

<style scoped>

/* services section styling */
.title::before,
.teams .title::before{
    background: #fff;
}
.title::after,
.teams .title::after{
    background: #111;
    content: "what i work on";
}

.serv-content {
    display: flex;
    align-items: stretch;
}

.serv-content .card{
    width: calc(33% - 20px);
    background: #222;
    text-align: center;
    border-radius: 6px;
    padding: 50px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.serv-content .card:hover{
    background: var(--app-color-accent);
}
.serv-content .card .box {
    transition: all 0.3s ease;

}
.serv-content .card:hover .box{
    transform: scale(1.05);
}
.serv-content .card i{
    font-size: 50px;
    color: var(--app-color-accent);
    transition: color 0.3s ease;
}
.serv-content .card:hover i{
    color: #fff;
}
.serv-content .card .text{
    font-size: 25px;
    font-weight: 500;
    margin: 10px 0 7px 0;
}

@media (max-width: 947px){

    .serv-content {
        flex-direction: column;
    }

    .serv-content .card {
        width: 100%;
    }

}

</style>
