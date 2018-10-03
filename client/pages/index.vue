<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        <logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to my GraphQL / Nuxt Project
        </v-card-title>

        <!-- <v-card-text>

        </v-card-text> -->

        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            flat
            nuxt
            to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

// import apolloClient from '~/plugins/apolloClient'
// import gql from 'graphql-tag'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
