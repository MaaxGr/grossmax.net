
<template>
  <section class="about" id="about">
    <div class="max-width">
      <SectionTitle title="Notion" subtitle="Tipps und Tricks"></SectionTitle>
      <div class="about-content">
        <div class="column left">
          <img src="/images/profile-1.jpg" alt="">
        </div>
        <div class="column right">
          <div class="text">Hi, Max hier!</div>
          <p class="mb-4">Schön, dass du an meinem Vortrag am Einstein1 teilnimmst.</p>
          <p  class="mb-4">
            Trage hier Feedback, Fragen und Anregungen zu Notion oder dem Vortrag ein.
            Ich werde auf die Fragen am Ende des Vortrags eingehen.
          </p>
          <p>
            Name und Nachricht werden im Vortrag ersichtlich sein.
            Die Kontaktinfo wird verschlüsselt abgespeichert und kann nur von mir eingesehen werden.
          </p>
          <p>(Für Rückfragen o.Ä.)</p>

          <form  class="mt-4">
            <div class="field name">
              <input type="text" placeholder="Name (*)" v-model="name" required>
            </div>
            <div class="field textarea">
              <textarea placeholder="Feedback (*)" v-model="feedback" required></textarea>
            </div>
            <div class="field">
              <input  type="text" placeholder="Kontaktinfo (z.B. Email-Adresse oder LinkedIn-Name.)" v-model="contact">
            </div>
            <div class="button-area">
              <button type="button" @click="submitForm()" :disabled="loading">Feedback absenden</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </section>
  <section class="contact" id="contact">
    <div class="max-width">
      <h2 class="title">Weitere Links</h2>
      <ul style="list-style: circle">
        <li><a href="https://thomasjfrank.com/notion/" class="link">Thomas Frank explains Notion</a></li>
        <li><a href="https://www.youtube.com/@augustbradley/playlists" class="link">August Bradley - Notion Life Operating System</a> </li>
      </ul>
    </div>
  </section>
  <Notification></Notification>
</template>

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

/* Fragen */


.app-layout-flex .column {
  width: calc(50% - 30px);
}

.app-layout-flex .text {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.app-layout-flex .left p {
  text-align: justify;
}

.app-layout-flex .left .icons {
  margin: 10px 0;
}

.app-layout-flex .row {
  display: flex;
  height: 65px;
  align-items: center;
}

.app-layout-flex .row .info {
  margin-left: 30px;
}

.app-layout-flex .row i {
  font-size: 25px;
  color: var(--app-color-accent);
}

.app-layout-flex .info .head {
  font-weight: 500;
}

.app-layout-flex .info .sub-title {
  color: rgb(180, 180, 180);
}

.right form .fields {
  display: flex;
}

.right form .field,
.right form .fields .field {
  height: 45px;
  width: 100%;
  margin-bottom: 15px;
}

.right form .textarea {
  height: 80px;
  width: 100%;
}

input, textarea {
  color: #000;
}

.right form .field input,
.right form .textarea textarea {
  height: 100%;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 6px;
  outline: none;
  padding: 0 15px;
  font-size: 17px;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
}

.right form .field input:focus,
.right form .textarea textarea:focus {
  border-color: #b3b3b3;
}

.right form .textarea textarea {
  padding-top: 10px;
  resize: none;
}

.right form .button-area {
  display: flex;
  align-items: center;
}


</style>
<script setup lang="ts">

import {sendNotification} from "~/scripts/store";
import Notification from "~/components/Notification.vue";

const name = ref('');
const feedback = ref('');
const contact = ref('');
const loading = ref(false);

async function submitForm() {

  try {
    if (!name.value || !feedback.value) {
      sendNotification({
        message: 'Bitte füllen sie die Felder Name und Feedback aus!',
        type: 'error'
      })
      return;
    }

    sendNotification({
      message: 'Feedback wird gesendet...',
      type: 'success'
    })

    loading.value = true;
    await $fetch('https://backend.grossmax.net/notion/feedback', {
      method: 'POST',
      body: {
        name: name.value,
        contactInfo: contact.value,
        message: feedback.value
      }
    })
    name.value = '';
    feedback.value = '';
    contact.value = '';
    sendNotification({
      message: 'Feedback erfolgreich versendet',
      type: 'success'
    })

  } catch (error) {
    sendNotification({
      message: 'Fehler beim Senden des Feedbacks',
      type: 'error'
    })
  } finally {
    console.log('finally')
    loading.value = false;
  }




}


</script>