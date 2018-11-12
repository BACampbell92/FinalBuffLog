<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success" v-for="post of posts" :key="post">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ post.title }}
                    <small>{{ post.author }}: {{ post.date }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    {{ post.content }}
                </div>
                <div class="pull-right">
                    <button class="btn btn-success"><router-link to="/view/:id">View More...</router-link></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
/*export default {
  data() {
    return {
      title: "",
      author: "",
      date: "",
      content: ""
    };
  },
  created() {
    axios
      .get("https://bufflog-af2e6.firebaseio.com/posts.json")
      .then(response => {
        console.log(response);
        const data = response.data;
        const posts = [];
        for (let key in data) {
          const post = data[key];
          post.id = key;
          posts.push(post);
        }
        console.log(posts);
        this.title = posts[0].title;
        this.author = posts[0].author;
        this.date = posts[0].date;
        this.content = posts[0].content;
      });
  }
}; */

export default {
  data() {
    return {
      posts: ["title", "author", "date", "content"]
    };
  },
  created() {
    axios
      .get("https://bufflog-af2e6.firebaseio.com/posts.json")
      .then(response => {
        this.posts = response.data;
      });
  }
};
</script>

