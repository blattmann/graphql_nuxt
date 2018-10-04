<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card-title v-if="loading">
        <v-progress-linear v-if="loading" slot="progress" color="blue" indeterminate></v-progress-linear>
      </v-card-title>
      <v-card v-if="detailUser">
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
            <v-flex xs12 align-end flexbox>
              <span class="headline text-outline" v-text="detailUser.company.name"></span>
            </v-flex>
          </v-layout>
        </v-container>
        </v-img>

        <v-form
          ref="userdetailform"
          v-model="valid"
          lazy-validation
          v-cloak>

          <v-card-title>
            <v-flex xs12>
              <v-text-field
                :value="detailUser.id"
                :label="i18n.id"
                readonly="readonly"
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field
                :value="detailUser.name"
                :label="i18n.name"
                v-model="detailUser.name"
                :rules="[rules.required, rules.name.check]"
                @change="allowCancel"
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field
                :value="detailUser.email"
                :label="i18n.email"
                v-model="detailUser.email"
                :rules="[rules.required, rules.email.check]"
                @change="allowCancel"
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field
                :value="detailUser.company.name"
                :label="i18n.company"
                v-model="detailUser.company.name"
                :rules="[rules.required, rules.company.check]"
                @change="allowCancel"
              ></v-text-field>
            </v-flex>
          </v-card-title>

          <div class="text-xs-center">
            <v-btn
              flat
              color="orange"
              @click="saveData()">{{ i18n.save }}</v-btn>

            <v-btn
              v-if="showCancel"
              flat
              color="red"
              @click.native="cancel()">
              {{ i18n.cancel }}
            </v-btn>

            <v-btn
              flat
              color="orange"
              @click="showDetail(detailUser.id)">{{ i18n.back }}</v-btn>
          </div>
        </v-form>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { getUserDetail } from '~/plugins/queries'
import { i18n, rex } from '~/plugins/helpers'

export default {
  name: 'editPage',
  data() {
    return {
      detailUser: null,
      backupUser: null,
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
      valid: false,
      rules: {
        required: value => !!value || i18n.required,
        name: {
          check: value => {
            return this.passValidation('name', value)
          }
        },
        email: {
          check: value => {
            return this.passValidation('email', value)
          }
        },
        company: {
          check: value => {
            return this.passValidation('company', value)
          }
        }
      },
      showCancel: false,
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
        data.userdetail.poster = posterImage
        data.userdetail.avatar = `avatars/${vm.userId}.png`
        vm.loading = false
        return data.userdetail
      }
    },
    backupUser: {
      query: getUserDetail,
      variables() {
        return {
          id: this.userId
        }
      },
      update(data) {
        const posterImage = this.poster[Math.floor(Math.random()*this.poster.length)]
        data.userdetail.poster = posterImage
        data.userdetail.avatar = `avatars/${this.userId}.png`
        return data.userdetail
      }
    }
  },
  methods: {
    showDetail(id) {
      const vm = this
      console.log('showDetail: ', id)
      vm.$router.push({
        name: 'detail',
        query: { id: id }
      })
    },
    passValidation (item, value) {
      const vm = this

      let ret = ''
      if (value) {
        switch(item) {
          case 'name':
            if (rex.name.test(value) && (value.length >= 3)) {
              ret = true
            } else {
              if (!rex.name.test(value)) {
                ret = i18n.charsNotAllowed
              } else if (value.length <= 3) {
                ret = i18n.minCharsThree
              } else {
                ret = i18n.correctName
              }
            }
            break
          case 'email':
            if (rex.email.test(value)) {
              ret = true
            } else {
              ret = i18n.correctEmail
            }
            break
          case 'company':
            if (rex.name.test(value) && (value.length >= 3)) {
              ret = true
            } else {
              if (!rex.name.test(value)) {
                ret = i18n.charsNotAllowed
              } else if (value.length <= 3) {
                ret = i18n.minCharsThree
              } else {
                ret = i18n.correctName
              }
            }
            break
        }
      } else {
        ret = false
      }

      // console.log('ret: ', ret)
      return ret
    },
    saveData() {
      const vm = this
      console.log('saveData')
    },
    allowCancel () {
      this.showCancel = true
    },
    cancel () {
      const vm = this
      console.log('cancel form editing')
      vm.valid = false
      vm.detailUser = vm.backupUser
      // vm.detailUser = vm.apollo
    }
  }
}
</script>
