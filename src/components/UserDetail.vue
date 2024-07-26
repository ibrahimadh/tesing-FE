<template>
  <div>
    <h1>{{ item.name }}</h1>
    <p>{{ item.description }}</p>
    <router-link to="/UserProfile">Back to list</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const item = ref({})

    onMounted(async () => {
      const id = route.params.id
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/items/${id}`)
        item.value = response.data
      } catch (error) {
        console.error('There was an error fetching the item details:', error)
      }
    })

    return { item }
  }
}
</script>
