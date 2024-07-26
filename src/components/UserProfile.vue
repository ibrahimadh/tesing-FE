<template>
  <div>
    <h1>All User</h1>
    <table class="table table-hover">
      <thead>
        <th class="fw-bold">Name</th>
        <th class="fw-bold">Description</th>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td class="table-name fw-bold">
            <router-link :to="{ name: 'UserDetail', params: { id: item.id } }">
              {{ item.name }}
            </router-link>
          </td>
          <td class="table-desc">{{ item.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/items/')
        this.data = response.data
      } catch (error) {
        console.error('There was ana error fetching the data:', error)
      }
    }
  }
}
</script>

<style scoped></style>
