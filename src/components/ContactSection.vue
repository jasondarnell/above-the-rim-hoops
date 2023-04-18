<template>
  <section class="pb-8 mt-4" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <div class="font-weight-light text-h3">Contact</div>
              <!-- <h3 class="font-weight-light mt-3">
                Contact us asdf asdf
              </h3>
              <h3 class="font-weight-light mt-3">
                Something else...
              </h3> -->
              <!-- <h3 class="font-weight-light mt-3">
                Phone: +xx (xx) xxxxx-xxxx
              </h3> -->
              <br />
              <h3 class="font-weight-light">
                Email: alex@hoops.com
              </h3>
            </v-col>
            <v-col cols="12" sm="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="textArea"
                    :rules="textAreaRules"
                    label="Message"
                    required
                />

                <v-btn
                    :disabled="!valid"
                    color="primary"
                    :dark="valid"
                    rounded
                    block
                    class="mt-3"
                    @click="submit"
                >
                  Submit
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~../assets/img/borderWavesBlue.svg"/>
    </div>
    <v-snackbar
        v-model="snackbar.enabled"
        timeout="3000"
        :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="snackbar.enabled = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<style scoped>
#contact {
  /* background-color: #f4f7f5; */
  background-color: #FFFFFF;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

</style>

<script>


export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name required.",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Email required.",
      (v) => /.+@.+\..+/.test(v) || "Invalid email",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "Message required",
      // (v) => (v && v.length >= 10) || "Minimum of 10 characters",
    ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: ''
    }
  }),
  methods: {
    submit() {
      // api.submitContactMessage(
      //   this.name,
      //   this.email,
      //   this.textArea
      // ).then(() => {
      //   this.snackbar.text = "Message sent"
      //   this.snackbar.color = "success"
      //   this.snackbar.enabled = true
      // }).catch(() => {
      //   this.snackbar.text = "Erro sending message"
      //   this.snackbar.color = "#FF5D2B"
      //   this.snackbar.enabled = true
      // })
      // this.name = "";
      // this.email = "";
      // this.textArea = "";
    }
  }
};
</script>
