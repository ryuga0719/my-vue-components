<template>
  <input
    :class="twMerge(textField({ intent, size, margin, fullWidth, hasError }))"
    :type="type"
    :pattern="pattern"
    :value="modelValue"
    @input="onInput"
  />
  <!-- <input
    :class="[
      { 'bg-red-500': intent === 'primary' },
      { 'bg-green-500': intent === 'secondary' },
      { 'bg-blue-500': intent === 'tertiary' },
      'text-base bg-gray-500',
    ]"
    type="text"
  /> -->
</template>

<script lang="ts">
export const patternVariants = {
  HALF_SIZE_CHAR: "^[0-9A-Za-z]+$", // 半角英数字
  POSTAL_CODE: "\\d{3}-\\d{4}", // 郵便番号
  EMAIL: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$", // メールアドレス
  TEL: "\\d{2,4}-\\d{3,4}-\\d{3,4}", // 電話番号
};
</script>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const textField = cva(
  "outline-0 pl-4 pr-11 text-base bg-color-surface-primary border-color-border-medium-emphasis focus:shadow-sm disabled:bg-color-surface-disabled disabled:text-color-text-disabled",
  {
    variants: {
      intent: {
        primary: "rounded-lg border",
        secondary: "border-b",
        tertiary: "bg-color-surface-tertiary border-b rounded-sm",
      },
      size: {
        lg: "min-h-[48px]",
        md: "min-h-[40px]",
        sm: "min-h-[36px]",
      },
      margin: {
        none: "",
        sm: "mt-2",
        md: "mt-4",
        lg: "mt-6",
        xl: "mt-8",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      hasError: {
        true: "bg-color-surface-caution-light border-color-border-caution",
        false: "",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
      margin: "none",
      hasError: false,
      fullWidth: false,
    },
  }
);

type TextFieldProps = VariantProps<typeof textField>;

interface Props {
  intent?: TextFieldProps["intent"];
  size?: TextFieldProps["size"];
  margin?: TextFieldProps["margin"];
  hasError?: TextFieldProps["hasError"];
  fullWidth?: TextFieldProps["fullWidth"];
  pattern?: string;
  type?: "text" | "email" | "tel";
  modelValue?: string;
}

withDefaults(defineProps<Props>(), {
  intent: "primary",
  size: "lg",
  margin: "none",
  hasError: false,
  fullWidth: true,
  pattern: undefined,
  type: "text",
  modelValue: "",
});

const emits = defineEmits<{ (e: "update:modelValue", value: string): void }>();

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};
</script>

<style scoped lang="scss"></style>
