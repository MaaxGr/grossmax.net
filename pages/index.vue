<script setup>
import Notification from "~/components/Notification.vue";
import axios from "axios";


const { data: projects } = await useAsyncData( 'projects', async () => {
  return (await axios.get("http://backend.grossmax.net/data/projects?sort_desc=order")).data
});

const { data: technologies } = await useAsyncData( 'technologies', async () => {
  return (await axios.get("https://backend.grossmax.net/data/technologies?sort_desc=percentage")).data
});

</script>

<template>
  <div>
    <IndexSectionHome></IndexSectionHome>
    <IndexSectionAbout></IndexSectionAbout>
    <IndexSectionProjects :projects="projects"></IndexSectionProjects>
    <IndexSectionTechnologies :technologies="technologies"></IndexSectionTechnologies>
    <IndexSectionContact></IndexSectionContact>
    <Notification></Notification>
  </div>
</template>
