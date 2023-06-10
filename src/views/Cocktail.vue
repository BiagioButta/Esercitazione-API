<template>
  <div class="container padding-top vh-100">

    <div class="row row-cols-1">
      <div class="col">
        <h2 class="text-center">La lista dei cocktails</h2>
      </div>
      <div class="col">
        <button class="btn border text-center" v-for="letter in alfabeto" :key="letter" @click="getCocktailsByFirstLetter(letter)">
          {{ letter }}
        </button>
      </div>
    </div>

    <div v-if="Object.keys(cocktailList).length !== 0">
      <div class="row row-cols-3" v-for="(cocktails, letter) in cocktailList" :key="letter">
        
        <router-link v-for="cocktail in cocktails" :key="cocktail.idDrink" class="text-decoration-none text-black" :to="{ name: 'singlecocktail', params: { id: cocktail.idDrink } }">
          <div class="col"><h2>{{ cocktail.strDrink }}</h2></div>
        </router-link>
           
      </div>
    </div>  
    <div v-else-if="noCocktails">
      Nessun cocktail disponibile con questa iniziale
    </div>
    <div v-else>
      Seleziona la lettera
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      alfabeto: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      cocktailList: {},
      noCocktails: false
    }
  },
  methods: {
    getCocktailsByFirstLetter(letter) {
      this.cocktailList = {}
      this.noCocktails = false

      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`).then(response => {
        if(response.data.drinks){
          this.cocktailList[letter] = response.data.drinks
        } else {
          this.noCocktails = true
        }
      })
    }
  }
}
</script>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
}
</style>
