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
      <h2 id="tab" class="mt-8 mb-6 text-xl font-semibold">Tab</h2>
      <div>
        <TabButtonWrapper labeled-by="tab">
          <TabButton
            v-for="(tab, index) in tabInfo"
            :key="index"
            :id="'tab-button-' + tab.tabId"
            :is-active="tab.tabId === currentTab"
            :tab-id="tab.tabId"
            :controls="'tab-panel-' + tab.tabId"
            v-model="currentTab"
            >{{ tab.label }}</TabButton
          >
        </TabButtonWrapper>
        <TabPanel
          :id="'tab-panel-' + currentTab"
          :labeled-by="'tab-button-' + currentTab"
        >
          {{ currentTab }}
        </TabPanel>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TextField from "./components/forms/text-field.vue";
import TabButton from "./components/tabs/tab-button.vue";
import TabButtonWrapper from "./components/tabs/tab-button-wrapper.vue";
import TabPanel from "./components/tabs/tab-panel.vue";

const currentTab = ref("0");

const tabInfo = [
  {
    tabId: "0",
    label: "0",
  },
  {
    tabId: "1",
    label: "1",
  },
  {
    tabId: "2",
    label: "2",
  },
];
</script>

<style lang="scss"></style>
