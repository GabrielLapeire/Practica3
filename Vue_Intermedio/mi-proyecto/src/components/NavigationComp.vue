<template>
  <LogoVue/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/posts">Posts</router-link>
  </nav>
</template>

<script>
  import LogoVue from '@/components/LogoVue'
  export default {
    components: {
      LogoVue
    }
  }
</script>