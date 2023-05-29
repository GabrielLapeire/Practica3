<template>
  <div class="about">
    <h1>Posts publicados</h1>
  </div>
  <ul>
    <li v-for="post in postList" :key="post.id">
    {{ post.title }}
    </li>
  </ul>
</template>

<script>
import PostService from '@/services/PostService';
export default {
  name: 'postList',
  created() {
    PostService.get()
    .then(postList => this.postList = postList.data);
  },
  data() {
    return {
      postList: []
    }
  }
}
</script>