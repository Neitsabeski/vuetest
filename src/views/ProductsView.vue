<template>
    <div class="products">
        <h1>{{ $t('products.title')}}</h1>
        <section class="h-100 gradient-form bg-light">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        
                        <div class="row">
                            <div class="col">
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
                        
                        <div class="col">
                            <div class="container mt-5 mb-3">
                                <div class="row">

                                    <!-- CARDS -->
                                    <div v-for="product in products" v-bind:key=product.id class="col-md-3 card  p-3 mb-2">
                                        <img class="card-img-top" src="../../public/img/products/noimage.png" alt=""/>
                                        <div class="card-body">
                                            <div class="card-title">
                                                <h5>{{ product.title }}</h5>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            {{ product.format.name }}
                                            stock : {{ product.stock }}
                                            price : {{ product.price }} €
                                        </div>
                                        <div class="card-body">
                                            <font-awesome-icon v-for="s in product.rating" v-bind:key="s" icon="star" />
                                        </div>
                                        <div class="card-body">
                                            <button v-if="product.stock > 0" v-on:click="addToCart(product)" class="btn btn-primary"><font-awesome-icon icon="shopping-cart" /></button>
                                            <button v-else v-on:click="addToCart(product)" class="btn btn-primary disabled"><font-awesome-icon icon="shopping-cart" /></button>
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
            this.totalPage = this.$store.state.totalPage;
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