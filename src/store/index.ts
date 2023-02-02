import { computed, ref } from 'vue'
import { ApiClient } from '../api/client'
import type { OpenWeatherResponse } from '../api/types'
import type { Props } from '../components/XSWeather.vue'

export const weatherStore = () => {
  const weatherApiClient = new ApiClient()

  const weatherData = ref<OpenWeatherResponse>()
  const weatherIconURL = ref('')
  const weatherIconFirstDay = ref('')
  const weatherIconSecondDay = ref('')
  const weatherIconThirdDay = ref('')

  const fetchWeatherData = async (props: Props) => {
    try {
      const weatherResponse = await weatherApiClient.fetchWeatherData(
        { apikey: props.apikey, lat: props.lat, lon: props.lon, imperial: props.imperial },
      )

      weatherData.value = weatherResponse
    }
    catch (error) {
      console.error(error)
    }
  }

  const currentTemperature = computed(() => {
    const fullTemp = weatherData.value?.current.temp.toString().split('.', 1)
    if (fullTemp !== undefined) {
      const [temperature] = fullTemp
      return temperature
    }
    return undefined
  })

  return {
    weatherData,
    weatherIconURL,
    weatherIconFirstDay,
    weatherIconSecondDay,
    weatherIconThirdDay,
    fetchWeatherData,
    currentTemperature,
  }
}
