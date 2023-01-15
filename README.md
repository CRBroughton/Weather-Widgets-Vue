# Vue Weather Widgets

A small collection of Weather Widgets; Built with Vue.

## Usage

Supply your OpenWeather API key One call API Key, as well as all required props.

### Standard

<img src="./public/standard.png" alt="standard" width="432"/>


### Standard + Daily prop

<img src="./public/standardplusdaily.png" alt="standard & Daily Prop" width="432"/>

#### Props

```typescript
interface Props {
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
```


### Medium

<img src="./public/medium.png" alt="Medium" width="176"/>

#### Props

```typescript
interface Props {
  apikey?: string
  lat: string
  lon: string
  imperial?: boolean
}
```

### Small

<img src="./public/small.png" alt="Small" width="272"/>

#### Props

```typescript
interface Props {
  apikey?: string
  lat: string
  lon: string
  imperial?: boolean
}
```

### Extra Small

<img src="./public/extrasmall.png" alt="Extra Small" width="182"/>

#### Props

```typescript
interface Props {
  apikey?: string
  lat: string
  lon: string
  imperial?: boolean
}
```