<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { weatherStore } from '../store'

export interface Props {
  apikey: string
  lat: string
  lon: string
}

const props = defineProps<Props>()
const { weatherData, fetchWeatherData } = weatherStore()
const weatherIconURL = ref('')

onMounted(async () => {
  await fetchWeatherData(props)
  weatherIconURL.value = `http://openweathermap.org/img/wn/${weatherData.value?.current.weather[0].icon}@4x.png`
})
</script>

<template>
  <div class="weather-container">
    <div class="weather-information">
      <img v-if="weatherIconURL" class="weather-information-icon" :src="weatherIconURL" alt="Weather icon">
      <p class="weather-temperature">
        {{ weatherData?.current.temp.toString().slice(0, 2) }}°C
      </p>
    </div>
  </div>
</template>

<style scoped>
p, a {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans Display', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.weather-container {
    padding: 1em 1.5em;
    background-color: hsl(0, 10%, 98%);
    width: 8em;
    height: 8em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    border-radius: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 5px 2px 8px 0px;
}

.weather-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.weather-information-icon {
  width: 100px;
  height: 100px;
}

.weather-temperature {
    font-size: 1.7em;
    font-weight: 500;
}
</style>
