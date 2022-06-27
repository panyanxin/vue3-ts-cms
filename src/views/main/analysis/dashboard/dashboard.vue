<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <cms-card title="分类商品数量(饼图)"></cms-card>
      </el-col>
      <el-col :span="10">
        <cms-card title="不同城市商品销量"></cms-card>
      </el-col>
      <el-col :span="7">
        <cms-card title="分类商品数量(玫瑰图)"></cms-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <cms-card title="分类商品的销量">
          <PieEchart :pieData="categoryGoodsCount" />
        </cms-card>
      </el-col>
      <el-col :span="12">
        <cms-card title="分类商品的收藏"></cms-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import CmsCard from '@/base-ui/card'
import { PieEchart } from '@/components/page-echart'
// RoseEchart,
// LineEchart,
// BarEchart,
// MapEchart

export default defineComponent({
  name: 'dashboard',
  components: {
    CmsCard,
    PieEchart
  },
  setup() {
    const store = useStore()
    // 请求数据
    store.dispatch('dashboard/getDashboardDataAction')

    // 获取数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    return {
      categoryGoodsCount
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
