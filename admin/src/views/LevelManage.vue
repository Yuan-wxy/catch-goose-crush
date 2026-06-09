<template>
  <div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 16px">
      <h3 style="margin: 0">关卡管理</h3>
      <el-button type="primary" @click="openDialog()">新增关卡</el-button>
    </div>

    <!-- 关卡列表 -->
    <el-table :data="tableData" border stripe>
      <el-table-column prop="levelNo" label="关卡编号" width="100" />
      <el-table-column prop="itemTypeList" label="食材类型">
        <template #default="{ row }">
          <el-tag v-for="item in row.itemTypeList" :key="item" style="margin-right: 4px">{{ item }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="itemTotal" label="食材总数" width="100" />
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button type="primary" text @click="openDialog(row)">编辑</el-button>
          <el-popconfirm title="确定删除此关卡？" @confirm="handleDelete(row.levelNo)">
            <template #reference>
              <el-button type="danger" text>删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      style="margin-top: 16px; justify-content: flex-end"
      v-model:current-page="page"
      v-model:page-size="pageSize"
      :total="total"
      layout="total, prev, pager, next"
      @current-change="loadData"
    />

    <!-- 新增/编辑弹窗 -->
    <el-dialog v-model="dialogVisible" :title="isEdit ? '编辑关卡' : '新增关卡'" width="500px">
      <el-form ref="formRef" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="关卡编号" prop="levelNo">
          <el-input-number v-model="form.levelNo" :min="1" :disabled="isEdit" />
        </el-form-item>
        <el-form-item label="食材类型" prop="itemTypeList">
          <el-select v-model="form.itemTypeList" multiple placeholder="选择食材类型" style="width: 100%">
            <el-option v-for="item in itemOptions" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="食材总数" prop="itemTotal">
          <el-input-number v-model="form.itemTotal" :min="1" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" :loading="saving" @click="handleSave">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { ElMessage, FormInstance } from 'element-plus';
import { getLevelList, saveLevel, deleteLevel, getItemList } from '../api';

const tableData = ref<any[]>([]);
const page = ref(1);
const pageSize = ref(10);
const total = ref(0);
const itemOptions = ref<string[]>([]);

const dialogVisible = ref(false);
const isEdit = ref(false);
const saving = ref(false);
const formRef = ref<FormInstance>();

const form = reactive({
  levelNo: 1,
  itemTypeList: [] as string[],
  itemTotal: 12,
});

const rules = {
  levelNo: [{ required: true, message: '请输入关卡编号', trigger: 'blur' }],
  itemTypeList: [{ required: true, message: '请选择食材类型', trigger: 'change' }],
  itemTotal: [{ required: true, message: '请输入食材总数', trigger: 'blur' }],
};

const loadData = async () => {
  const res: any = await getLevelList(page.value, pageSize.value);
  tableData.value = res.data.list;
  total.value = res.data.total;
};

const loadItemOptions = async () => {
  const res: any = await getItemList();
  itemOptions.value = res.data.map((item: any) => item.itemKey);
};

const openDialog = (row?: any) => {
  isEdit.value = !!row;
  if (row) {
    form.levelNo = row.levelNo;
    form.itemTypeList = [...row.itemTypeList];
    form.itemTotal = row.itemTotal;
  } else {
    form.levelNo = 1;
    form.itemTypeList = [];
    form.itemTotal = 12;
  }
  dialogVisible.value = true;
};

const handleSave = async () => {
  await formRef.value?.validate();
  saving.value = true;
  try {
    await saveLevel({ ...form });
    ElMessage.success('保存成功');
    dialogVisible.value = false;
    loadData();
  } finally {
    saving.value = false;
  }
};

const handleDelete = async (levelNo: number) => {
  await deleteLevel(levelNo);
  ElMessage.success('删除成功');
  loadData();
};

onMounted(() => {
  loadData();
  loadItemOptions();
});
</script>
