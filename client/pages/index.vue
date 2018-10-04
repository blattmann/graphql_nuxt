<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <v-card>
        <v-card-title class="headline">
          Welcome to my GraphQL / Nuxt Project
        </v-card-title>

        <v-list two-line>
          <template v-for="(item) in allUsers">

            <v-list-tile
              :key="item.id"
              @click="showDetail(item.id)"
            >
              <!-- <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar> -->

              <v-list-tile-content>
                <v-list-tile-title v-html="item.name" />
                <v-list-tile-sub-title v-html="item.company.name" />
              </v-list-tile-content>

            </v-list-tile>

          </template>
        </v-list>

        <!-- <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            flat
            nuxt
            to="/detail">Continue</v-btn>
        </v-card-actions> -->

        <!-- <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            flat
            nuxt
            to="/inspire">Continue</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import EventBus from '@/eventbus'
import { getAllUsers, getUserDetail } from '~/plugins/queries'

export default {
  data() {
    return {
      allUsers: []
    }
  },
  mounted() {
    console.log('index mounted')
    this.getAllData()
  },
  methods: {
    getAllData() {
      const vm = this
      const allUsers = vm.$apollo.query({
        query: getAllUsers
      })
      console.log('allUsers: ', allUsers)
      allUsers.then(
        data => {
          // console.log('allUsers in: ', data.data.users)
          vm.allUsers = data.data.users
          console.log('vm.allUsers: ', vm.allUsers)
        },
        error => {
          console.error(error)
        }
      )
    },
    getDetailData(id) {
      const vm = this
      const userDetail = vm.$apollo.query({
        query: getUserDetail,
        variables: {
          id: id
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
    },
    showDetail(id) {
      const vm = this
      console.log('showDetail: ', id)
      // EventBus.$emit(id)
      vm.$router.push({
        name: 'detail',
        query: { id: id }
      })
    }
  }
}
</script>
