<template>
    <div class="loginregister">
        <h1>This is a sign page</h1>
        <section class="h-100 gradient-form bg-light">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        <SignComp />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import SignComp from '@/components/SignComponent.vue'

    export default {
        components: {
            SignComp
        }
    }
</script>