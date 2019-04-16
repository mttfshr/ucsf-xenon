<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >
        <material-card
          color="green"
          title="Edit Profile"
          text="Complete your profile"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    class="purple-input"
                    label="User Name"
                    v-model="username"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Email Address"
                    class="purple-input"
                    v-model="email"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="First Name"
                    class="purple-input"
                    v-model="firstname"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Last Name"
                    class="purple-input"
                    v-model="lastname"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Job Title"
                    v-model="jobtitle"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Phone"
                    mask="phone"
                    v-model="phone"/>
                </v-flex>
                <v-flex xs12>
          <v-select
            v-model="value"
            :items="items"
            attach
            chips
            label="Role/Permissions"
            multiple
          ></v-select>
        </v-flex>
                <v-flex xs12>
          <v-select
            v-model="value"
            :items="items"
            attach
            chips
            label="Tags"
            multiple
          ></v-select>
        </v-flex>

                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="success"
                  >
                    Update Profile
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <material-card class="v-card-profile">
          <v-avatar
            slot="offset"
            class="mx-auto d-block"
            size="130"
          >
            <img
              src="https://cdn.dribbble.com/users/933550/screenshots/3780472/dr.xenon_bloom.jpg"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h6>
            <h4 class="card-title font-weight-light">Dr. Xenon Bloom</h4>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
      username: 'xenon',
      email: 'xenon@anatomypark.com',
      firstname: 'Xenon',
      lastname: 'Bloom',
      jobtitle: 'Physician',
      phone: '5555555555',
      items: ['foo', 'bar', 'fizz', 'buzz'],
      value: ['foo', 'bar', 'fizz', 'buzz']
    })
}
</script>
