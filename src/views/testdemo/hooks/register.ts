import { ref, onMounted, onBeforeUnmount } from "vue";

const useAddition = (initialValueA = 0, initialValueB = 0) => {
  // 创建响应式的数据
  const result = ref(initialValueA + initialValueB);

  // 定义加法函数
  const add = () => {
    result.value = result.value + 1;
  };

  // 模拟生命周期：组件挂载时
  onMounted(() => {
    console.log("Component is mounted!");
  });

  // 模拟生命周期：组件即将卸载时
  onBeforeUnmount(() => {
    console.log("Component is about to be unmounted!");
  });

  // 返回响应式的数据和加法函数
  return {
    result,
    add
  };
};

export default useAddition;
