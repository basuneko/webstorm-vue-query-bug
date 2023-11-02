<template>
  <div>
    {{ query.isLoading }} <!-- `query` is unknown -->
    {{ query.data }} <!-- `query` is `unknown`, data resolved to Blob -->

    {{ explicitlyTypedQuery.isLoading }} <!-- `query is `unknown`, `isLoading` is unresolved -->
    {{ explicitlyTypedQuery.data }} <!-- `query` is `unknown`, data resolved to Blob -->

    {{ isLoading }} <!-- incorrectly inferred as `any` -->
    {{ data }} <!-- incorrectly inferred as `any` -->
    {{ bacon }} <!-- correctly inferred as `number` -->
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { ref } from 'vue';

// ‼️ See branch vue-query-4 for comparison.

interface QueryResponseType {
  name: string;
  age: number;
  friends: Array<{
    name: string;
    age: number;
  }>;
}

const query = useQuery({
  queryKey: ['key'],
  queryFn: () => Promise.resolve<QueryResponseType>({
    name: 'name',
    age: 1,
    friends: [{
      name: 'name',
      age: 1
    }]
  })
})

const explicitlyTypedQuery = useQuery<unknown, unknown, QueryResponseType>({
  queryKey: ['explicit key'],
  queryFn: () => Promise.resolve<QueryResponseType>({
    name: 'name',
    age: 1,
    friends: [{
      name: 'name',
      age: 1
    }]
  })
})

const { isLoading, data } = useQuery<unknown, unknown, QueryResponseType>({
  queryKey: ['destructured assignment'],
  queryFn: () => Promise.resolve<QueryResponseType>({
    name: 'name',
    age: 1,
    friends: [{
      name: 'name',
      age: 1
    }]
  })
})

const bacon = ref<number>(1)
</script>
