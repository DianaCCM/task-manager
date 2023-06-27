<template>
  <div id="app">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Home from "./views/Home.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    Header,
    Home,
    Footer,
  },
});
</script>

<style scoped></style>
