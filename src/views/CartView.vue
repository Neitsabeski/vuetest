<template>
    <div class="cart">
        <h1>{{ $t('cart.title')}}</h1>
        <section class="h-100 gradient-form bg-light">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">

                        <h2>Cart</h2>

                        <div v-if="this.$store.state.cartCount > 0">
                            <h3>This is your cart</h3>
                            <div class="row">
                                <h4 class="col-md-1">#</h4>
                                <h4 class="col-md-4">title</h4>
                                <h4 class="col">quantity</h4>
                                <h4 class="col">price</h4>
                            </div>

                            <div class="row" v-for="item in this.$store.state.cart" v-bind:key="item.product.id">
                                <span class="col-md-1">{{ item.product.id }}</span>
                                <span class="col-md-4">{{ item.product.title }}</span>
                                <span class="col">{{ item.quantity }}</span>
                                <span class="col">{{ item.product.price * item.quantity }} €</span>
                                <hr />
                            </div>

                            <div class="row">
                                <span class="col-md-5"></span>
                                <h4 class="col">Subtotal</h4>
                                <h4 class="col">??? €</h4>
                            </div>

                            <div class="row">
                                <button class="col btn btn-primary" type="submit" :class="{'disabled' : !canPurchase}">Purchase</button>
                            </div>
                        </div>

                        <div v-else>
                            <h3>Cart is empty</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        computed: {
            canPurchase: function(){
                return this.$store.state.cartCount > 0 && this.$store.state.status == 'logged';
            }
        },
    }


</script>