# ccunits
Convert the human-readable of cryptocurrency number  to minimum units, depending on their decimal fractions.

## Installation

```bash
npm install ccunits
```

## Usage

Format input number by cryptocurrency decimal precision
```js
import { formatted } from 'ccunit';

formatted('0.6789853354', 5) // '0.67898'
```

Convert to minimal unit
```js
import { toMinimal } from 'ccunit';

toMinimal('0.0066752', 18) // '6675200000000000'
```

Convert from minimal unit
```js
import { fromMinimal } from 'ccunit';

toMinimal('100546675200000000', 18) // '0.1005466752'
```

## License

MIT
