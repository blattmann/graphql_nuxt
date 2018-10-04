<template>
  <v-app dark>
    <v-toolbar
      :clipped-left="clipped"
      fixed
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
      :fixed="fixed"
      app
    >
      <span>&copy; {{ copy }} <a :href="authorUrl" v-text="author" class="hyperlink"></a></span>
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
