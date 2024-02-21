<template>
    <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="app-layout-flex">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <div class="icons">
                        <div class="row">
                            <i class="bi bi-person"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Max Großmann</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="bi bi-geo"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Hof, Germany</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="bi bi-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">hey@maax.gr</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form @submit="submitFeedback">
                        <div class="fields">
                            <div class="field name">
                                <input v-model="name" type="text" placeholder="Name" required>
                            </div>
                            <div class="field email">
                                <input v-model="mail" type="email" placeholder="Email" required>
                            </div>
                        </div>
                        <div class="field textarea">
                            <textarea v-model="message" cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>>

<script setup lang="ts">

import axios from "axios";
import {sendNotification} from "~/scripts/store";
import {ref} from "vue";
import {useI18n} from "vue-i18n";

const i18n = useI18n();

const name = ref('')
const mail = ref('')
const message = ref('')


async function submitFeedback(event: any) {
  event.preventDefault()

  const data = {
    name: name.value,
    mail: mail.value,
    message: message.value
  }

  const response = await axios.post('https://backend.grossmax.net/feedback', data)
  if (response.status == 200) {
    name.value = ''
    mail.value = ''
    message.value = ''



    sendNotification({
      message: i18n.t('index.section.contact.notification.success.message'),
      type: 'success'
    })
  } else {
    sendNotification({
      message: i18n.t('index.section.contact.notification.error.message'),
      type: 'error'
    })
  }
}

</script>

<style scoped>
.title::before{
    background: #fff;
}

.title::after {
    background: #111;
    content: "get in touch";
}

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

.right form .name {
    margin-right: 10px;
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
