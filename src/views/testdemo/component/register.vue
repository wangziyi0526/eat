<template>
  <div>
    <p>Result: {{ result }}</p>
    <button @click="add">Add</button>
  </div>
</template>
<script setup lang="ts">
import useAddition from "../hooks/register.ts";
const { result, add } = useAddition();
</script>
<style lang="scss" scoped></style>
