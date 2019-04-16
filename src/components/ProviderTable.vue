<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Providers</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Provider</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Provider name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.specialty" label="Specialty/Group"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.site" label="Today's Location/Site"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.wait" label="Wait time"></v-text-field>
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
      :expand="expand"
      item-key="name"
    >
      <template v-slot:items="props">
        <tr @click="props.expanded = !props.expanded">
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
        </tr>
      </template>
      <template v-slot:expand="props">
        <v-card flat>
          <v-combobox
    v-model="chips"
    :items="items"
    label="Metadata tags"
    chips
    clearable
    prepend-icon="filter_list"
    solo
    multiple
  >
    <template v-slot:selection="data">
      <v-chip
        :selected="data.selected"
        close
        @input="remove(data.item)"
      >
        <strong>{{ data.item }}</strong>
      </v-chip>
    </template>
  </v-combobox>
        </v-card>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data: () => ({
      chips: ['Metadata 1', 'Metadata 2', 'Metadata 3', 'Metadata 4'],
        items: ['Metadata 1', 'Metadata 2', 'Metadata 3', 'Metadata 4', 'Metadata 5', 'Metadata 6'],
      dialog: false,
      headers: [
        {
          text: 'Provider name',
          align: 'left',
          value: 'name'
        },
        { text: 'Specialty/Group', align: 'left', value: 'specialty' },
        { text: 'Location/Site', align: 'left', value: 'site' },
        { text: 'Wait time',  align: 'left', value: 'wait' },
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
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },
      initialize () {
        this.providers = [
          {
          name: 'Xenon Bloom',
          specialty: 'Internal Medicine',
          site: 'Anatomy Park',
          wait: 20
          },
          {
          name: 'Beverly Crusher',
          specialty: 'General practice',
          site: 'Sick Bay',
          wait: 5
          },
          {
            name: 'The Dr.',
          specialty: 'Time lord things',
          site: 'Gallifrey',
          wait: 45
          },
          {
            name: 'Janet Fraser',
          specialty: 'Exobiology',
          site: 'Cheyenne Mountain',
          wait: 60
          },
          {
           name: 'Julian Bashir',
          specialty: 'Genetics',
          site: 'DS-9',
          wait: 15
          },
          {
          name: 'Dana Scully',
          specialty: 'Forensics',
          site: 'Quantico',
          wait: 0
          },
          {
          name: 'Stephen Strange',
          specialty: 'Surgery',
          site: 'Kamar-Taj',
          wait: 20
          },
          {
            name: 'Dr. Strangelove',
          specialty: 'Nuclear Physics',
          site: 'War Room',
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