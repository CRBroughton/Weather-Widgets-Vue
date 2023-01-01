<script setup lang="ts">
const props = defineProps<{ daily?: boolean }>()
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
          <div class="weather-warning-text">
            High Temperature
          </div>
        </div>
        <p>Thundershower | Lightly Polluted</p>
      </div>
    </div>
    <div v-if="daily" class="future-weather-container">
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
    </div>
  </div>
</template>

<style scoped>
.daily-weather {
  display: flex;
  flex-direction: column;
}
* {
  /* outline: 1px solid red; */
}
.future-weather-container {
  display: flex;
}

.future-weather-container > * {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

p {
  margin: 0;
  padding: 0;
}
.weather-warning-text {
  color: white;
  display: flex;
  background: rgb(255, 102, 0);
  height: 2em;
  padding: 0.2em 0.6em;
  align-items: center;
  border-radius: 15px;
}
.weather-warning {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.weather-nested-information {
  display: flex;
  flex-direction: column;
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

.daily-weather-information-icon {
  width: 100px;
  height: 100px;
}

.weather-location {
  display: flex;
  place-items: center;
  justify-content: space-between;
}
.weather-container {
    padding: 1em 1.5em;
    background-color: hsl(0, 10%, 98%);
    max-width: 24em;
    max-height: 20em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    border-radius: 15px;
    /* border: 1px solid rgba(99, 99, 99, 0.2); */
    box-shadow: rgba(99, 99, 99, 0.2) 5px 2px 8px 0px;}

.weather-temperature {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 3em;
    font-weight: 500;
}
</style>
