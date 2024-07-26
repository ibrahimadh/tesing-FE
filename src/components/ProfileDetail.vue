<!-- src/views/ItemDetail.vue -->
<template>
  <div class="container">
    <h1 class="text-center">Item Details</h1>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else-if="error" class="alert alert-danger"><strong>Error:</strong> {{ error }}</div>
    <div v-else>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  data() {
    return {
      user: {},
      loading: true,
      error: null
    }
  },
  created() {
    this.fetchItem()
  },
  methods: {
    async fetchItem() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/items/${this.id}`)
        this.user = response.data
        this.loading = false
      } catch (err) {
        this.error = 'Failed to fetch item: ' + err.message
        this.loading = false
      }
    }
  }
}
</script>
