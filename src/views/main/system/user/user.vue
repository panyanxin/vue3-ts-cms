<template>
  <div class="user">
    <cms-form v-bind="searchFormConfig" v-model="formData" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import CmsForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    CmsForm
  },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped></style>
