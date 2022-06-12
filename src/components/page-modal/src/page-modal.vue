<template>
  <div class="page-modal">
    <el-dialog
      title="新建用户"
      v-model="dialogVisible"
      width="30%"
      center
      destroy-on-close
    >
      <cms-form v-bind="modalConfig" v-model="formData"></cms-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'

import CmsForm from '@/base-ui/form'
export default defineComponent({
  components: {
    CmsForm
  },
  props: {
    modalConfig: {
      type: Object,
      require: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig?.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
        console.log(formData.value)
      }
    )

    const handleConfirmClick = () => {}
    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>
<style></style>
