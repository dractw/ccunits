# ccunits
Convert the human-readable of cryptocurrency number  to minimum units, depending on their decimal fractions.

## Installation

```bash
npm i ccunits
```

## Usage
```js
const ccunits = require('ccunits');
OR
import { toMinimal, fromMinimal, formatted } from 'ccunits'
```

Format input number by cryptocurrency decimal precision
```js
const formatted = require('ccunits').formatted;
OR
import { formatted } from 'ccunits'

formatted('0.6789853354', 5) // '0.67898'
```

Convert to minimal unit
```js
const toMinimal = require('ccunits').toMinimal
OR
import { toMinimal } from 'ccunits'

toMinimal('0.0066752', 18) // '6675200000000000'
```

Convert from minimal unit
```js
const fromMinimal = require('ccunits').fromMinimal
OR
import { fromMinimal } from 'ccunits'

fromMinimal('100546675200000000', 18) // '0.1005466752'
```

## License

MIT
