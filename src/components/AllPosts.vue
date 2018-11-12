<template>
    <div>
        <app-post></app-Post>
    </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Essentials",
          author: "Brett Campbell",
          date: "11/07/2018",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          comments: ["Wow this stuff is hard!", "I agree with what he said!"]
        },
        {
          id: 2,
          title: "Duallys",
          author: "Brett Campbell",
          date: "11/08/2018",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          comments: ["Wow this stuff is hard!", "I agree with what he said!"]
        },
        {
          id: 3,
          title: "Workflow Frenzy",
          author: "Brett Campbell",
          date: "11/09/2018",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          comments: ["Wow this stuff is hard!", "I agree with what he said!"]
        },
        {
          id: 4,
          title: "Security Suckerpunch",
          author: "Brett Campbell",
          date: "11/10/2018",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          comments: ["Wow this stuff is hard!", "I agree with what he said!"]
        }
      ]
    };
  },
  components: {
    appPost: Post
  }
};
</script>
