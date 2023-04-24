<template>
  <div style="margin-top:55px">
    <v-row class="justify-center mt-5">
      <v-col cols="10" class="">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet
              :color="colors[i]"
              height="100%"
            >
              <div class="d-flex fill-height justify-center align-center">
                <div class="text-h2">
                  {{ slide }} Slide
                </div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row class="justify-center my-8">
      <v-col cols="9" class="text-h3">
        Practice makes perfect 
      </v-col>
    </v-row>
    <v-row class="justify-center mt-5">
      <v-col cols="3">
        <v-btn 
          color="primary"
          size="x-large"
        >
          Book Now
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  },
  data(){
    return {
      colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ],
    slides: [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
    ],
    }
  } 
}
</script>
