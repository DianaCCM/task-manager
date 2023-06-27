<template>
  <div
    class="text-center mt-10 p-7 inset-x-0 bottom-0 text-white border-t-2 border-slate-600"
  >
    <span class="font-bold">DCCM</span>
    <ion-icon :icon="heartHalfOutline"></ion-icon>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import { IonIcon } from "@ionic/vue";
import { heartHalfOutline } from "ionicons/icons";

defineComponent({
  components: { IonIcon },
});
</script>

<style scoped></style>
