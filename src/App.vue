<template>
  <v-app>
    <navigation :color="color" :flat="flat" />
    <v-main class="">
      <home />
      <services />
      <about />
      <contact />
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <footer />
  </v-app>
</template>

<style>
/* .v-main {
  background-image: url("src/assets/basketball.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
} */
</style>

<script>
import navigation from "@/components/Navigation.vue";
import footer from "./components/Footer.vue";
import home from "./components/HomeSection.vue";
import services from "./components/ServicesSection.vue";
import about from "./components/AboutSection.vue";
import contact from "./components/ContactSection.vue";

// #D9D9D9

export default {
  name: "App",

  components: {
    navigation,
    footer,
    home,
    services,
    about,
    contact
  },

  data: () => ({
    fab: null,
    color: "#FFFFFF",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "#FFFFFF";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "#FFFFFF";
        this.flat = false;
      } else {
        this.color = "#FFFFFF";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
      console.log("fab", this.fab)
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>




