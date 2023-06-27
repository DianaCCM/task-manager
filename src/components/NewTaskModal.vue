<template>
  <ion-modal :trigger="trigger" :key="modalKey">
    <ion-header>
      <div class="grid grid-cols-3 content-stretch pt-2">
        <div></div>
        <div class="grid justify-items-center">
          <ion-title>Add New Task</ion-title>
        </div>
        <div class="grid justify-items-end">
          <ion-button fill="clear" @click="cancel()">Close</ion-button>
        </div>
      </div>
    </ion-header>
    <div class="p-5">
      <ion-item>
        <ion-label position="stacked">Task Title</ion-label>
        <ion-input
          ref="taskTitle"
          type="text"
          placeholder="Title"
          v-model="task.title"
          aria-label="title"
        ></ion-input>
      </ion-item>
      <div class="mt-3"></div>
      <ion-item>
        <ion-label position="stacked">Task Description</ion-label>
        <ion-input
          ref="taskDesription"
          v-model="task.description"
          type="text"
          placeholder="Description"
          aria-label="description"
        ></ion-input>
      </ion-item>
      <div
        class="grid justify-items-center bg-red-500 text-white mt-5 p-2"
        v-if="showError"
      >
        Fields can't be empty!
      </div>
      <div class="grid justify-items-center p-6 mt-1">
        <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
      </div>
    </div>
  </ion-modal>
</template>

<script setup>
import {
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonLabel,
  IonModal,
  IonIcon,
} from "@ionic/vue";
import { defineComponent, defineProps, onMounted, ref } from "vue";

const props = defineProps({
  trigger: String,
});

const emits = defineEmits(["cancel, confirm"]);

const task = ref({});

const modalKey = ref(0);

const showError = ref(false);

function cancel() {
  emits("cancel");
}

function confirm() {
  if (task.value.title && task.value.description) {
    task.value.completed = false;
    task.value.date = Date.now();
    task.value.id = Date.now();
    emits("confirm", task);
    task.value = {};
    showError.value = false;
  } else {
    showError.value = true;
  }
}

defineComponent({
  components: {
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonLabel,
  },
});
</script>
