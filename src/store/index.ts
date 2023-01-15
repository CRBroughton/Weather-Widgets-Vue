import { ref } from 'vue'
import { ApiClient } from '../api/client'
import type { OpenWeatherResponse } from '../api/types'
import type { Props } from '../components/XSWeather.vue'

export const weatherStore = () => {
  const weatherApiClient = new ApiClient()

  const weatherData = ref<OpenWeatherResponse>()

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

  return { weatherData, fetchWeatherData }
}
