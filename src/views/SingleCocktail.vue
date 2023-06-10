<template>
    <div>
      <CocktailCard/>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  import CocktailCard from '../components/CocktailCard.vue';
  
  export default {
    components: { CocktailCard },
    data() {
      return {
        
      };
    },
    mounted() {
      
    },
    methods: {
      
    },
    created() {
      // console.log(this.$route.params.id)
    },
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  