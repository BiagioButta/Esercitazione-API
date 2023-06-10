<template>
    <div class="container padding-top">
        <div class="row">
            <div class="col">
                <Carousel :autoplay="2000" :wrap-around="true" :wrapAround="true" :transition="800">
                    <Slide v-for="(image,i) in images" :key="i">
                      <div class="carousel__item">
                        <img :src="`/img/${image}`" alt="">
                      </div>
                    </Slide>

                    <template #addons>
                      <Pagination />
                    </template>
                </Carousel>
            </div>
        </div>
        <div class="row justify-content-center text-center">
            <div class="col-md-4" v-for="(image,i) in images" :key="i"><div class="gallery-img m-3"><img :src="`/img/${image}`" alt=""></div></div>
            <div class="col-md-4" v-for="(image,i) in images" :key="i"><div class="gallery-img m-3"><img :src="`/img/${image}`" alt=""></div></div>
            <div class="col-md-4" v-for="(image,i) in images" :key="i"><div class="gallery-img m-3"><img :src="`/img/${image}`" alt=""></div></div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'

    export default defineComponent({
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation
        },
        data() {
            return {
                images: [
                    'ambitious-studio-rick-barrett-Hw7hK-kYA-Q-unsplash.jpg',
                    'ambitious-studio-rick-barrett-QjUY7auDzUQ-unsplash.jpg',
                    'clovis-wood-photography-FT1PJqW0qtE-unsplash.jpg',
                    'edward-howell-5tf40DJYvBM-unsplash.jpg',
                    'edward-howell-rdJhMyb4Yuc-unsplash.jpg',
                    'emily-andreeva-hXg4gGjIfhw-unsplash.jpg',
                    'great-cocktails-9PyQwwmZxpI-unsplash.jpg',
                    'great-cocktails-gBvGB7mpbjk-unsplash.jpg',
                    'kitera-dent-6n_kXdPJa3s-unsplash.jpg',
                    'lefteris-kallergis-QsmdVT5pTMw-unsplash.jpg',
                    'mae-mu-YNMjGIPgD_c-unsplash.jpg',
                    'nikita-tikhomirov-vAkIPzXOSOc-unsplash.jpg',
                    'vlady-nykulyak-_ApfDwbmkH8-unsplash.jpg'
                ]
            }
        }
    })    
</script>

<style lang="scss" scoped>
.carousel__item img {
  width: 300px;
}
.gallery-img{
    width: 400px;
    height: 600px;
    display: flex;
}
</style>