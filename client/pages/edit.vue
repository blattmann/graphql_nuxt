<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card v-if="detailUser">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        {{ detailUser }}

        <!-- <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0" v-if="detailUser.name">{{ detailUser.name }}</h3>
            <div>
              <p v-if="detailUser.email">
                <strong>Email:</strong>
                <a :href="`mailto:${detailUser.email}`">
                  {{ detailUser.email }}
                </a>
              </p>
              <p v-if="detailUser.company.name">
                <strong>Company:</strong> {{ detailUser.company.name }}
              </p>
            </div>
          </div>
        </v-card-title> -->

        <v-card-actions>
          <v-btn flat color="orange">Edit</v-btn>
          <v-btn
            color="orange"
            flat
            to="/">Back</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { getUserDetail } from '~/plugins/queries'

export default {
  name: 'editPage',
  data() {
    return {
      detailUser: null,
      userId: $nuxt.$route.query.id
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
        return data.userdetail
      }
    }
  },
  methods: {
  }
}
</script>
