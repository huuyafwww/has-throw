import { describe, it, expect } from 'vitest';

import { hasAsyncThrow } from './has-async-throw';

describe('hasThrow for function', () => {
  it('should return true if function throws', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const fn = async () => {
      throw new Error();
    };
    await expect(hasAsyncThrow(async () => await fn())).resolves.toStrictEqual(true);
  });

  it('should return false if function does not throw', async () => {
    const fn = async () => {};
    await expect(hasAsyncThrow(async () => await fn())).resolves.toStrictEqual(false);
  });

  it('should return true if function with argument throws', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await, @typescript-eslint/no-unused-vars
    const fn = async (arg: number) => {
      throw new Error();
    };
    await expect(hasAsyncThrow(async () => await fn(0))).resolves.toStrictEqual(true);
  });

  it('should return false if function with argument does not throw', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fn = async (arg: number) => {};
    await expect(hasAsyncThrow(async () => await fn(0))).resolves.toStrictEqual(false);
  });
});

describe('hasThrow for class methods', () => {
  class MyTestClass {
    // eslint-disable-next-line @typescript-eslint/require-await
    async throw() {
      throw new Error();
    }

    async noThrow() {}
  }

  it('should return true if method throws', async () => {
    const instance = new MyTestClass();
    await expect(hasAsyncThrow(async () => await instance.throw())).resolves.toStrictEqual(true);
  });

  it('should return false if method does not throw', async () => {
    const instance = new MyTestClass();
    await expect(hasAsyncThrow(async () => await instance.noThrow())).resolves.toStrictEqual(false);
  });
});

describe('hasThrow for class methods with arguments', () => {
  class MyTestClass {
    // eslint-disable-next-line @typescript-eslint/require-await, @typescript-eslint/no-unused-vars
    async throw(arg: number) {
      throw new Error();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async noThrow(arg: number) {}
  }

  it('should return true if method throws', async () => {
    const instance = new MyTestClass();
    await expect(hasAsyncThrow(async () => await instance.throw(0))).resolves.toStrictEqual(true);
  });

  it('should return false if method does not throw', async () => {
    const instance = new MyTestClass();
    await expect(hasAsyncThrow(async () => await instance.noThrow(0))).resolves.toStrictEqual(false);
  });
});
