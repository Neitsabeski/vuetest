<template>
    <div class="card">
        <div class="row g-0 d-flex justify-content-center">
            <div class="col-lg-6 ">

                <!-- Titles section -->
                <div class="text-center">
                    <h2 class="card_title" v-if="mode == 'login'">Login</h2>
                    <h2 class="card_title" v-else>Register</h2>

                    <p class="card_subtitle" v-if="mode == 'login'">Don't have an account ? <span class="card_action" @click="switchToRegister">Register here</span></p>
                    <p class="card_subtitle" v-else>Already have an account ? <span class="card_action" @click="switchToLogin">Login here</span></p>
                </div>

                <!-- Email section -->
                <div class="group form-outline mb-4" >
                    <input v-model="email" class="form-control" type="email" placeholder="Email address" required/>
                </div>

                <!-- Names section -->
                <div class="row form-outline mb-4" v-if="mode == 'register'">
                    <div class="group col-md-6">
                        <input v-model="firstname" class="form-control" type="text" placeholder="First Name" required/>
                    </div>
                    <div class="group col-md-6  form-outline">
                        <input v-model="lastname" class="form-control" type="text" placeholder="Last Name" required/>
                    </div>
                </div>

                <!-- Phone section -->
                <div class="group form-outline mb-4" v-if="mode == 'register'">
                    <input v-model="phone" class="form-control" type="tel" placeholder="Phone number" required/>                
                </div>

                <!-- Langue section -->
                <div class="group form-outline mb-4" v-if="mode == 'register'" required>
                    <select v-model="lang" class="form-control">
                        <option value="" disabled>Language</option>
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                    </select>
                </div>

                <!-- Password section -->
                <div class="group form-outline mb-4">
                    <input v-model="password" class="form-control" type="password" placeholder="Password" required/>
                </div>

                <!-- Password Verification section -->
                <div class="group form-outline mb-4" v-if="mode == 'register'">
                    <input v-model="passwordverification" class="form-control" type="password" placeholder="Password verification"/>
                </div>

                <!-- Buttons section -->
                <div class="d-flex justify-content-center group form-outline mb-4">
                    <div v-if="mode == 'login' && status == 'error_login'">
                        <span>Bad email address and/or password</span>
                    </div>

                    <div v-if="mode == 'login'">
                        <button class="btn btn-primary" :class="{'disabled' : !validatedFields}" @click="login">
                            <span v-if="status == 'loading'">Login in ...</span>
                            <span v-else>Login</span>
                        </button>
                        <span>Forgot password?</span>
                    </div>
                    <div v-else>
                        <button class="btn btn-primary" :class="{'disabled' : !validatedFields}" @click="register">
                            <span v-if="status == 'loading'">Register in ...</span>
                            <span v-else>Register</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>



<script>

    import { mapState } from 'vuex';

    export default {
        name: 'Sign',
        data: function() {
            return {
                mode: 'login',
                email: '',
                firstname: '',
                lastname: '',
                phone: '',
                lang: '',
                password: '',
                passwordverification: ''
            }
        },
        computed: {
            validatedFields: function() {
                if (this.mode == 'register'){
                    if(this.email != "" && this.firstname != "" && this.lastname != "" && this.lang!= "" && this.phone!= "" && this.password!= "" && this.passwordverification!= ""){
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    if(this.email != "" && this.password!= ""){
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            ...mapState(['status'])
        },
        methods: {
            switchToRegister: function() {
                this.mode = 'register';
            },
            switchToLogin: function() {
                this.mode = 'login';
            },
            login: function(event){
                const self = this;
                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password
                }).then(function(response){
                    self.$router.push('profile');
                }, function(error){
                    console.log(error);
                })
            },
            register: function(event){
                const self = this;
                this.$store.dispatch('register', {
                    email: this.email,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    phone: this.phone,
                    lang: this.lang,
                    password: this.password,
                    passwordverification: this.passwordverification
                }).then(function(response){
                    console.log(response);
                    self.login();
                }, function(error){
                    console.log(error);
                })
            },
        }
    }

</script>