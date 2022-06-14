import { ref } from 'vue'
import PageModal from '@/components/page-modal'
type CallbackFn = (row?: any) => void

export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }
  const handleEditData = (row: any) => {
    defaultInfo.value = { ...row }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb(row)
  }

  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
