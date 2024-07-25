<template>
    <div id="ItemView">
      <ItemsData />
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemsData from '../components/ItemsData.vue';

export default defineComponent({
  name: 'Item',
  components: {
    ItemsData
  }
});


</script>