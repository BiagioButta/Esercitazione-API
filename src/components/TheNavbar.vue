<template>
    <header class="fixed-top">
        <div class="container">

            <div class="row row-cols-1">

                <div class="col d-flex justify-content-center">
                    <img src="/logo.png" alt="LOGO">
                </div>

                <div class="col d-flex justify-content-center align-items-center">
                
                    <ul class="d-flex my-4">
                        <li>
                            <router-link :to="{ name: 'HomePage' }">Home</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'cocktail' }">I Cocktails</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'category' }">Le categorie</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'gallery' }">Gallery</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'shop' }">Shop</router-link>
                        </li>
                    </ul>
                
                </div>
            
            </div>

        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
        }
       
    }
</script>

<style lang="scss" scoped>
    img{
        width: 200px;
    }

    li{
        width: 200px;
        text-align: center;
        list-style-type: none;
        font-weight: bold;
        a{
            text-decoration: none;
            color: #000000;
        }
    }

    .fixed-top{
        position: fixed;
        top: 0;
        background-color: white;
    }
</style>