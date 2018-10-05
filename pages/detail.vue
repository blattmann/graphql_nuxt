<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card-title v-if="loading">
        <v-progress-linear v-if="loading" slot="progress" color="white" indeterminate></v-progress-linear>
      </v-card-title>
      <v-card v-if="detailUser && !loading">
        <v-img
          :src="detailUser.poster"
          aspect-ratio="2.75"
        >
          <v-container
          fill-height
          fluid
          pa-2
          v-if="detailUser.company.name"
        >
          <v-layout fill-height>
            <div class="poster__backdrop"></div>
            <v-flex xs12 align-end flexbox>
              <span class="headline poster__headline" v-text="detailUser.company.name"></span>
            </v-flex>
          </v-layout>
        </v-container>
        </v-img>

        <v-card-title primary-title>
          <v-list-tile-avatar>
            <img :src="detailUser.avatar">
          </v-list-tile-avatar>

          <h3 class="headline mb-0" v-if="detailUser.name">
            {{ detailUser.name }}
          </h3>
        </v-card-title>

        <v-card-title>
          <div>
            <p v-if="detailUser.email">
              <strong>{{ i18n.email }}:</strong>
              <a :href="`mailto:${detailUser.email}`" class="hyperlink">
                {{ detailUser.email }}
              </a>
            </p>
            <p v-if="detailUser.company.name">
              <strong>{{ i18n.company }}:</strong> {{ detailUser.company.name }}
            </p>
          </div>
        </v-card-title>

        <div class="text-xs-center">
          <v-btn
            flat
            color="orange"
            @click="editDetail(detailUser.id)">{{ i18n.edit }}</v-btn>
          <v-btn
            flat
            color="orange"
            to="/">{{ i18n.back }}</v-btn>
        </div>

      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
import { getUserDetail } from '@/plugins/queries'
import { i18n } from '@/plugins/helpers'

export default {
  name: 'detailPage',
  data() {
    return {
      detailUser: null,
      userId: $nuxt.$route.query.id,
      poster: [
        'posters/docks.jpg',
        'posters/sunshine.jpg',
        'posters/desert.jpg',
        'posters/house.jpg',
        'posters/road.jpg',
        'posters/plane.jpg'
      ],
      i18n: i18n,
      loading: true
    }
  },
  apollo: {
    detailUser: {
      query: getUserDetail,
      variables() {
        return {
          id: this.userId
        }
      },
      update(data) {
        const vm = this
        const posterImage = vm.poster[Math.floor(Math.random()*vm.poster.length)]
        // add a poster to the user
        data.userdetail.poster = posterImage
        // add an avatar to the user
        data.userdetail.avatar = `avatars/${vm.userId}.png`
        vm.loading = false
        return data.userdetail
      }
    }
  },
  methods: {
    editDetail(id) {
      const vm = this
      vm.$router.push({
        name: 'edit',
        query: { id: id }
      })
    }
  }
}
</script>
