# has-throw

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Provides a helper to test if Throw occurs in javascript or typescript.

## Features

- [x] Zero dependency.
- [x] Fully compatible with TypeScript.
- [x] Supports both ESM (ES Modules) and CommonJS module systems.
- [x] Works with both synchronous and asynchronous functions.
- [x] Supports both functions and class methods, with or without arguments.
- [x] Sample code tested to work with both jest and vitest.

## Installation

Replace and execute the command according to the package manager you are using.
Here is an example of npm.

```sh
npm install --save-dev has-throw
```

## Examples

> [!NOTE]
> Check the test code in the src directory for details of the usage example.

### hasThrow

#### ES modules

This code is supported by both jest and vitest.

```javascript
import { hasThrow } from 'has-throw';

test('should return true if function throws', () => {
  const fn = () => {
    throw new Error();
  };
  expect(hasThrow(() => fn())).toBeTruthy();
});

test('should return false if function does not throw', () => {
  const fn = () => {};
  expect(hasThrow(() => fn())).toBeFalsy();
});
```

#### CommonJS

```javascript
const { hasThrow } = require('has-throw');

test('should return true if function throws', () => {
  const fn = () => {
    throw new Error();
  };
  expect(hasThrow(() => fn())).toBeTruthy();
});

test('should return false if function does not throw', () => {
  const fn = () => {};
  expect(hasThrow(() => fn())).toBeFalsy();
});
```

### hasAsyncThrow

> [!IMPORTANT]
> Promise is truthy and needs to be resolved and strictly checked with toStrictEqual.

#### ES modules

This code is supported by both jest and vitest.

```javascript
import { hasAsyncThrow } from 'has-throw';

test('should return true if function throws', () => {
  const fn = async () => {
    throw new Error();
  };
  return expect(hasAsyncThrow(async () => await fn())).resolves.toStrictEqual(true);
});

test('should return false if function does not throw', () => {
  const fn = async () => {};
  return expect(hasAsyncThrow(async () => await fn())).resolves.toStrictEqual(false);
});
```

#### CommonJS

```javascript
const { hasAsyncThrow } = require('has-throw');

test('should return true if function throws', () => {
  const fn = async () => {
    throw new Error();
  };
  return expect(hasAsyncThrow(async () => await fn())).resolves.toStrictEqual(true);
});

test('should return false if function does not throw', () => {
  const fn = async () => {};
  return expect(hasAsyncThrow(async () => await fn())).resolves.toStrictEqual(false);
});
```

## License

[MIT](https://github.com/huuyafwww/has-throw/blob/main/LICENSE)
