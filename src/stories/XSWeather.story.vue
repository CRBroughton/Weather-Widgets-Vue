<script setup lang="ts">
import XSWeather from '../components/XSWeather.vue'
const key = import.meta.env.VITE_OPEN_WEATHER_API_KEY
</script>

<template>
  <Story title="Extra Small Weather Component">
    <XSWeather lat="50.828" lon="-0.140" :apikey="key" />
  </Story>
</template>
