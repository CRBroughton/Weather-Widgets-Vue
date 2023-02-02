<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { weatherStore } from '../store'

export interface Props {
  apikey?: string
  lat: string
  lon: string
  imperial?: boolean
}

const props = defineProps<Props>()
const {
  weatherData,
  weatherIconURL,
  fetchWeatherData,
  currentTemperature,
} = weatherStore()

const setWeatherData = async () => {
  if (!props.apikey)
    return
  await fetchWeatherData(props)
  weatherIconURL.value = `http://openweathermap.org/img/wn/${weatherData.value?.current.weather[0].icon}@4x.png`
}

onMounted(async () => {
  await setWeatherData()
})

watch(() => [props.apikey, props.imperial], async () => {
  await setWeatherData()
})

const unitType = computed(() => {
  return props.imperial ? 'F' : 'C'
})
</script>

<template>
  <div class="weather-container">
    <div class="weather-information">
      <img class="weather-information-icon" :src="weatherIconURL" alt="Weather icon">
      <div class="weather-warning">
        <p class="weather-temperature">
          {{ currentTemperature }}°{{ unitType }}
        </p>
        <p>{{ weatherData?.current.weather[0].description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
