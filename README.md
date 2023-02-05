# Vue Weather Widgets

A small collection of Weather Widgets; Built with Vue.

## Usage

Supply your OpenWeather API key One call API Key, as well as all required props.

### Standard

<img src="./public/standard.png" alt="standard"/>


### Standard + Daily prop

<img src="./public/standardplusdaily.png" alt="standard & Daily Prop"/>

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

<img src="./public/small.png" alt="Small"/>

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

<img src="./public/extrasmall.png" alt="Extra Small"/>

#### Props

```typescript
interface Props {
  apikey?: string
  lat: string
  lon: string
  imperial?: boolean
}
```