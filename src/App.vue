<template>
  <div>
    {{ isLoading }} <!-- incorrect -->
    {{ data }} <!-- incorrect -->
    {{ bacon }} <!-- correctly inferred as `number` -->
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { ref } from 'vue';

const { isLoading, data } = useQuery({
  queryFn: () => Promise.resolve<number>(1)
})

const bacon = ref<number>(1)
</script>
