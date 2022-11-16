<template>
  <v-container class="container-content" fluid>
    <div>
      <v-carousel hide-delimiters height="200" interval="2000" >
        <v-carousel-item
          src="../assets/Foto1.jpeg"
        ></v-carousel-item>
        <v-carousel-item
          src="../assets/Foto2.jpeg"
        ></v-carousel-item>
        <v-carousel-item
          src="../assets/Foto3.jpeg"
        ></v-carousel-item>
      </v-carousel>
      <div class="content-text">
        <div>
          <div class="title-content">Lista de Presentes</div>
          <div class="text-content">O presente fica a sua escolha! </div>
          <div class="text-content">E tambem estamos aceitando pix </div>
        </div>
        <div class="d-flex align-center" style="width: 100%; justify-content: center; margin-right: 22px;">
          <img width="50" src="../assets/logo-pix-icone-512.png" class="mr-3 ml-3" />
          <div style=" color: #77548f; ">(19) 99174-6099</div>
        </div>
      </div>
    </div>
  </v-container >
</template>  
<script>

  
export default {
  name: 'HomePage',
  data: () => ({ 
    items: [
        {
          src: '../assets/Foto1.jpeg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
    ],
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

.container-content {
  width: 100%;
  height: 93%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .content-text {
    color: #77548f;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .title-content {
      font-family: 'Poppins', sans-serif;
      padding: 15px;
      text-align: center;
      font-size: 25px;
    }
    .text-content {
      padding: 0px 15px;
      font-family: 'Poppins', sans-serif;
      font-size: 13px;
      text-align: center;
    }
  }
}
</style>
  