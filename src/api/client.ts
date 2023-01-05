import type { OpenWeatherResponse } from './types'
import { httpClient } from './wrapper'

interface Params {
  apikey?: string
  lat: string
  lon: string
}

export class ApiClient {
  async fetchWeatherData(params: Params) {
    return httpClient.get<OpenWeatherResponse>(
      {
        url: `https://api.openweathermap.org/data/3.0/onecall?lat=${params.lat}8&lon=${params.lon}&units=metric&appid=${params.apikey}`,
      },
    )
  }
}
