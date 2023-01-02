<script setup lang="ts">
const props = defineProps<{ daily?: boolean }>()
</script>

<template>
  <div class="weather-container">
    <div class="weather-information">
      <img class="weather-information-icon" src="http://openweathermap.org/img/wn/10d@4x.png" alt="Weather icon">
      <div class="weather-nested-information">
        <div class="weather-warning">
          <p class="weather-temperature">
            3°
          </p>
          <p>Thundershower</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.weather-warning {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
}
.weather-information {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.weather-information-icon {
  width: 80px;
  height: 80px;
}

.weather-container {
    padding: 1em 1.5em;
    background-color: hsl(0, 10%, 98%);
    width: 14em;
    height: 5em;
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
    font-size: 1.7em;
    font-weight: 500;
}
</style>
