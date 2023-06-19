<template>
  <div class="home-container">
    <div class="image-text-wrapper">
      <img :height="600" src="../assets/csgo1.jpg" />
      <p class="welcome-text">Welcome to the new era of cs:go!</p>
      <p class="welcome-text">Who we are?</p>
      <p class="welcome-text">We organize tournaments exclusively in CS:GO</p>
         <router-link to="/about">
      <v-btn variant="tonal"  class="more-button"> See more </v-btn>
         </router-link>
    </div>

    <div class="main-section">
          <div class="find-section">
            <div class="border-container">
                  <img src="../assets/player.jpg" alt="players">
                  <p class="title-home">Find Players</p>
                  <span class="desc">View available players, create a team and join the tournament.</span>
                  <v-btn class="see-more">See more</v-btn>
            </div>

            <div class="border-container">
              <img src="../assets/tour.jpg" alt="tournaments">
                <p class="title-home">Look tournaments</p>
                 <span class="desc">View active  or create tournament, find players and enjoy!</span>
                 <v-btn class="see-more">See more</v-btn>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss">

.home-container {
  width: 100%;
  padding: 0 !important;
  .image-text-wrapper {
    width: 100%;
    height: 600px;
    .more-button {
      position: relative;
      bottom: 450px;
      left: 60px;
    }
    .welcome-text {
      position: relative;
      bottom: 450px;
      left: 60px;
      width: fit-content;
      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
      color: #fff;
    }
  }
  img {
    width: 100%;
  }
}
.main-section{
  background-color: #0d0d0d;
  padding:2rem 0;
  .find-section{
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    .border-container{
      margin-top: 1rem;
      border: 1px solid gray;
      width: 350px;
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      height: 450px;
      img{
        border-radius: 12px 12px 0 0;
      }
      .title-home{
        color: #f3f3f3;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        margin-top: 0.5rem;
      }
      .desc{
        color: #f3f3f3;
        font-size: 14px;
        text-align: center;
      }
      .see-more{
        width: 300px;
        margin: 1rem auto;
      }
    }
  }
}
@media only screen and (max-width: 750px) {
  .find-section{
    flex-direction: column;
  }
}
@media only screen and (max-width: 570px) {
  .welcome-text{
    left: 10px !important;
    font-size: 16px !important;
    text-transform: none !important;
  }
  .more-button{
  left: 10px !important;
  }
}
</style>
