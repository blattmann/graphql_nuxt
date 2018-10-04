<template>
  <v-app dark>
    <v-toolbar
      app
    >
      <v-btn
        v-if="$nuxt.$route.name !== 'index'"
        icon
        to="/"
      >
        <v-icon>chevron_left</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      app
    >
      <span class="copyright">&copy; {{ copy }} <a :href="authorUrl" target="_blank" v-text="author" class="hyperlink"></a></span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'defaultLayout',
  data() {
    return {
      title: 'GraphQL - Nuxt.js',
      copy: new Date().getFullYear(),
      author: 'Stefan Blattmann',
      authorUrl: 'https://github.com/blattmann'
    }
  }
}
</script>
