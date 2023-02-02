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
  fetchWeatherData,
  currentTemperature,
} = weatherStore()

onMounted(async () => {
  if (!props.apikey)
    return
  fetchWeatherData(props)
})

watch(() => [props.apikey, props.imperial], async () => {
  await fetchWeatherData(props)
})
const unitType = computed(() => {
  return props.imperial ? 'F' : 'C'
})
</script>

<template>
  <div class="weather-container">
    <div class="weather-information">
      <p class="weather-temperature">
        {{ currentTemperature }}°{{ unitType }}
      </p>
      <p>{{ weatherData?.current.weather[0].description }}</p>
    </div>
  </div>
</template>

<style scoped>
.weather-information {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.weather-container {
    padding: 1em 1.5em;
    background-color: hsl(0, 10%, 98%);
    height: 2em;
    border-radius: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 5px 2px 8px 0px;}

.weather-temperature {
    font-size: 1.3em;
    font-weight: 500;
}
</style>
