<template>
   
    <div class="padding-top">

      <!-- <div>
    <video controls>
      <source src="path_to_video/video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div> -->
      
      <div>
        <div class="bgimg-1">
          <div class="caption">
            <span class="border">
                <router-link class="text-white text-decoration-none text-uppercase" :to="{ name: 'bestcocktails' }">Best cocktails</router-link>
            </span>
          </div>
        </div>

        <div style="position:relative;">
          <div style="color:#ddd;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;">
          <p>Work in progress...</p>
          </div>
        </div>

        <div class="bgimg-2">
          <div class="caption">
            <span class="border">
                <router-link class="text-white text-decoration-none text-uppercase" :to="{ name: 'HomePage' }">I nostri barman</router-link>
            </span>
          </div>
        </div>

        <div style="position:relative;">
          <div style="color:#ddd;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;">
          <p>Work in progress...</p>
          </div>
        </div>
        <div class="bgimg-3">
          <div class="caption">
            <span class="border">
                <router-link class="text-white text-decoration-none text-uppercase" :to="{ name: 'HomePage' }">Altro link...</router-link>
            </span>
          </div>
        </div>

        <div style="position:relative;">
          <div style="color:#ddd;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;">
          <p>Work in progress...</p>
          </div>
        </div>

      </div>

    </div>

</template>

<script>
import PopularCocktails from '../components/PopularCocktails.vue'
import RecommendedCocktails from '../components/RecommendedCocktails.vue'
    export default {
    components: { PopularCocktails, RecommendedCocktails },
    data() {
        return {
            images: [
                "/img/ash-edmonds-fsI-_MRsic0-unsplash.jpg",
                "/img/chino-rocha-X52UzrosyDs-unsplash.jpg",
                "/img/ash-edmonds-fsI-_MRsic0-unsplash.jpg"
            ]
        }
    },
        
    }
</script>

<style lang="scss" scoped>



.bgimg-1, .bgimg-2, .bgimg-3 {
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.bgimg-1 {
  background-image: url("/img/ash-edmonds-fsI-_MRsic0-unsplash.jpg");
  min-height: 600px;
}

.bgimg-2 {
  background-image: url("/img/chino-rocha-X52UzrosyDs-unsplash.jpg");
  min-height: 600px;
}

.bgimg-3 {
  background-image: url("img/kobby-mendez-xBFTjrMIC0c-unsplash.jpg");
  min-height: 600px;
}

.caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
}

.caption span.border {
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
}

h3 {
  letter-spacing: 5px;
  text-transform: uppercase;
  font: 20px "Lato", sans-serif;
  color: #111;
}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1024px) {
  .bgimg-1, .bgimg-2, .bgimg-3 {
    background-attachment: scroll;
  }
}
</style>