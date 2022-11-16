<template>
  <v-container class="container-content" fluid>
    <div v-if="loading" class="loading-container">
      <v-progress-circular indeterminate color="#77548f"></v-progress-circular>
    </div>
    <div class="container-page" v-else>
      <div class="container-text" v-if="family && !family.confirm"></div>
      <div class="container-invited" v-if="family && !family.confirm">
        <div class="d-flex flex-column align-center">
          <div class="header">
            <div class="main-title title">Lista de Familiares</div>
            <div class="subtitle"> Confirmar Presença ate dia 10/12!</div>
            <div>
              <div class="list-people" v-for="item in people" :key="item">
                <v-icon>mdi-account-circle-outline</v-icon>
                <div>{{ item }}</div>
              </div>
            </div>
            <div style="width: 100%; margin-top: 120px !important;" class="d-flex flex-column align-center">
              <v-alert
                class="alert"
                outlined
                type="warning"
                border="left"
                max-height="60"
                max-width="80%"
              >
                Após está data não podera parcipar
              </v-alert>
              <div class="confirm-button" @click="onConfirm()">Confirmar</div>
            </div>
          </div>
        </div>
      </div>
      <div class="confirm-page" v-else-if="family && family.confirm">
        <v-icon>mdi-account-check </v-icon>
        <div>Você ja confirmou sua presença</div>
        <div>Muito Obrigado!</div>
      </div>
      <div class="confirm-page" style="background-color: #ED2F4F; text-align: center;" v-else>
        <v-icon>mdi-emoticon-sad-outline </v-icon>
        <div>Não encontramos seu codigo tente novamente</div>
      </div>
    </div>
  </v-container>
</template>  

<script>

import { getInveteds, updateValues } from '@/firebase'

export default {
  name: 'InvitedsComponent',
  data: () => ({
    family: null,
    people: [],
    loading: false
  }),

  async mounted() {
    this.loading = true
    const inveteds = await getInveteds()
    this.family = inveteds.find(x => x.id == this.$route.params.id)
    if (this.family) {
      console.log('test', this.family)
      this.people = this.family ? this.family.people : {}
    }
    this.loading = false
  },

  methods: {
    async onConfirm() {
      const databaseId = this.family.databaseId
      delete this.family.databaseId
      this.family.confirm = true
      const res = await updateValues(databaseId, this.family)
      if (res === 'succesful') window.open('https://chat.whatsapp.com/H69xars1MbSIDroEZT6v5z');
    }
  }
}

</script>
  
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Tangerine:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap');

.alert {
  font-size: 12px !important;
}
.loading-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-content {
  height: 100vh;
  padding: 0px;
  overflow: hidden;
}
.confirm-page {
  height: 100%;
  background-color: #7EDB6B;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  i {
    font-size: 200px;
    color: white;
  }
}
.container-page {
  display: flex;
  width: 100%;
  height: 100%;
  .container-text {
    background-image: url("../assets/better.jpg");
    background-color: #F1D3D1;
    width: 100%;
    background-position: top;
    background-color: #F6F4F5;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .container-invited {
    background-color: #F6F4F5;
    height: 100%;
    max-width: 500px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    border: solid 3px #77548f;
    border-radius: 4px;
    .header {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .subtitle {
        font-size: 14px;
        margin-top: 10px;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 26px;
      }
    }
    .title {
      font-family: 'Hammersmith One', sans-serif !important;
      font-family: 'Tangerine', cursive !important;
      color: #77548f;
      padding: 10px;
      font-size: 40px !important;
      height: 50px;
    }
    .main-title {
      font-size: 60px !important;
    }
    .list-people {
      display: flex;
      margin-bottom: 10px;
      font-size: 20px;
      font-family: 'Poppins', sans-serif;
      i { 
        color: #77548f;
        font-size: 30px;
        margin-right: 18px;
      }

    }
  }
  .confirm-button {
    background-color: #77548f;
    cursor: pointer;
    width: 90%;
    padding: 15px 12px;
    border-radius: 5px;
    color: whitesmoke;
    font-weight: bold;
    text-align: center;
    &:hover {
      background-color: #5d4170;
    }
    // height: 20px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse !important;
    .container-text {
      display: none;
    }
    .container-invited {
      display: flex;
      max-width: 100% !important;
      align-items: center !important;
      flex-direction: column;
      border: none;
    }
  }
}
</style>
    