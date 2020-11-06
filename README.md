# style-inject-package

[![NPM version](https://img.shields.io/npm/v/style-inject-package.svg?style=flat)](https://npmjs.com/package/style-inject-package) [![NPM downloads](https://img.shields.io/npm/dm/style-inject-package.svg?style=flat)](https://npmjs.com/package/style-inject-package)

Inject style tag to document head by package.

## Installation

```bash
npm install style-inject-package
```

## Example

```javascript
import styleInject from 'style-inject-package';

postcss({
    inject: styleInject('name-package')
});
```

## License

MIT &copy; [smilexx](https://github.com/smilexx)

MIT &copy; [EGOIST](https://github.com/egoist)
