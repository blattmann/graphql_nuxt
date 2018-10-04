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

        <v-card-title v-if="loading">
          <v-progress-linear v-if="loading" slot="progress" color="white" indeterminate></v-progress-linear>
        </v-card-title>

        <v-list two-line>
          <template v-for="(item) in allUsers">

            <v-list-tile
              :key="item.id"
              @click="showDetail(item.id)"
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.name" />
                <v-list-tile-sub-title v-html="item.company.name" />
              </v-list-tile-content>

            </v-list-tile>

          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { getAllUsers } from '@/plugins/queries'

export default {
  data() {
    return {
      allUsers: [],
      loading: true
    }
  },
  apollo: {
    allUsers: {
      query: getAllUsers,
      update(data) {
        const vm = this
        let avatarImage = ''
        data.users.forEach(function (user, index) {
          // add avatar to the user
          user.avatar = `avatars/${index+1}.png`
        })
        this.loading = false
        return data.users
      }
    }
  },
  methods: {
    showDetail(id) {
      const vm = this
      vm.$router.push({
        name: 'detail',
        query: { id: id }
      })
    }
  }
}
</script>
