<script setup lang="ts">
const props = defineProps<{ daily?: boolean }>()
</script>

<template>
  <div class="weather-container">
    <div class="weather-information">
      <p class="weather-temperature">
        3°
      </p>
      <p>Thundershower</p>
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
.weather-information {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.weather-container {
    padding: 1em 1.5em;
    background-color: hsl(0, 10%, 98%);
    width: 8.4em;
    height: 2em;
    border-radius: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 5px 2px 8px 0px;}

.weather-temperature {
    font-size: 1.3em;
    font-weight: 500;
}
</style>
