<script setup lang="ts">
import { ref, toRefs, reactive, computed, watch, onMounted } from "vue";
import {
  login,
  addGirl,
  getGirl,
  addUser,
  getUserList,
  updateUserInfo,
  deleteUser
} from "../../axios/login";

import { ElMessage, ElMessageBox } from "element-plus";

const message = ref<string>("hello world");

const info = reactive({
  name: "",
  pwd: ""
});

const title = ref("");
// 新增
const addUserOpen = () => {
  title.value = "新增";
  dialogFormVisible.value = true;
};

// 查list
let tableData: any = reactive({
  list: []
});
let getList = async () => {
  let d = await getUserList();
  tableData.list = d.data.data;
};
getList();
// 删除
const deleteClick = data => {
  console.log(data);
  ElMessageBox.confirm("确定删除吗？", "提示", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    type: "warning"
  })
    .then(() => {
      deleteUser(data).then(res => {
        ElMessage({
          type: "success",
          message: "Delete completed"
        });
        getList();
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Delete canceled"
      });
    });
};
// 编辑弹窗
let dialogFormVisible = ref(false);
const formLabelWidth = "140px";

let form = reactive({
  name: "",
  pwd: ""
});
const editItem = data => {
  title.value = "编辑";
  dialogFormVisible.value = true;
  form = data;
};
const updateItem = async () => {
  if (title.value === "新增") {
    await addUser(form);
  } else if (title.value === "编辑") {
    await updateUserInfo(form);
  }
  dialogFormVisible.value = false;
  resetFields();
  getList();
};

// 重置表单项
const resetFields = () => {
  form.name = "";
  form.pwd = "";
};
</script>
<template>
  <div>
    <div class="testDemo">{{ message }}</div>
    <el-input
      v-model="info.name"
      style="width: 240px"
      placeholder="Please input"
    />
    <el-input
      v-model="info.pwd"
      style="width: 240px"
      placeholder="Please input"
      password
    />
    <el-button @click="createUser">点击</el-button>
    <el-button type="primary" @click="addUserOpen">新增</el-button>
    <el-table :data="tableData.list" style="width: 100%">
      <el-table-column prop="id" label="id" />
      <el-table-column prop="name" label="name" />
      <el-table-column prop="pwd" label="pwd" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="editItem(scope.row)"
            >编辑</el-button
          >
          <el-button
            link
            type="primary"
            size="small"
            @click="deleteClick(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogFormVisible" :title="title" width="500" draggable>
      <el-form :model="form" @resetFields="resetFields">
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model.trim="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Zones" :label-width="formLabelWidth">
          <el-input v-model.trim="form.pwd" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="updateItem"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="sass"></style>
