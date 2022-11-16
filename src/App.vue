<template>
  <v-app>
    <v-main>
      <v-app-bar
        color="#F6F4F5"
        dense
        >
        <v-app-bar-nav-icon color="#6F6E6F" @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title class="pageHeader">O Grande Dia</v-toolbar-title>

      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-dialog
              v-model="dialog"
              hide-overlay
              transition="dialog-bottom-transition"
              max-width="400"
            >
              <v-card>
                <div class="d-flex justify-end pr-4 pt-4"><v-icon @click="dialog = false" color="#77548f">mdi-close </v-icon></div>
                <div class="search-modal">
                  <div class="title-modal">Digite o Codigo Recebido para Familia</div>
                  <v-text-field
                  v-model="code"
                  color="#77548f"
                  class="mt-5 mb-2"
                  label="Codigo da Familia"
                  append-icon="mdi-magnify"
                  type="number"
                  counter
                  maxlength="4"
                ></v-text-field>
                <v-btn
                  class="ma-2"
                  outlined
                  color="#77548f"
                  @click="searchFamily(code)"
                >
                  Buscar
                </v-btn>
                </div>
              </v-card>
            </v-dialog>
            <v-list-item @click="$router.push('/')">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item @click="openSearchModal()">
              <v-list-item-icon>
                <v-icon>mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Confirmar Presença</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/gift')">
              <v-list-item-icon>
                <v-icon>mdi-gift-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lista de Presente</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
    dialog: false,
    drawer: false,
    code: null,
    group: 1
  }),

  methods: {
    openSearchModal() {
      this.drawer = false
      this.dialog = true
    },

    searchFamily(code) {
      this.dialog = false
      this.$router.push(`/inviteds/${code}`)
      this.code = null
    }
  }
};
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Tangerine:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

  .search-modal ::v-deep {
    padding: 23px !important;
    display: flex;
    flex-direction: column;
    .title-modal {
      color: #77548f;
      font-size: 20px;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
    }
  }

  .pageHeader {
    color: #6F6E6F;
    font-family: 'Tangerine', cursive !important;
    font-size: 30px;
  }
</style>
