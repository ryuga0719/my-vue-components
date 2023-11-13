<template>
  <div class="px-8 min-h-screen">
    <h1 class="my-10 text-3xl font-semibold">コンポーネント集</h1>

    <!-- TextField -->
    <section>
      <h2 class="mt-8 mb-6 text-xl font-semibold">TextField</h2>
      <div class="space-y-4 w-1/2">
        <TextField />
        <TextField intent="secondary" />
        <TextField intent="tertiary" />
      </div>
    </section>

    <!-- Tab -->
    <section>
      <h2 class="mt-8 mb-6 text-xl font-semibold">Tab</h2>
      <div>
        <div class="flex">
          <TabButton
            v-for="(tab, index) in tabInfo"
            :key="index"
            :is-active="tab.tabId === currentTab"
            :tab-id="tab.tabId"
            v-model="currentTab"
            >{{ tab.label }}</TabButton
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TextField from "./components/forms/text-field.vue";
import TabButton from "./components/tabs/tab-button.vue";

const currentTab = ref("1");

const tabInfo = [
  {
    tabId: "1",
    label: "1",
  },
  {
    tabId: "2",
    label: "2",
  },
  {
    tabId: "3",
    label: "3",
  },
];
</script>

<style lang="scss"></style>
