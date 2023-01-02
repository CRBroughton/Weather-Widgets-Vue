<script setup lang="ts">
import { computed } from 'vue'

interface Props {
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

const maxHeight = computed(() => {
  return props.daily ? '20em' : '9em'
})
const currentTemp = 30

const dynamicWarningText = computed(() => {
  if (props.warningThresholds) {
    if (currentTemp > props.warningThresholds.max)
      return 'High'
    if (currentTemp < props.warningThresholds.min)
      return 'Low'
  }
  return undefined
})
</script>

<template>
  <div class="weather-container">
    <div class="weather-location">
      <p>Brighton</p>
      <a href="https://accuweather.com">Accuweather</a>
    </div>
    <div class="weather-information">
      <img class="weather-information-icon" src="http://openweathermap.org/img/wn/10d@4x.png" alt="Weather icon">
      <div class="weather-nested-information">
        <div class="weather-warning">
          <p class="weather-temperature">
            3°
          </p>
          <div v-if="dynamicWarningText" class="weather-warning-text">
            <p>{{ dynamicWarningText }} Temperature</p>
          </div>
        </div>
        <p>Thundershower | Lightly Polluted</p>
      </div>
    </div>
    <div v-if="daily" class="future-weather-container">
      <div class="daily-weather">
        <img class="daily-weather-information-icon" src="http://openweathermap.org/img/wn/10d@4x.png" alt="Weather icon">
        <p>Mon | 15 °</p>
      </div>
      <div class="daily-weather">
        <img class="daily-weather-information-icon" src="http://openweathermap.org/img/wn/10d@4x.png" alt="Weather icon">
        <p>Tue | 15 °</p>
      </div>
      <div class="daily-weather">
        <img class="daily-weather-information-icon" src="http://openweathermap.org/img/wn/10d@4x.png" alt="Weather icon">
        <p>Wed | 15 °</p>
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
    background-color: v-bind(bgColour);
    max-width: 24em;
    max-height: v-bind(maxHeight);
    border-radius: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 5px 2px 8px 0px;
}

.weather-location {
  display: flex;
  place-items: center;
  justify-content: space-between;
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
}

.weather-warning {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
</style>
