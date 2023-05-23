<template>
  <v-container>
    <v-row class="justify-center my-2">
      <h1>
        Summer Group Sessions
      </h1>
    </v-row>
    <v-row class="justify-center my-2">
      <h3>
        Train better
      </h3>
    </v-row>
    <v-row class="text-left justify-center">
      <v-col cols="10">
        
        Summer group sessions are the perfect opportunity for players to receive a little extra training with peers at a cheaper cost. 
        Summer group session one details are as follows. 
        Four week program
        Girls and boys welcome!
        Monday nights beginning June 5 and running through June 26
        Located at Liberty High School Gym
        Grades 3-5 takes place from 5-6 PM
        Grades 6-8 takes place from 6-7 PM
        Cost: $75 for all four sessions total
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-img
          src="src/assets/group_sessions.jpg"
          style="width:100%"
        />
        <br />
        Sign up is open now!
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-card elevation="5">
          <v-card-title>
            Grades 3-5
          </v-card-title>

          <v-card-text>

            <b>$75 for all four sessions</b>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn variant="outlined">
              Register Now (Grad)
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-btn color="white">
          Register Now 
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'CampsView',
  components: {

  }
}
</script>
