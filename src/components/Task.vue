<template>
  <ion-card :class="completed ? 'bg-green-200' : ''">
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
      <ion-card-subtitle>{{ formatDate(date) }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      {{ description }}
    </ion-card-content>
    <div class="grid grid-cols-2">
      <div class="grid justify-items-start pb-2">
        <ion-button @click="remove" fill="clear"
          ><ion-icon :icon="trash" size="large" color="danger"></ion-icon
        ></ion-button>
      </div>
      <div class="grid justify-items-end" v-if="!completed">
        <ion-button @click="complete" fill="clear"
          ><ion-icon :icon="checkbox" size="large" color="success"></ion-icon
        ></ion-button>
      </div>
    </div>
  </ion-card>
</template>

<script setup>
import { defineProps, defineComponent } from "vue";
import {
  IonButton,
  IonCard,
  IonIcon,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { checkbox, trash } from "ionicons/icons";

const props = defineProps({
  title: String,
  description: String,
  completed: Boolean,
  date: Number,
  user: String,
});
const emits = defineEmits(["complete_task, delete_task"]);

function formatDate(val) {
  const date = new Date(val);
  return date.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function complete() {
  emits("complete_task");
}

function remove() {
  emits("delete_task");
}

defineComponent({
  components: {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
});
</script>
<style scoped>
ion-button {
  --border-color: #2dd36f;
  --background-hover: none;
}
</style>
