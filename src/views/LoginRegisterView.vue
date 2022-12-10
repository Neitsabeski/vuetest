<template>
    <div class="sign">
        <h1>This is a sign page</h1>
        <section class="h-100 gradient-form bg-light">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        <Login />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Login from '@/components/Login.vue'

    export default {
        components: {
            Login
        }
    }
</script>