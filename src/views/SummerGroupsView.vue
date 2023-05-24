<template>
  <v-container>
    <v-row class="justify-center my-2">
      <h1>
        Summer Group Sessions
      </h1>
    </v-row>
    <v-row class="justify-center my-2">
      <h3>
        Group session starting June 5th 
      </h3>
    </v-row>
    <v-row class="text-center justify-center">
      <v-col cols="10">        
        The perfect opportunity for players to receive a little extra training with peers at a cheaper cost. 
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-img
          src="src/assets/group_sessions.jpg"
          style="width:100%"
        />
        <br />
      </v-col>
      <v-col cols="6" class="text-left text-body-1">
        <div class="mx-6">
          <b>Dates:</b> Mondays June 5th - June 26th (4 weeks) <br />
          <b>Time:</b> 5-6 PM (Grades 3-5) <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          6-7 PM (Grades 6-8) <br />
          <b>Location:</b> Liberty High School Gym <br/>
          <b>Cost:</b> $75 for all four sessions total
          <br /><br />
          Girls and boys are welcome!
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center my-3">
      <h3>Sign up is open now!</h3>
    </v-row>
    <v-row class="justify-center">
      <v-col 
        xs="12"
        md="4"
      >
        <v-card elevation="5" class="pa-2">
          <v-card-title class="text-h5">
            Grades 3-5
          </v-card-title>
          <v-card-actions class="justify-center mt-3">
            <v-btn variant="outlined" href="https://checkout.square.site/merchant/MLEFAZF7N9ZFJ/checkout/7FCOLDHJMFZRDYUGQZLGRSZF">
              Register Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col 
        xs="12"
        md="4"
      >
        <v-card elevation="5" class="pa-2">
          <v-card-title class="text-h5">
            Grades 6-8
          </v-card-title>
          <v-card-actions class="justify-center mt-3">
            <v-btn variant="outlined" href="https://checkout.square.site/merchant/MLEFAZF7N9ZFJ/checkout/6KU3I7FTOY6FN2OQM53RFSQ6">
              Register Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'SummerGroupsView',
  components: {

  }
}
</script>
