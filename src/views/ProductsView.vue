<template>
    <div class="products">


        <section class="h-100 gradient-form ">
            <div class="container py-5 h-100">
                <h1>{{ $t('products.title')}}</h1>
                <div class="row d-flex justify-content-center align-items-center h-100 pannel">
                    <div class="col-xl-20">
                        
                        <div class="row">
                            <div class="col-md-2">
                                <div class="">
                                   <h4>Filters</h4>
                                    <div>
                                        <h5>Added</h5>
                                        <input type="checkbox"/>
                                        <label>Recently added</label>
                                    </div>
                                    <div>
                                        <h5>Genres</h5>
                                        <input type="checkbox"/>
                                        <label>Horror</label>
                                        <input type="checkbox"/>
                                        <label>Romantic</label>
                                        <input type="checkbox"/>
                                        <label>Adventure</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-10">
                                <div class="container ">
                                    <div class="row">

                                        <!-- CARDS -->
                                        <div v-for="product in products" v-bind:key=product.id class="product col-md-2 card ">
                                            <div class="cropped">
                                                <img v-if="!product.pictureUrl" class="card-img-top" src="../../public/img/products/noimage.png" alt="noimage"/>
                                                <img v-else class="card-img-top" :src="product.pictureUrl" :alt="product.pictureUrl"/>
                                            </div>
                                            <div class="card__body">
                                                <div class="card-body rating">
                                                    <font-awesome-icon v-for="s in product.rating" v-bind:key="s" icon="star" />
                                                    <font-awesome-icon v-for="s in (5 - product.rating)" v-bind:key="s" icon="fa-regular fa-star" />
                                                </div>
                                                <div class="card-title">
                                                    <RouterLink to="/product/{{product.id}}">
                                                        <h5>{{ product.title }}</h5>
                                                    </RouterLink>
                                                </div>
                                                <div class="card-body">
                                                    <button v-if="product.stock > 0" v-on:click="addToCart(product)" class="btn btn-primary">
                                                        <font-awesome-icon icon="shopping-cart" /> {{ product.price }} €
                                                    </button>
                                                    <button v-else v-on:click="addToCart(product)" class="btn btn-primary disabled">
                                                        <font-awesome-icon icon="shopping-cart" />
                                                    </button>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- PAGES SELECTION -->
                                <div class="container mt-5 mb-3  justify-content-center">
                                    <div class="row">
                                        <span class="col"> &#60; previous </span>
                                        <span class="col"> {{ currentPage }} / {{ totalPage }} </span>
                                        <span class="col"> next &#62; </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        name: 'Products',
        data(){
            return {
                products: [],
                totalPage: 0,
                currentPage: 0,
                cart: [],
            }
        },
        mounted(){
            this.products = this.$store.state.products;
            this.totalPage = this.$store.state.productPage;
            this.currentPage = this.$store.state.currentPage;
        },
        methods:{
            addToCart: function(product){
                this.$store.commit('addToCart', product);
                this.cart = this.$store.state.cart;
            }
        }
    }

</script>