# JI18N
Internationalize JSON Objects. This software helps you to convert keys inside JSON Schema. It is util if you have, in an example, multi-language support inside JSON. See above for more examples.

Input:
```json
{
    "quotes": [{
        "$": {
            "en": "This is an english and popular quote",
            "pt": "Esta é uma frase portuguesa e popular"
        }
    }]
}
```

API:
```javascript
'use strict'
const ji18n = require('ji18n');

const input = {
    "quotes": [{
        "$": {
            "en": "This is an english and popular quote",
            "pt": "Esta é uma frase portuguesa e popular"
        }
    }]
}

ji18n(input, 'pt' /*, '$ or another key'*/);
// 'input' now is { quotes: ['Esta é uma frase portuguesa e popular'] }
```
