<template>
  <v-form>

  <v-container class="container-content" fluid>
    <div class="container-page">
      <v-text-field
            v-model="title"
            label="Title"
            counter
            maxlength="4"
          ></v-text-field>
    </div>
  </v-container>
</v-form>

</template>  

<script>

export default {
  name: 'InvitedComponent',
  data: () => ({ 
    people: []
  }),

  methods: {
  }
}

</script>
  
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Tangerine:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap');

.container-content {
  height: 100vh;
  padding: 0px;
  background-color: #F6F4F5;

}

.container-page {
  display: flex;
  width: 100%;
  height: 100%;
 
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
    }
  }
}
</style>
    