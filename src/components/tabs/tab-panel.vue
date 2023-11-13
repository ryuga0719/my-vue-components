<template>
  <div role="tabpanel" tabindex="0" :aria-labelledby="labeledBy">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  labeledBy: string;
}

withDefaults(defineProps<Props>(), {
  labeledBy: "",
});
</script>

<style scoped></style>
