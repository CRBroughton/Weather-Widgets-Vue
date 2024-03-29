<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { weatherStore } from '../store'

export interface Props {
  apikey?: string
  lat: string
  lon: string
  imperial?: boolean
  daily?: boolean
  warningThresholds?: {
    min: number
    max: number
  }
  warningColour?: string
  bgColour?: string
}
const props = withDefaults(defineProps<Props>(),
  { warningColour: '#ff6600', bgColour: '#faf9f9' })

const {
  weatherData,
  weatherIconURL,
  weatherIconFirstDay,
  weatherIconSecondDay,
  weatherIconThirdDay,
  fetchWeatherData,
  currentTemperature,
} = weatherStore()

const setWeatherData = async () => {
  if (!props.apikey)
    return
  await fetchWeatherData(props)
  weatherIconURL.value = `http://openweathermap.org/img/wn/${weatherData.value?.current.weather[0].icon}@4x.png`
  weatherIconFirstDay.value = `http://openweathermap.org/img/wn/${weatherData.value?.daily[0].weather[0].icon}@4x.png`
  weatherIconSecondDay.value = `http://openweathermap.org/img/wn/${weatherData.value?.daily[1].weather[0].icon}@4x.png`
  weatherIconThirdDay.value = `http://openweathermap.org/img/wn/${weatherData.value?.daily[2].weather[0].icon}@4x.png`
}

onMounted(async () => {
  await setWeatherData()
})

watch(() => [props.apikey, props.imperial], async () => {
  await setWeatherData()
})

const maxHeight = computed(() => {
  return props.daily ? '20em' : '9em'
})
const currentTemp = computed(() => {
  return weatherData.value?.current.temp
})

const dynamicWarningText = computed(() => {
  if (props.warningThresholds && currentTemp.value) {
    if (currentTemp.value > props.warningThresholds.max)
      return 'High'
    if (currentTemp.value < props.warningThresholds.min)
      return 'Low'
  }
  return undefined
})

const unitType = computed(() => {
  return props.imperial ? 'F' : 'C'
})
</script>

<template>
  <div class="weather-container">
    <div class="weather-location">
      <a class="openWeatherMapLink" href="https://openweathermap.org/">OpenWeatherMap</a>
    </div>
    <div class="weather-information">
      <img class="weather-information-icon" :src="weatherIconURL" alt="Weather icon">
      <div class="weather-nested-information">
        <div class="weather-warning">
          <p class="weather-temperature">
            {{ currentTemperature }}°{{ unitType }}
          </p>
          <div v-if="dynamicWarningText" class="weather-warning-text">
            <p>{{ dynamicWarningText }} Temperature</p>
          </div>
        </div>
        <p>{{ weatherData?.current.weather[0].main }} | {{ weatherData?.current.weather[0].description }}</p>
      </div>
    </div>
    <div v-if="daily" class="future-weather-container">
      <div class="daily-weather">
        <img class="daily-weather-information-icon" :src="weatherIconFirstDay" alt="Weather icon">
        <p>{{ currentTemperature }} °{{ unitType }}</p>
      </div>
      <div class="daily-weather">
        <img class="daily-weather-information-icon" :src="weatherIconSecondDay" alt="Weather icon">
        <p>{{ currentTemperature }} °{{ unitType }}</p>
      </div>
      <div class="daily-weather">
        <img class="daily-weather-information-icon" :src="weatherIconThirdDay" alt="Weather icon">
        <p>{{ currentTemperature }} °{{ unitType }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.weather-container {
    padding: 1em 1.5em;
    background-color: v-bind(bgColour);
    min-width: 24em;
    max-width: 24em;
    max-height: v-bind(maxHeight);
    border-radius: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 5px 2px 8px 0px;
}

.weather-location {
  display: flex;
  justify-content: end;
}

.weather-information {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.weather-information-icon {
  width: 120px;
  height: 120px;
}

.weather-nested-information {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.weather-warning {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}

.weather-temperature {
  font-size: 3em;
  font-weight: 500;
}

.weather-warning-text {
  color: white;
  display: flex;
  background-color: v-bind(warningColour);
  height: 2em;
  padding: 0.2em 0.6em;
  align-items: center;
  border-radius: 15px;
}

.future-weather-container {
  display: flex;
}

.daily-weather {
  display: flex;
  flex-direction: column;
}

.future-weather-container > * {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.daily-weather-information-icon {
  width: 100px;
  height: 100px;
}

.openWeatherMapLink {
  text-decoration: none;
}
</style>
