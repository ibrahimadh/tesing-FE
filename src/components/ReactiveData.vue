<template>
    <div>
      <p>{{ message }}</p>
      <button @click="updateMessage">Update Message</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'ExampleComponent',
    setup() {
      const message = ref('Hello Vue.js');
  
      const updateMessage = () => {
        message.value = 'Updated message!';
      };
  
      return {
        message,
        updateMessage
      };
    }
  });
  </script>
  