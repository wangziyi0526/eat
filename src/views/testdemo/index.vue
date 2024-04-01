<script setup lang="ts">
import { ref, toRefs, reactive, computed, watch, onMounted } from "vue";
import { login, addGirl, getGirl, addUser } from "../../axios/login";
import { id } from "element-plus/es/locale/index.mjs";
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
  console.log(data);
};
</script>
<template>
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
</template>

<style scoped lang="sass"></style>
