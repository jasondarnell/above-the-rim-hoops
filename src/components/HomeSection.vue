<template>
  <section id="home" class="">
    <!-- src="src/assets/basketball.png" -->
    <v-parallax dark src="src/assets/basketball.png">
      <v-row align="center" justify="center" style="color:white" class="mt-8">
        <v-col cols="9">
          <v-row align="center" justify="left">
            <v-col cols="12" md="8" xl="9" class="pt-5 text-center">
              <h1 class="text-h3 font-weight-bold mb-4">
                <!-- Managed Data Solutions -->
                One-liner here
              </h1>
              <h1 class="font-weight-light">
                Improve your jump shot!
              </h1>
              <v-btn
                rounded
                outlined
                style="color:black"
                color="orange"
                class="mt-5"
                size="x-large"

              >
                Book Now
                <!-- <v-icon class="ml-2">mdi-arrow-down</v-icon> -->
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
          <!-- <v-row align="center" justify="left">
            <v-col cols="12" md="8" xl="9" class="pt-5">
              <h1 class="font-weight-light">
                Improve your jump shot!
              </h1>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row> -->
        </v-col>
        <v-col cols="3" />
      </v-row>
    </v-parallax>
  </section>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  watch: {

  },
  methods: {
    
  }
};
</script>

