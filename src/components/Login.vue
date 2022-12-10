<template>
    <div class="card">
        <div class="row g-0 d-flex justify-content-center">
            <div class="col-lg-6 ">

                <!-- Titles section -->
                <div class="text-center">
                    <h1 class="card__title" v-if="mode == 'login'">Login</h1>
                    <h1 class="card__title" v-else>Register</h1>

                    <p class="card__subtitle" v-if="mode == 'login'">Don't have an account ? <span class="card__action" @click="switchToRegister">Register here</span></p>
                    <p class="card__subtitle" v-else>Already have an account ? <span class="card__action" @click="switchToLogin">Login here</span></p>
                </div>
                
                <!-- Email section -->
                <div class="group form-outline mb-4" >
                    <input v-model="email" class="form-control" type="email" placeholder="Email address"/>
                </div>

                <!-- Names section -->
                <div class="row form-outline mb-4" v-if="mode == 'register'">
                    <div class="group col-md-6">
                        <input v-model="firstname" class="form-control" type="text" placeholder="First Name"/>
                    </div>
                    <div class="group col-md-6  form-outline">
                        <input v-model="lastname" class="form-control" type="text" placeholder="Last Name"/>
                    </div>
                </div>

                <!-- Phone section -->
                <div class="group form-outline mb-4" v-if="mode == 'register'">
                    <input v-model="phone" class="form-control" type="tel" placeholder="Phone number"/>                
                </div>

                <!-- Langue section -->
                <div class="group form-outline mb-4" v-if="mode == 'register'">
                    <select v-model="lang" class="form-control">
                        <option value="" disabled>Language</option>
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                    </select>
                </div>

                <!-- Password section -->
                <div class="group form-outline mb-4">
                    <input v-model="password" class="form-control" type="password" placeholder="Password"/>
                </div>

                <!-- Password Verification section -->
                <div class="group form-outline mb-4" v-if="mode == 'register'">
                    <input v-model="passwordverification" class="form-control" type="password" placeholder="Password verification"/>
                </div>

                <!-- Buttons section -->
                <div class="d-flex justify-content-center group form-outline mb-4">
                    <div v-if="mode == 'login'">
                        <button class="btn btn-primary" :class="{'disabled' : !validatedFields}" @click="login">
                            Login
                        </button>
                        <span>Forgot password?</span>
                    </div>
                    <div v-else>
                        <button class="btn btn-primary" :class="{'disabled' : !validatedFields}" @click="register">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>



<script>
import { objectExpression } from '@babel/types';
import { TypedChainedSet } from 'webpack-chain';


    export default {
        name: 'Login',
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
            }
        },
        methods: {
            switchToRegister: function() {
                this.mode = 'register';
            },
            switchToLogin: function() {
                this.mode = 'login';
            },
            login: function(){
                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password
                })
            },
            register: function(){
                this.$store.dispatch('register', {
                    email: this.email,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    phone: this.phone,
                    lang: this.lang,
                    password: this.password,
                    passwordverification: this.passwordverification
                })
            }
        }
    }

</script>