<template>
  <div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 16px">
      <h3 style="margin: 0">食材配置</h3>
      <el-button type="primary" @click="openDialog()">新增食材</el-button>
    </div>

    <el-table :data="tableData" border stripe>
      <el-table-column prop="itemKey" label="食材ID" />
      <el-table-column prop="resPath" label="模型资源路径" />
      <el-table-column label="操作" width="200">
        <template #default="{ row }">
          <el-button type="primary" text @click="openDialog(row)">编辑</el-button>
          <el-popconfirm title="确定删除此食材？" @confirm="handleDelete(row.itemKey)">
            <template #reference>
              <el-button type="danger" text>删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增/编辑弹窗 -->
    <el-dialog v-model="dialogVisible" :title="isEdit ? '编辑食材' : '新增食材'" width="500px">
      <el-form ref="formRef" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="食材ID" prop="itemKey">
          <el-input v-model="form.itemKey" :disabled="isEdit" placeholder="如 apple, banana" />
        </el-form-item>
        <el-form-item label="资源路径" prop="resPath">
          <el-input v-model="form.resPath" placeholder="如 /models/apple.glb" />
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
import { getItemList, saveItem, deleteItem } from '../api';

const tableData = ref<any[]>([]);
const dialogVisible = ref(false);
const isEdit = ref(false);
const saving = ref(false);
const formRef = ref<FormInstance>();

const form = reactive({ itemKey: '', resPath: '' });
const rules = {
  itemKey: [{ required: true, message: '请输入食材ID', trigger: 'blur' }],
  resPath: [{ required: true, message: '请输入资源路径', trigger: 'blur' }],
};

const loadData = async () => {
  const res: any = await getItemList();
  tableData.value = res.data;
};

const openDialog = (row?: any) => {
  isEdit.value = !!row;
  if (row) {
    form.itemKey = row.itemKey;
    form.resPath = row.resPath;
  } else {
    form.itemKey = '';
    form.resPath = '';
  }
  dialogVisible.value = true;
};

const handleSave = async () => {
  await formRef.value?.validate();
  saving.value = true;
  try {
    await saveItem({ ...form });
    ElMessage.success('保存成功');
    dialogVisible.value = false;
    loadData();
  } finally {
    saving.value = false;
  }
};

const handleDelete = async (itemKey: string) => {
  await deleteItem(itemKey);
  ElMessage.success('删除成功');
  loadData();
};

onMounted(() => loadData());
</script>
