<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">V U E T E S T</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
          </li>
          <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Products</a>
          </li>
          <li class="nav-item">
            <a v-if="status == ''" class="nav-link" href="#"><router-link to="/loginregister">Login/Register</router-link></a>
            <span v-if="status == 'logged'" class="nav-link" href="#">Logout</span>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>

import { mapState } from 'vuex';

  export default {
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
    }
  }


</script>