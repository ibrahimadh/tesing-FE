<template>
  <div>
    <h1>All Profile</h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <th class="fw-bold">Name</th>
          <th class="fw-bold">Description</th>
        </tr>
      </thead>
      <tbody v-for="user in data" :key="user.id">
        <tr>
          <td>
            <router-link :to="{ name: 'ProfileDetail', params: { id: user.id } }">
              {{ user.name }}
            </router-link>
          </td>
          <td>
            {{ user.description }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="error" class="error"><strong>Error:</strong> {{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: [], // Holds the fetched data
      loading: true, // Indicates if data is being fetched
      error: null // Holds any error message
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/items/') // Replace with your API endpoint
        this.data = response.data // Assumes the API returns an array of objects
        this.loading = false
      } catch (err) {
        this.error = 'Failed to fetch data: ' + err.message
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
