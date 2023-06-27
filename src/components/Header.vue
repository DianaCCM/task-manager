<template>
  <div class="flex justify-center bg-white text-center p-5 top-0">
    <h1 class="font-black text-2xl">Task Manager</h1>
    <ion-icon :icon="clipboardOutline" size="large"></ion-icon>
  </div>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";
import { clipboardOutline } from "ionicons/icons";
import { defineComponent } from "vue";

defineComponent({
  components: { IonIcon },
});
</script>
<style scoped></style>
