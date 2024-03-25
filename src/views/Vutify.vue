<template>
  <div>
    <v-container>
      <v-row><v-col cols="4"><v-btn>1</v-btn></v-col><v-col cols="4"></v-col></v-row>
      <v-row><v-col cols="4"><v-btn>1</v-btn></v-col><v-col cols="4"><v-btn>2</v-btn></v-col></v-row>
      <v-row><v-col cols="4"><v-btn>1</v-btn></v-col><v-col cols="4"><v-btn>2</v-btn></v-col><v-col cols="4"><v-btn>3</v-btn></v-col></v-row>
      <v-row><v-btn><v-col cols="4">11111111111111</v-col></v-btn><v-btn><v-col cols="4">2</v-col></v-btn></v-row>

        <v-btn @click="darkchange()">darking{{showdark}}</v-btn>
      <p>vutify</p>
    </v-container>

表をコピペした。
    <v-container>

      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        :pagination.sync="pagination"
        :items-per-page="5"
      >
        <template v-slot:top>
          topはv-data-tableの名前付きスロット。
          <v-toolbar 
            flat
            collapse
            src="https://www.kuikasuojisan.net/application/files/9916/9112/6253/imo.png">
            <v-toolbar-title>My Contacts</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>
<script>
  export default {
  data() {
    return {
      test: "test",
      dark: true,
      
      search: '',
      pagination: {},
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phone' },
      ],
      items: [
        { name: 'John Doe', email: 'john@example.com', phone: '555-555-5555' },
        { name: 'Jane Smith', email: 'jane@example.com', phone: '555-555-5555' },
        // 他の行のデータ...
      ],
    };
  },
  computed: {
    showdark: function (){
      return  !this.dark;
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    darkchange: function() {
      this.dark = !this.dark;
      this.$vuetify.theme.dark = this.dark;
    }
  }
}
</script>
<style>
</style>
