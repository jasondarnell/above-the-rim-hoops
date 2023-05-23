<template>
  <div style="margin-top:55px;">
    <v-row class="justify-center my-5">
      <v-col cols="10" class="">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows="hover"
          style="color: #122044"
        >
          <v-carousel-item
            v-for="(img, i) in images"
            :key="i"
          >
            <v-img :src="img" />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row class="justify-center my-8">
      <v-col cols="9" class="text-h2">
        <span style="font-family: 'Permanent Marker'">Above The Rim Hoops </span>
      </v-col>
    </v-row>
    <v-row class="justify-center my-5">
      <v-col cols="3">
        <v-btn 
          color="white"
          size="x-large"
          href="https://atr-hoops.square.site/"
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
      images: [
        'src/assets/home_page_services.png',
        'src/assets/logo_2_white.png',
        'src/assets/merchandise/tshirt_1.png'
      ]
    }
  } 
}
</script>
