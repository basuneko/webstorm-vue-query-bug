<template>
  <div>
    {{ isLoading }} <!-- incorrect -->
    {{ data }} <!-- incorrect -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useQuery } from '@tanstack/vue-query'

export default defineComponent({
  setup() {
    const { isLoading, data } = useQuery({
      queryFn: () => Promise.resolve<number>(1)
    })

    return {
      isLoading, // TS: Ref<false> | Ref<true>
      data // TS: Ref<number> | Ref<undefined>
    }
  }
})
</script>
