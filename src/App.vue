<template>
  <div>
    {{ query.isLoading }} <!-- semi-correctly inferred as DistributiveOmit but `isLoading` is Unresolved -->
    {{ query.data }} <!-- semi-correctly inferred as DistributiveOmit but `data` is unresolved -->

    {{ explicitlyTypedQuery.isLoading }} <!-- semi-correctly inferred as DistributiveOmit but `isLoading` is Unresolved -->
    {{ explicitlyTypedQuery.data }} <!-- semi-correctly inferred as DistributiveOmit but `data` is unresolved -->

    {{ isLoading }} <!-- incorrectly inferred as `any` -->
    {{ data }} <!-- incorrectly inferred as `any` -->
    {{ bacon }} <!-- correctly inferred as `number` -->
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { ref } from 'vue';

const query = useQuery({
  queryKey: ['key'],
  queryFn: () => Promise.resolve<number>(1)
})

const explicitlyTypedQuery = useQuery<number, unknown, number>({
  queryKey: ['explicit key'],
  queryFn: () => Promise.resolve<number>(1)
})

const { isLoading, data } = useQuery({
  queryKey: ['destructured assignment'],
  queryFn: () => Promise.resolve<number>(1)
})

const bacon = ref<number>(1)
</script>
