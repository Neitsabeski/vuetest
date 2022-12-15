<template>
    <div class="products">
        <h1>This is a products page</h1>
        <section class="h-100 gradient-form bg-light">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                       
                        <div class="container p-4">
                            <div class="row row-cols-md-3">
                                <div v-for="p in pays" key="index">
                                    {{ p.name.official }}
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

    import Cards from '@/components/Cards.vue'

    export default {
        name: 'Products',
        component: {
            'cards': Cards
        },
        data(){
            return {
                pays: null
            }
        },
        mounted() {
            this.axios
                .get('https://restcountries.com/v3.1/region/europe')
                .then((reponse) => {
                    this.pays = reponse.data;
                    console.log(this.pays)
                });
            
        }
    }

</script>