<script setup lang="ts">
import { MEWeather, SMWeather, XSWeather, weather } from './components'
</script>

<template>
  <div class="demo-container">
    <weather />
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
