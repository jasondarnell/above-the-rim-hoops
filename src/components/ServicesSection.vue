<template>
  <section id="services">
    <v-container fluid>
      <v-row align="center" justify="center">
          Services!
      </v-row>
    </v-container>
    <v-container fluid id="services" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h1 class="font-weight-light display-2">Title</h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </v-col> 
          </v-row>
        </v-col>
      </v-row>
   </v-container>
  </section>
</template>

<style scoped>
#rd {
  background-image: url("~../assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#rd .container,
#rd .row {
  height: 100%;
}
</style>