<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { weatherStore } from '../store'

export interface Props {
  apikey?: string
  lat: string
  lon: string
}

const props = defineProps<Props>()
const { weatherData, fetchWeatherData } = weatherStore()
const weatherIconURL = ref('')

const setWeatherData = async () => {
  if (!props.apikey)
    return
  await fetchWeatherData(props)
  weatherIconURL.value = `http://openweathermap.org/img/wn/${weatherData.value?.current.weather[0].icon}@4x.png`
}

onMounted(async () => {
  await setWeatherData()
})

watch(() => props.apikey, async () => {
  await setWeatherData()
})
</script>

<template>
  <div class="weather-container">
    <div class="weather-information">
      <img class="weather-information-icon" :src="weatherIconURL" alt="Weather icon">
      <div class="weather-warning">
        <p class="weather-temperature">
          {{ weatherData?.current.temp.toString().slice(0, 2) }}°C
        </p>
        <p>{{ weatherData?.current.weather[0].description }}</p>
      </div>
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
    height: 5em;
    border-radius: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 5px 2px 8px 0px;
}

.weather-information {
  display: flex;
  align-items: center;
}

.weather-information-icon {
  width: 80px;
  height: 80px;
}

.weather-warning {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
}

.weather-temperature {
    font-size: 1.7em;
    font-weight: 500;
}
</style>
