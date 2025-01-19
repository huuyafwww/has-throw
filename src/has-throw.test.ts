import { describe, it, expect } from 'vitest';

import { hasThrow } from './has-throw';

describe('hasThrow for function', () => {
  it('should return true if function throws', () => {
    const fn = () => {
      throw new Error();
    };
    expect(hasThrow(() => fn())).toBeTruthy();
  });

  it('should return false if function does not throw', () => {
    const fn = () => {};
    expect(hasThrow(() => fn)).toBeFalsy();
  });

  it('should return true if function with argument throws', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fn = (arg: number) => {
      throw new Error();
    };
    expect(hasThrow(() => fn(0))).toBeTruthy();
  });

  it('should return false if function with argument does not throw', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fn = (arg: number) => {};
    expect(hasThrow(() => fn(0))).toBeFalsy();
  });
});

describe('hasThrow for class methods', () => {
  class MyTestClass {
    throw() {
      throw new Error();
    }

    noThrow() {}
  }

  it('should return true if method throws', () => {
    const instance = new MyTestClass();
    expect(hasThrow(() => instance.throw())).toBeTruthy();
  });

  it('should return false if method does not throw', () => {
    const instance = new MyTestClass();
    expect(hasThrow(() => instance.noThrow())).toBeFalsy();
  });
});

describe('hasThrow for class methods with arguments', () => {
  class MyTestClass {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    throw(arg: number) {
      throw new Error();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    noThrow(arg: number) {}
  }

  it('should return true if method throws', () => {
    const instance = new MyTestClass();
    expect(hasThrow(() => instance.throw(0))).toBeTruthy();
  });

  it('should return false if method does not throw', () => {
    const instance = new MyTestClass();
    expect(hasThrow(() => instance.noThrow(0))).toBeFalsy();
  });
});
