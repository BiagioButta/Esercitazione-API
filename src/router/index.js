import { createRouter, createWebHistory } from 'vue-router'

import Cocktail from '../views/Cocktail.vue'
import BestCocktails from '../views/BestCocktails.vue'
import HomePage from '../views/HomePage.vue'
import SingleCocktail from '../views/SingleCocktail.vue'
import Category from '../views/Category.vue'
import Gallery from '../views/Gallery.vue'
import Shop from '../views/Shop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/cocktail',
      name: 'cocktail',
      component: Cocktail
    },
    {
      path: '/bestcocktails',
      name: 'bestcocktails',
      component: BestCocktails
    },
     {
      path: '/singlecocktail/:id',
      name: 'singlecocktail',
      component: SingleCocktail
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    }
  ]
})

export default router
