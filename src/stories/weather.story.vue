<script setup lang="ts">
import weather from '../components/weather.vue'
const key = import.meta.env.VITE_OPEN_WEATHER_API_KEY
</script>

<template>
  <Story title="Large Weather Component">
    <Variant title="Default">
      <weather lat="50.828" lon="-0.140" :apikey="key" />
    </Variant>
    <Variant title="Daily Reports">
      <weather :daily="true" lat="50.828" lon="-0.140" :apikey="key" :warning-thresholds="{ min: 0, max: 9 }" />
    </Variant>
  </Story>
</template>
