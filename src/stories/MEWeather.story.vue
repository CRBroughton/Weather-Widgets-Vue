<script setup lang="ts">
import MEWeather from '../components/MEWeather.vue'
const key = import.meta.env.VITE_OPEN_WEATHER_API_KEY
</script>

<template>
  <Story title="Medium Weather Component">
    <MEWeather lat="50.828" lon="-0.140" :apikey="key" />
  </Story>
</template>
