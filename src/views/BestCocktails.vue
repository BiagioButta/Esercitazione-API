<template>
    <div class="container padding-top">
        <h2>Best Cocktails</h2>
        <div v-if="randomCocktailsList">
            <div class="row">
                <div class="col-4" v-for="(randomCocktail, index) in randomCocktailsList" :key="index">
                    <div class="card mt-3" style="width: 18rem;">
                      <img class="card-img-top" :src="randomCocktail.strDrinkThumb" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">{{ randomCocktail.strDrink }}</h5>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{ randomCocktail.strCategory }}</li>
                        <li class="list-group-item">{{ randomCocktail.strAlcoholic }}</li>
                        <li class="list-group-item">{{ randomCocktail.strGlass }}</li>
                      </ul>
                      <div class="card-body">
                        <router-link class="text-decoration-none text-black" :to="{ name: 'singlecocktail', params: { id: randomCocktail.idDrink } }">Visualizza dettagli</router-link>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>
  

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                randomCocktailsList: []
            }
        },
        methods: {
            getRandomCocktails(i){
                for(i=0; i < 6; i++){

                    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(response => {
                        const randomCocktails = response.data.drinks[0]
                        this.randomCocktailsList.push(randomCocktails)
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

</style>