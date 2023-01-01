<script setup lang="ts">
import weather from '../components/weather.vue'
</script>

<template>
  <Story title="Large Weather Component">
    <Variant title="Default">
      <weather />
    </Variant>
    <Variant title="Daily Reports">
      <weather :daily="true" />
    </Variant>
  </Story>
</template>

<style scoped>

</style>
