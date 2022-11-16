<template>
  <v-container class="container-content" fluid>
    <div class="content" >
      <div class="text-content">
        <div class="title">O grande dia</div>
        <div class="subTitle">Julio & Fabiana</div>
        <div class="descrption mt-2">
          Venha participar do casamento mais esperado e se alegrar conosco
        </div>
        <div class="descrption mt-2 d-flex justify-center">
          <div class="mr-2" style="font-size: 35px !important;">Dia: 17/12/2022</div>
          <div style="font-size: 35px !important;">Hora: 18:30</div>
        </div>
        <div class="descrption mt-2 d-flex justify-center">
          <div class="mr-2" style="font-size: 30px !important;">Apocalipse 3:5</div>
        </div>
      </div>
    </div>
    <v-alert
      type="warning"
      class="d-flex mb-0"
      style="border-radius: 0;"
      height="70"
    >
    Confirmar Presença ate dia 05/12 após está data não podera participar
   </v-alert>
  </v-container >
</template>  
<script>
  
export default {
  name: 'HomePage',
  data: () => ({ 
    value: 1,
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    code: "",
  }),

  mounted() {
  //   const test = getInveteds()
  //  console.log('aq', test)
  },
  methods: {
    closeMdal() {
      this.dialog = false
      this.notifications = false
      this.sound = true
      this.widgets = false
    },
    searchFamily(code) {
      this.$router.push(`/inviteds/${code}`)
    }
  }
}
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

  .menu-content {
    font-family: 'Poppins', sans-serif;
    color: #77548f;
    font-size: 12px;
  }
.container-content {
  width: 100%;
  height: 86%;
  padding: 0px;
  .content {
    background-image: url("../assets/better.jpg");
    background-position: top;
    background-color: #F6F4F5;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .image-size {
      z-index: 0;
      min-height: 100vh;
      min-width: 100vw;
      position: absolute;
    }
    .text-content {
      text-align: center;
      div {
        font-family: 'Hammersmith One', sans-serif !important;
        font-family: 'Tangerine', cursive !important;
      }
      position: absolute;
      z-index: 2;
      .title {
        font-size: 50px !important;
        font-weight: bold;
      }
      .subTitle {
        font-size: 30px !important;
      }
      .descrption {
        font-size: 26px !important;
        max-width: 280px;
      }
    }
  }
  .footer {
      z-index: 500;
      display: flex;
      width: 100%;
      position: absolute;
      bottom: 0;
      .footer-item {
        // border: solid 1px white;
        height: 35px;
        display: flex;
        align-items: baseline;
        justify-content: center;
        width: 100%;
        font-size: 14px;
        background-color: #77548f;
        color: white;
        padding: 8px;
        i {
          font-size: 16px;
          margin-right: 5px;
          color: white;
        }
      }
    }
}
</style>
  