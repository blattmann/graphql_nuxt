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

import { getAllUsers, getUserDetail } from '~/plugins/queries'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      allUsers: getAllUsers
    }
  },
  mounted() {
    console.log('index mounted')
    this.getDetailData()
  },
  methods: {
    getAllData() {
      const allUsers = this.$apollo.query({
        query: getAllUsers
      })
      console.log('allUsers: ', allUsers)
      allUsers.then(
        data => {
          console.log('allUsers in', data)
        },
        error => {
          console.error(error)
        }
      )
    },
    getDetailData() {
      const userDetail = this.$apollo.query({
        query: getUserDetail,
        variables: {
          id: 3
        }
      })
      console.log('userDetail: ', userDetail)
      userDetail.then(
        data => {
          console.log('userDetail in', data)
        },
        error => {
          console.error(error)
        }
      )
    }
  }
}
</script>
