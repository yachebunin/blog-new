<template>
  <div class="container">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.error(error);
        });
  }
};
</script>
