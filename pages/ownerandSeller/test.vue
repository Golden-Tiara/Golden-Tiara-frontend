<template>
  <div>
    <input v-model="message" placeholder="Type a message" />
    <button @click="saveToLocalStorage">Save to Local Storage</button>
    <div v-if="savedMessage">
      <h3>Saved Message:</h3>
      <p>{{ savedMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      savedMessage: null
    }
  },
  methods: {
    saveToLocalStorage() {
      localStorage.setItem('message', this.message);
      alert('Message saved to Local Storage!');
      this.savedMessage = this.message;
    }
  },
  created() {
    this.savedMessage = localStorage.getItem('message');
  }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
