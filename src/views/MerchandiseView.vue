<template>
  <v-container>
    <v-row class="justify-center my-3">
      <h1>
        Merchandise
      </h1>
    </v-row>
    <v-row class="justify-center my-5">
      <v-col cols="10" class="">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows="hover"
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
      <v-col cols="6">
        <v-btn 
          color="white"
          size="x-large"
          href="https://atr-hoops.square.site/"
        >
          View Products
        </v-btn>
        <br />
    
        <div class="ma-3 text-subtitle-2">
          Click "Shop All" in Square website
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'MerchandiseView',
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
    images: [
      'src/assets/merchandise/hat_1.png',
      'src/assets/merchandise/tshirt_1.png',
      'src/assets/merchandise/crew_neck_1.png',
      'src/assets/merchandise/hoodie_1.png',
    ],
    }
  } 
}
</script>
