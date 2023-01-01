<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <div class="nav-link navbar-brand"><router-link to="/">P R I M E F L I X</router-link></div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="justify-content-center align-items-center navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <div class="nav-link">
              <router-link to="/">
                {{ $t('homeLink')}}
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <router-link to="/products">
                {{ $t('productsLink')}}
              </router-link>
            </div>
          </li>
          <li class="nav-item">
              <div class="nav-link disabled">
                {{ $t('filmsLink')}}
              </div>
          </li>
          <li class="nav-item">
              <div class="nav-link disabled">
                {{ $t('seriesLink')}}
              </div>
          </li>
          <li class="nav-item">
              <div class="nav-link disabled">
                {{ $t('offersLink')}}
              </div>
          </li>
        </ul>
        <ul class="d-flex navbar-nav dropdown-toggle">
          
          <div class="nav-item">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="..." aria-label="Search">
              <button class="btn btn-primary" type="submit">
                {{ $t('searchBtn')}}
              </button>
            </form>
          </div>
          
          <li class="nav-item">
            <LocaleSwitcher/>
          </li>
          
          <li class="nav-item">
            <div class="nav-link">
                <router-link to="/cart">
                  {{ $t('cartLink')}}({{ this.$store.state.cartCount }})
                </router-link>
              </div>
          </li>

          <li class="nav-item">
            <div v-if="status == ''" class="nav-link">
              <router-link to="/loginregister">
                {{ $t('loginRegisterLink')}}
              </router-link>
            </div>
            <span v-if="status == 'logged'" class="nav-link">
              {{ $t('logoutLink')}}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

    import LocaleSwitcher from "./LocaleSwitcher.vue";
    import { mapState } from 'vuex';

    export default {
      components: { LocaleSwitcher, LocaleSwitcher },
      computed: {
          ...mapState(["status"])
      }
  }

</script>