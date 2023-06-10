<template>
  <div class="card padding-top">
    <div class="card-image"><img :src="cocktailDetails.strDrinkThumb" alt=""></div>
    <div class="card-content">
      <h2 class="card-title">{{ cocktailDetails.strDrink }}</h2>
      <p class="card-description">{{ cocktailDetails.strInstructionsIT }}</p>
      <p class="card-description">{{ cocktailDetails.strAlcoholic }}</p>
      <p class="card-description">{{ cocktailDetails.strGlass }}</p>
      <div class="card-ingredients">
        <h3 class="card-ingredients-title">Ingredienti:</h3>
        <ul class="card-ingredients-list">
          <li v-for="(ingredient, index) in getIngredients(cocktailDetails)" :key="index">
            {{ ingredient.measure }}, {{ ingredient.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      idCocktail: this.$route.params.id,
      cocktailDetails: {}
    }
  },
  created() {
  },
  methods: {
    getCocktailById(idCocktail){
      this.cocktailDetails = {}
      axios.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktail}`).then(response => {
        this.cocktailDetails = response.data.drinks[0]
      })
    },
    getIngredients(cocktailDetails) {
      const ingredients = []
      for (let i = 1; i <= 15; i++) {
        const ingredient = cocktailDetails['strIngredient' + i]
        const measure = cocktailDetails['strMeasure' + i]
        if (ingredient && measure) {
          ingredients.push({ name: ingredient, measure: measure })
        }
      }
      return ingredients
    }
  },
  mounted() {
    this.getCocktailById(this.idCocktail)
  },
};
</script>


<style lang="scss" scoped>
    .card {
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 0 auto;
}

.card-image {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.card-ingredients {
  margin-bottom: 10px;
}

.card-ingredients-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.card-ingredients-list {
  margin-left: 20px;
  font-size: 14px;
}

@media (min-width: 768px) {
  .card {
    max-width: 600px;
  }
}

@media (min-width: 1024px) {
  .card {
    max-width: 800px;
  }
}
</style>