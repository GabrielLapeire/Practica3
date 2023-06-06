<template>
  <div class="about">
    <h1>Posts publicados</h1>
  </div>
  <PostList/>
</template>

<script>
import PostList from '../components/PostList.vue'
export default {
  name: 'PostView',
  components: {
    PostList
  }
}
</script>