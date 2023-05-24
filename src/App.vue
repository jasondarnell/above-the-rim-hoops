<template>
  <v-app>
    <navigation :color="color" />
    <footer />
    <v-main class="main my-2">
      <router-view class="" />
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #122044;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */


.main {

    /* z-index:-1; */
    /* color: white */
    background-color: #122044;
    color: white;
}

.v-btn {
  color: #122044;
}

.v-carousel {
  color: #122044
}

.v-carousel__controls {
  color: white;
}

.v-card .v-card-title {
    text-overflow: initial!important;
    white-space: initial!important;
}

/* .arrow_container {
    float: left;
    width: 100%;
    padding-bottom: 150px;
    position: relative;
    overflow: hidden;
    z-index:0;
} */

/* .arrow_container:before {
    content: "";
    width: 400px;
    height: 400px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 400px 0 0 400px;
    border-color: transparent transparent transparent #EFF1FB;
    position: absolute;
    left: 0;
    bottom: 0;
} */



</style>

<script>

import Navigation from "@/components/Navigation.vue";
import  Footer from "@/components/Footer.vue";


export default {
  name: "App",
  components: {
    Navigation,
    Footer
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