<script setup lang="ts">
import SMWeather from '../components/SMWeather.vue'
const key = import.meta.env.VITE_OPEN_WEATHER_API_KEY
</script>

<template>
  <Story title="Small Weather Component">
    <SMWeather lat="50.828" lon="-0.140" :apikey="key" />
  </Story>
</template>
