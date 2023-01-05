<template>
  <div class="home">
    <section class="h-100 gradient-form ">
      <div class="container py-5 h-100">
        <h1>{{ $t('home.title')}}</h1>
        <div class="row d-flex justify-content-center align-items-center h-100 pannel">
          <div class="col-xl-20">
            
            <div class="row g-0 d-flex justify-content-center">
                <div class="col-lg-6 ">
                    <div class="text-center">
                        <h2 class="card_title">Recently Added</h2>
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