<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <h2>Comments</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id" class="comment">
        <strong>{{ comment.name }}</strong>: {{ comment.body }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      post: {},
      comments: []
    };
  },
  created() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => {
          this.post = response.data;
        })
        .catch(error => {
          console.error(error);
        });

    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
        .then(response => {
          this.comments = response.data;
        })
        .catch(error => {
          console.error(error);
        });
  }
};
</script>
