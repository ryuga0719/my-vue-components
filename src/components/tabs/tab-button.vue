<template>
  <button
    :class="twMerge(tabButtonStyles({ intent, isActive }))"
    role="tab"
    type="button"
    :aria-selected="isActive || false"
    :aria-controls="controls"
    @click="onTabChanged"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const tabButtonStyles = cva("w-full px-4 pt-4", {
  variants: {
    intent: {
      primary: "border-b border-gray-600 hover:bg-gray-200 transition",
    },
    isActive: {
      true: "border-b-4 border-red-500 pb-[13px]",
      false: "pb-4",
    },
  },
  defaultVariants: {
    intent: "primary",
    isActive: false,
  },
});

type TabButtonProps = VariantProps<typeof tabButtonStyles>;

interface Props {
  intent?: TabButtonProps["intent"];
  isActive?: TabButtonProps["isActive"];
  tabId: string;
  controls: string;
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  intent: "primary",
  isActive: false,
  tabId: "",
  controls: "",
  modelValue: "",
});

const emits = defineEmits<{
  (e: "update:modelValue", targetTabId: string): void;
}>();

const onTabChanged = () => {
  emits("update:modelValue", props.tabId);
};
</script>

<style scoped></style>
