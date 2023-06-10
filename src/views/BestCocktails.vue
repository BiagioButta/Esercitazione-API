<template>
    <div class="container padding-top">
    <h2>Best Cocktails</h2>
      <div class="row row-cols-3">
        <div class="col" v-for="(bestCocktail, index) in bestCocktailsList" :key="index">
          <h3>{{ bestCocktail.strDrink }}</h3>

          <!-- <router-link :to="{ name: 'singlecocktail', params: { id: bestCocktail.idDrink } }"><h2><img :src="bestCocktail.strDrinkThumb" alt=""></h2></router-link> -->

        </div>
      </div>
    </div>
</template>
  

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                bestCocktailsList: []
            }
        },
        methods: {
            getBestCocktails(i){
                for(i=0; i < 6; i++){

                    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(response => {
                        const bestCocktails = response.data.drinks[0]
                        this.bestCocktailsList.push(bestCocktails)
                    })
                }
            }
        },
        mounted() {
            this.getBestCocktails()
        },
    }
</script>

<style lang="scss" scoped>
    img{
        width: 300px;
    }
</style>