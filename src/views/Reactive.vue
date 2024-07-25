<template>
    <ReactiveData />
</template>

<script lang="ts">

import ReactiveData from '../components/ReactiveData.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name : 'reactiveData',
    components : {
        ReactiveData
        }
});


</script>