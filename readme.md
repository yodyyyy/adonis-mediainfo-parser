# Adonis MediaInfo Parser


## Installation

```js
adonis install adonis-mediainfo-parser
```

## Registering provider

Register the provider inside `start/app.js`

```js
const providers = [
  'adonis-mediainfo-parser/providers/MediaInfoProvider'
]
```


## Use directly
```js
const MediaInfo = use('MediaInfo')
console.log(MediaInfo.get(url))
```


