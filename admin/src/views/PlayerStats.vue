<template>
  <div>
    <h3 style="margin: 0 0 16px">玩家数据统计</h3>

    <el-table :data="tableData" border stripe>
      <el-table-column prop="openid" label="微信OpenID" />
      <el-table-column prop="maxLevel" label="已通关最高关卡" width="150" />
      <el-table-column prop="updatedAt" label="最后更新时间" width="200" />
    </el-table>

    <el-pagination
      style="margin-top: 16px; justify-content: flex-end"
      v-model:current-page="page"
      v-model:page-size="pageSize"
      :total="total"
      layout="total, prev, pager, next"
      @current-change="loadData"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getPlayerStats } from '../api';

const tableData = ref<any[]>([]);
const page = ref(1);
const pageSize = ref(10);
const total = ref(0);

const loadData = async () => {
  const res: any = await getPlayerStats(page.value, pageSize.value);
  tableData.value = res.data.list;
  total.value = res.data.total;
};

onMounted(() => loadData());
</script>
