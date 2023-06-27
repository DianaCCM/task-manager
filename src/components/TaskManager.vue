<template>
  <div class="container mx-auto px-8 relative min-height-75">
    <div class="p-3 pt-5 columns-2">
      <div class="pt-2">
        <h2 class="text-white text-xl">Board</h2>
      </div>
      <div class="grid justify-items-end">
        <ion-button
          @click="openNewTaskModal"
          id="open-modal"
          shape="round"
          fill="outline"
        >
          New task&nbsp;
          <ion-icon :icon="addCircleOutline"></ion-icon>
        </ion-button>
      </div>
    </div>
    <div class="grid md:grid-cols-3 content-stretch">
      <Task
        v-for="(task, index) in allTasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :completed="task.completed"
        :user="task.user"
        :date="task.date"
        @complete_task="completeTask(index)"
        @delete_task="deleteTask(index)"
      />
    </div>
  </div>
  <NewTaskModal
    v-show="showNewTaskModal"
    ref="addTaskModal"
    :trigger="'open-modal'"
    @cancel="closeModal"
    @confirm="addTask"
  />
</template>

<script setup>
import { onMounted, ref, watch, reactive, defineComponent, toRef } from "vue";
import Task from "./Task.vue";
import NewTaskModal from "./NewTaskModal.vue";
import taskList from "../data/tasks.js";
import { IonButton, IonIcon } from "@ionic/vue";
import { addCircleOutline } from "ionicons/icons";

onMounted(() => {});

const allTasks = reactive(taskList);

const showNewTaskModal = ref(false);

function openNewTaskModal(val) {
  showNewTaskModal.value = true;
}

const addTask = (task) => {
  allTasks.push(task.value);
  showNewTaskModal.value = false;
};

const completeTask = (taskIndex) => {
  allTasks[taskIndex].completed = !allTasks[taskIndex].completed;
};

const deleteTask = (taskIndex) => {
  allTasks.splice(taskIndex, 1);
};

const closeModal = () => {
  showNewTaskModal.value = false;
};

defineComponent({ components: { IonButton } });
</script>

<style scoped>
.min-height-75 {
  min-height: 75vh;
}
</style>
