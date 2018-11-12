<template>
  <div id="submit">
    <div class="submit-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="title">Title</label>
          <input
                  type="text"
                  id="title"
                  v-model="title">
        </div>
        <div class="input">
          <label for="author">Author</label>
          <input
                  type="text"
                  id="author"
                  v-model="author">
        </div>
        <div class="input">
          <label for="date">Date</label>
          <input
                  type="text"
                  id="date"
                  v-model="date">
        </div>
        <div class="input">
          <label for="content">Content</label>
          <input
                  type="text"
                  id="content"
                  v-model="content">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      author: "",
      date: "",
      content: ""
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        title: this.title,
        author: this.author,
        date: this.date,
        content: this.content
      };
      console.log(formData);
      axios
        .post("https://bufflog-af2e6.firebaseio.com/posts.json", formData)
        .then(response => console.log(response));
    }
  }
};
</script>

<style scoped>
.submit-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>
