<template>
  <div class="px-8">
    <h1 class="mt-10 mb-6 text-3xl font-semibold">Text Field</h1>
    <div class="grid grid-cols-3 gap-8 mb-6">
      <h2 class="text-2xl font-semibold">Primary</h2>
      <h2 class="text-2xl font-semibold">Secondary</h2>
      <h2 class="text-2xl font-semibold">Tertiary</h2>
    </div>
    <div class="grid grid-cols-3 gap-8">
      <!-- Primary -->
      <div class="space-y-6">
        <div>
          <label for="" class="mb-2 block text-sm">Size Large</label>
          <TextField size="lg" placeholder="text" margin="none" />
        </div>

        <div>
          <label for="" class="mb-2 block text-sm">Size Medium</label>
          <TextField size="md" placeholder="text" />
        </div>

        <div>
          <label for="" class="mb-2 block text-sm">Size Small</label>
          <TextField size="sm" placeholder="text" />
        </div>

        <div>
          <label for="" class="mb-2 block text-sm">Error</label>
          <TextField size="lg" :has-error="true" placeholder="text" />
        </div>

        <div>
          <label for="" class="mb-2 block text-sm">Disabled</label>
          <TextField size="lg" placeholder="text" disabled value="hogehoge" />
        </div>
      </div>

      <!-- Secondary -->
      <div class="space-y-6">
        <div>
          <label for="" class="mb-2 block text-sm">Size Large</label>
          <TextField intent="secondary" size="lg" placeholder="text" />
        </div>

        <div>
          <label for="" class="mb-2 block text-sm">Size Medium</label>
          <TextField intent="secondary" size="md" placeholder="text" />
        </div>

        <div>
          <label for="" class="mb-2 block text-sm">Size Small</label>
          <TextField intent="secondary" size="sm" placeholder="text" />
        </div>

        <div>
          <label for="" class="mb-2 block text-sm">Error</label>
          <TextField
            intent="secondary"
            size="lg"
            :has-error="true"
            placeholder="text"
          />
        </div>

        <div>
          <label for="" class="mb-2 block text-sm">Disabled</label>
          <TextField
            intent="secondary"
            size="lg"
            placeholder="text"
            disabled
            value="hogehoge"
          />
        </div>
      </div>

      <!-- Tertiary -->
      <div class="space-y-6">
        <div>
          <label for="" class="mb-2 block text-sm">Size Large</label>
          <TextField intent="tertiary" size="lg" placeholder="text" />
        </div>

        <div>
          <label for="" class="mb-2 block text-sm">Size Medium</label>
          <TextField intent="tertiary" size="md" placeholder="text" />
        </div>

        <div>
          <label for="" class="mb-2 block text-sm">Size Small</label>
          <TextField intent="tertiary" size="sm" placeholder="text" />
        </div>

        <div>
          <label for="" class="mb-2 block text-sm">Error</label>
          <TextField
            intent="tertiary"
            size="lg"
            :has-error="true"
            placeholder="text"
          />
        </div>

        <div>
          <label for="" class="mb-2 block text-sm">Disabled</label>
          <TextField
            intent="tertiary"
            size="lg"
            placeholder="text"
            disabled
            value="hogehoge"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextField from "./components/forms/TextField.vue";
</script>

<style lang="scss"></style>
