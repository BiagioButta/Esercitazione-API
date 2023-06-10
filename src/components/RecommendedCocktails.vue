<template>
    <div class="container">
      <h2>Recommended Cocktails</h2>
      <div class="row row-cols-3">
        <div class="col" v-for="(cocktail, index) in randomCocktails" :key="index">
          <h3>{{ cocktail.strDrink }}</h3>

          <router-link :to="{ name: 'singlecocktail', params: { id: cocktail.idDrink } }"><h2><img :src="cocktail.strDrinkThumb" alt=""></h2></router-link>

        </div>
      </div>
    </div>
</template>
  

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                randomCocktails: []
            }
        },
        methods: {
            getRandomCocktails(i){
                for(i=0; i < 6; i++){

                    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(response => {
                        const cocktails = response.data.drinks[0]
                        this.randomCocktails.push(cocktails)
                    })
                }
            }
        },
        mounted() {
            this.getRandomCocktails()
        },
    }
</script>

<style lang="scss" scoped>
    img{
        width: 300px;
    }
</style>