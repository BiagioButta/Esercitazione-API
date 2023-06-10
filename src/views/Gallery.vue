<template>
    <Carousel :autoplay="2000" :wrap-around="true">
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item">{{ slide }}</div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
    </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel'
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

    export default defineComponent({
        components: {
            Carousel,
            Slide,
            Pagination,
        },
        data() {
            return {
                imagesPath: []
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>