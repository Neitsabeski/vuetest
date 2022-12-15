<template>
    <div class="profile">
        <h1>This is a profile page</h1>
        <section class="h-100 gradient-form bg-light">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        <h2>User Data</h2>
                        <div>
                            <p>UserId : {{ userId }}</p>
                            <p>Firstname : {{ firstname }}</p>
                            <p>Lastname : {{ lastname }}</p>
                            <p>Lang : {{ lang }}</p>
                            <p>Token : {{ token }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        name: 'Profile',
        data: function() {
            return {
                userId: '<>',
                firstname: '<>',
                lastname: '<>',
                lang: '<>',
                token: '<>',
            } 
        },
        mounted: function() {
            console.log(this.$store.state.user.userId);
            if(this.$store.state.user.userId == -1) {
                this.$router.push('/');
            }
        }
    }

</script>