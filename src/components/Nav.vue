<template>
    <v-navigation-drawer
    class="primary darken-4"
    dark
    app
  >
  <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://cdn.dribbble.com/users/933550/screenshots/3780472/dr.xenon_bloom.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Xenon Bloom</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
    <v-list>
      <v-list-tile
        v-for="item in items"
        :key="item.title"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'dashboard' },
          { title: 'Users', icon: 'people_outlinee' },
          { title: 'Functional groups', icon: 'location_city' },
          { title: 'Providers', icon: 'local_hospital' },
          { title: 'Log out', icon: 'power_settings_new' }
        ]
      }
    }
};
</script>
