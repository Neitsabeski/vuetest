<template>
  <div>
    <HeaderComp/>
    <router-view/>
    <FooterComp />
  </div>
</template>

<script>

  import HeaderComp from '@/components/HeaderComponent'
  import FooterComp from '@/components/FooterComponent'

  export default {
    components: {
      FooterComp,
      HeaderComp
    },
  }

</script>