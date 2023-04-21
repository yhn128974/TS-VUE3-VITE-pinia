import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";

interface IRootState {
  name: string;
  age: number;
}
// 定义容器名counter
export const useCounterStore = defineStore("counter", () => {
  const state = reactive<IRootState>({
    name: "longyou",
    age: 12,
  });

  const getnameage = computed(() => {
    return `${state.age}+${state.name}`;
  });

  const changeName = (name: string): void => {
    state.name = name;
  };

  return {
    state,
    getnameage,
    changeName,
  };
});
