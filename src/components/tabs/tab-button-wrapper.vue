<template>
  <div class="flex" role="tablist" :aria-labelledby="labeledBy || undefined">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  labeledBy?: string;
}

withDefaults(defineProps<Props>(), {
  labeledBy: "",
});
</script>

<style scoped></style>
