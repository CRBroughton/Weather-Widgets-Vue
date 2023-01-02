<script setup lang="ts">
const props = defineProps<{ daily?: boolean }>()
</script>

<template>
  <div class="weather-container">
    <div class="weather-information">
      <img class="weather-information-icon" src="http://openweathermap.org/img/wn/10d@4x.png" alt="Weather icon">
      <p class="weather-temperature">
        3°
      </p>
      <!-- <div class="weather-nested-information">
        <div class="weather-warning">
          <div class="weather-warning-text">
            High Temperature
          </div>
        </div>
        <p>Thundershower | Lightly Polluted</p>
      </div> -->
    </div>
    <!-- <div v-if="daily" class="future-weather-container">
      <div class="daily-weather">
        <img class="daily-weather-information-icon" src="http://openweathermap.org/img/wn/10d@4x.png" alt="Weather icon">
        <p>15 °</p>
      </div>
      <div class="daily-weather">
        <img class="daily-weather-information-icon" src="http://openweathermap.org/img/wn/10d@4x.png" alt="Weather icon">
        <p>15 °</p>
      </div>
      <div class="daily-weather">
        <img class="daily-weather-information-icon" src="http://openweathermap.org/img/wn/10d@4x.png" alt="Weather icon">
        <p>15 °</p>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

.weather-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.weather-temperature {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.7em;
    font-weight: 500;
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

.weather-information-icon {
  width: 100px;
  height: 100px;
}
</style>
