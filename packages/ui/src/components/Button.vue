<template>
  <div class="flex bg-primary-50 p-5 border m-10 ralf-class">
    <Button label="Primary" />
    <Button
      label="Secondary"
      severity="secondary"
      @click="logEvent('secondary')"
    />
    <Button label="Success" severity="success" />
    <Button label="Info" severity="info" />
    <Button label="Warning" severity="warning" />
    <Button label="Help" severity="help" />
    <Button label="Danger" severity="danger" />
    <Button label="Contrast" severity="contrast" />
    <Button label="Submit" icon="pi pi-check" />
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";

const logEvent = (severity: string) => {
  console.log(`Button with severity ${severity} clicked`);
};
</script>

<style scoped>
.ralf-class {
  border-radius: 50px;
}
</style>
