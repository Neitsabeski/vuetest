<template>
    <div class="contact">
        <section class="h-100 gradient-form">
            <div class="container py-5 h-100">
                <h1>{{ $t('contact.title')}}</h1>
                <div class="row d-flex justify-content-center align-items-center h-100 pannel">
                    <div class="col-xl-10">
                        <div class="row g-0 d-flex justify-content-center">
                            <div class="col-lg-6 ">
                                <div class="text-center">
                                    <h2 class="card_title">{{ $t('contact.subTitle')}}</h2>
                                </div>
                                <!-- Email section -->
                                <div class="group form-outline mb-4">
                                    <input v-model="email" class="form-control" type="email" placeholder="Email address" required />
                                </div>

                                <!-- Name section -->
                                <div class="form-outline mb-4">
                                    <input v-model="fullname" class="form-control" type="text" placeholder="Full name" required />
                                </div>

                                <!-- Subjects section -->
                                <div class="form-outline mb-4">
                                    <input v-model="subject" class="form-control" type="text" placeholder="Subject" required />
                                </div>

                                <!-- Message section -->
                                <div class="form-outline mb-4">
                                    <div class="md-form">
                                        <textarea v-model="message" type="text" rows="5" class="form-control md-textarea"  placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <!-- Button section -->
                                <div class="d-flex justify-content-center group form-outline mb-4">
                                    <button class="btn btn-primary" :class="{ 'disabled': !validatedFields }" @click="send">
                                        Send
                                    </button>
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

    import utils from '../helpers/utils';

    export default {
        name: 'About',
        data() {
            return {
                email: '',
                fullname: '',
                subject: '',
                message: ''
            }
        },
        computed: {
            validatedFields: function () {
                if (utils.ValidateEmail(this.email)
                    && utils.ValidateFullName(this.fullname)
                    && utils.ValidateText(this.subject)
                    && utils.ValidateText(this.message)
                    ) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
</script>