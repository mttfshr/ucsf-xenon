<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Users</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New User</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.role" label="Role"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.group" label="Functional Group"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="providers"
      class="elevation-1"
      :expand="expand"
    >
      <template v-slot:items="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.username }}</td>
          <td class="text-xs-left">{{ props.item.role }}</td>
          <td class="text-xs-left">{{ props.item.group }}</td>
          <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteItem(props.item)"
            >
              delete
            </v-icon>
        </td>
        </tr>
      </template>
      <template v-slot:expand="props">
        <v-card flat>
          <v-card-text>Peek-a-boo!</v-card-text>
        </v-card>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Name',
          align: 'left',
          value: 'name'
        },
        { text: 'Username', align: 'left', value: 'username' },
        { text: 'Role', align: 'left', value: 'role' },
        { text: 'Functional Group',  align: 'left', value: 'group' },
        { text: 'Actions', align: 'left', value: 'name', sortable: false }
      ],
      providers: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        username: '',
        role: '',
        group: ''
      },
      defaultItem: {
        name: '',
        username: '',
        role: '',
        group: ''
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Provider' : 'Edit Provider'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.providers = [
          {
          name: 'Xenon Bloom',
          username: 'xenon',
          role: 'Provider',
          group: 'Anatomy Park'
          },
          {
          name: 'Beverly Crusher',
         username: 'crusherrr',
          role: 'Provider',
          group: 'Sick Bay'
          },
          {
            name: 'The Dr.',
          username: 'who',
          role: 'Provider',
          group: 'Gallifrey'
          },
          {
            name: 'Janet Fraser',
          username: 'sg-to-tha-1',
          role: 'Provider',
          group: 'Cheyenne Montain'
          },
          {
          name: 'Dana Scully',
          username: 'area51lolz',
          role: 'Provider',
          group: 'Quantico'
          },
          {
          name: 'Stephen Strange',
          username: 'dormammusux',
          role: 'Provider',
          group: 'Kamar-Taj'
          },
          {
          name: 'Dr. Strangelove',
          username: 'icanwalk',
          role: 'Provider',
          group: 'War Room'
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.providers.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.providers.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.providers[this.editedIndex], this.editedItem)
        } else {
          this.providers.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>