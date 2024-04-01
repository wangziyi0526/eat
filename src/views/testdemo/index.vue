<script setup lang="ts">
import { ref, toRefs, reactive, computed, watch, onMounted } from "vue";
import {
  login,
  addGirl,
  getGirl,
  addUser,
  getUserList
} from "../../axios/login";
const message = ref<string>("hello world");

const loginForm = reactive({
  username: "111",
  password: "222"
});
const Login = async () => {
  const data = await login(loginForm);
  console.log(data);
};
Login();
const girlInfo = reactive({
  id: 10,
  name: "王老七",
  age: 11
});
const AddGirl = async () => {
  const data = await addGirl(girlInfo);
  console.log(data);
};
AddGirl();

const GetGirl = async () => {
  let id: number = 1;
  const data = await getGirl(id);
  console.log(data);
};
GetGirl();

const info = reactive({
  name: "",
  pwd: ""
});
const createUser = async () => {
  const data = await addUser(info);
};
let tableData: any = ref([]);
// let tableData: any = reactive([]);

let getList = async () => {
  let d = await getUserList();
  tableData.value = d.data;
  // tableData = d.data;
};
getList();
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

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" />
      <el-table-column prop="name" label="name" />
      <el-table-column prop="pwd" label="pwd" />
    </el-table>
  </div>
</template>

<style scoped lang="sass"></style>
