
<template>
  <div class="notification-area">
    <div class="notification" :class="'notification-' + notification.type"  v-for="notification of notificationStore.messages">
      {{ notification.message }}
    </div>
  </div>
</template>

<script setup lang="ts">

import {notificationStore} from "~/scripts/store";



</script>

<style scoped>

.notification-area {
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 1000;
}

.notification {
  width: 250px;
  padding: 10px;
  animation: fadein 1s;
  margin-bottom: 15px;
}

.notification-success {
  background: greenyellow;
}

.notification-error {
  background: lightcoral;
}

@keyframes fadein {
  from {
    top: 0;
    opacity: 0.5;
  }
  to   {
    top: 25px;
    opacity: 1;
  }
}


</style>