<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Functional Groups</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Group</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Group name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.specialty" label="Metadata 1"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.site" label="Metadata 2"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.wait" label="Metadata 3"></v-text-field>
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
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.specialty }}</td>
        <td class="text-xs-left">{{ props.item.site }}</td>
        <td class="text-xs-left">{{ props.item.wait }}</td>
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
          text: 'Group name',
          align: 'left',
          value: 'name'
        },
        { text: 'Metadata', align: 'left', value: 'specialty' },
        { text: 'Metadata', align: 'left', value: 'site' },
        { text: 'Metadata',  align: 'left', value: 'wait' },
        { text: 'Actions', align: 'left', value: 'name', sortable: false }
      ],
      providers: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        specialty: '',
        site: '',
        wait: 0
      },
      defaultItem: {
        name: '',
        specialty: '',
        site: '',
        wait: 0
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
          name: 'Group 1',
          specialty: 'metadata',
          site: 'metadata',
          wait: 20
          },
          {
          name: 'Group 2',
          specialty: 'metadata',
          site: 'metadata',
          wait: 5
          },
          {
         name: 'Group 3',
          specialty: 'metadata',
          site: 'metadata',
          wait: 45
          },
          {
          name: 'Group 4',
          specialty: 'metadata',
          site: 'metadata',
          wait: 60
          },
          {
          name: 'Group 5',
          specialty: 'metadata',
          site: 'metadata',
          wait: 15
          },
          {
          name: 'Group 6',
          specialty: 'metadata',
          site: 'metadata',
          wait: 0
          },
          {
          name: 'Group 7',
          specialty: 'metadata',
          site: 'metadata',
          wait: 20
          },
          {
           name: 'Group 8',
          specialty: 'metadata',
          site: 'metadata',
          wait: 50000
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