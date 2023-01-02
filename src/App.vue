<script setup lang="ts">
import { MEWeather, SMWeather, XSWeather, weather } from './components'
</script>

<template>
  <div class="demo-container">
    <weather :daily="true" />
    <weather :warning-thresholds="{ min: 10, max: 20 }" />
    <MEWeather />
    <SMWeather />
    <XSWeather />
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
}
</style>
