<script setup lang="ts">
import weather from '../components/weather.vue'
</script>

<template>
  <Story title="Large Weather Component">
    <Variant title="Default">
      <weather lat="50.828" lon="-0.140" />
    </Variant>
    <Variant title="Daily Reports">
      <weather :daily="true" lat="50.828" lon="-0.140" :warning-thresholds="{ min: 11, max: 9 }" />
    </Variant>
  </Story>
</template>
