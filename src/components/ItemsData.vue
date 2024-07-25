<template>
    <div>
        <h2>{{ ItemsData.name }}</h2>
        <p>{{ ItemsData.description }}</p>
        <p> {{ ItemsData }}</p>
        <div v-if="error" class="error-message">
            error fetching data: {{ error }}
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            ItemsData: [],
            error: ''
        };
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/items/')
            .then(response => {
                this.ItemsData = response.data;
            })
            .catch(error => {
                this.error = error.message;
            })
    }
}
</script>

<style scoped>
/* Optional scoped styles */
.error-message {
  color: red;
}
</style>