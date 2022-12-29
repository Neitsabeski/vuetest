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
            <div class="nav-link">
              <router-link to="/">
                Home
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <router-link to="/products">
                Products
              </router-link>
            </div>
          </li>
          <li class="nav-item">
              <div class="nav-link disabled">
                Films
              </div>
          </li>
          <li class="nav-item">
              <div class="nav-link disabled">
                Series
              </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <router-link to="/about">
                About
              </router-link>
            </div>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
        <div class="nav-item">
            <select class="selectpicker form-control" data-width="fit">
                <option value="en">English</option>
                <option value="fr">Français</option>
            </select>
        </div>
        <ul class="d-flex navbar-nav">
          <li class="nav-item">
            <div class="nav-link">
                <router-link to="/cart">
                  Cart ({{ this.$store.state.cartCount }})
                </router-link>
              </div>
          </li>
          <li class="nav-item">
            <div v-if="status == ''" class="nav-link">
              <router-link to="/loginregister">
                Login/Register
              </router-link>
            </div>
            <span v-if="status == 'logged'" class="nav-link">Logout</span>
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
          ...mapState(["status"])
      }
  }

</script>