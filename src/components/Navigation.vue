<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary      
      dark
      src="../assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <!-- <v-list-item-avatar>
            <v-icon large class="px-3">trip_origin</v-icon>
          </v-list-item-avatar> -->
          <v-list-item-content>
            <v-list-item-title class="title">Above the Rim Hoops</v-list-item-title>
            <!-- <v-list-item-subtitle>WEB</v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
          v-scroll-to="link"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      :color="color"
      height="150"
      class="px-15"
      style="color:#013069"
      flat
    >
      <v-img src="src/assets/logo.png" contain />
      <!-- <v-toolbar-title style="font-size:24px" class="text-center">
         Above the Rim <br /> Hoops
      </v-toolbar-title> -->
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <!-- <div v-else class="align-center"> -->
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/training">Training</router-link>
        <router-link to="/camps">Camps</router-link>
        <router-link to="/merch">Merch</router-link>
        <router-link to="/contact">Contact</router-link> -->

        <!-- <v-toolbar-items class="hidden-xs-only"> -->
          <v-btn to="/">
            Home
          </v-btn>
          <v-btn to="/training">
            Training & Services
          </v-btn>
          <v-btn to="/merchandise">
            Merchandise
          </v-btn>
          <v-btn to="/summer-groups">
            Summer Groups
          </v-btn>
          <v-btn to="/about">
            About
          </v-btn>
          <v-btn to="/contact">
            Contact
          </v-btn>
          <v-divider class="mx-1" vertical />
          <v-btn 
            variant="outlined" 
            color="primary" 
            class="ml-4" 
            href="https://atr-hoops.square.site/"
          >
            Book
          </v-btn>
        <!-- </v-toolbar-items> -->
      <!-- </div> -->
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
