import { setupTest } from './setupTest';

describe('setupTest function', () => {
  test('that it returns the correct text', () => {
    expect(setupTest()).toEqual('Typescript is setup! Lets go!');
  });
});
