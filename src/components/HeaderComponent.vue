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
            <a class="nav-link" href="#"><router-link to="/products">Products</router-link></a>
          </li>
          <li class="nav-item">
              <a class="nav-link disabled" href="#">Films</a>
          </li>
          <li class="nav-item">
              <a class="nav-link disabled" href="#">Series</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
        <select class="selectpicker" data-width="fit">
            <option>English</option>
            <option>French</option>
        </select>
        <ul class="d-flex navbar-nav">
          <li class="nav-item">
            <a v-if="status == ''" class="nav-link" href="#"><router-link to="/loginregister">Login/Register</router-link></a>
            <span v-if="status == 'logged'" class="nav-link" href="#">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

    import { mapState } from 'vuex';

    export default {
    computed: {
        ...mapState(['status'])
    }
    }

</script>