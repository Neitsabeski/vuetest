<template>
    <div class="profile">
        <section class="h-100 gradient-form">
            <div class="container py-5 h-100">
                <h1>{{ $t('profile.title') }}</h1>
                <div class="row d-flex justify-content-center align-items-center h-100 pannel">
                    <div class="col-xl-10">
                        <div class="row g-0 d-flex justify-content-center">
                            <div class="col-lg-6 ">
                                <div class="text-center">
                                    <h2 class="card_title">{{ $t('profile.subTitle') }}</h2>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <p>UserId : {{ userId }}</p>
                                        <p>Firstname : {{ firstname }}</p>
                                        <p>Lastname : {{ lastname }}</p>
                                        <p>Phone : {{ lastname }}</p>
                                        <p>Lang : {{ lang }}</p>
                                        <p>Token : {{ token }}</p>
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
    name: 'Profile',
    data: function () {
        return {
            user: {},
            userId: '<>',
            firstname: '<>',
            lastname: '<>',
            lang: '<>',
            token: '<>',
        }
    },
    mounted: function () {
        this.user = this.$store.getters.getUser;
        if (this.user.userId < 0) {
            this.$router.push('/loginRegister');
        } else {
            this.token = this.user.token;
        }
    }
}

</script>