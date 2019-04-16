<template>
 <v-app id="xenon">
    <Nav />
    <v-toolbar color="indigo darken-4" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Wait time app</v-toolbar-title>
    </v-toolbar>
    <v-content fluid>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    Nav
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>
