import { Platform } from 'expo-modules-core';

declare let global: {
  THREE: any;
  __expo_three_oldWarn: any;
};

it(`defines a global instance of three.js`, () => {
  expect(global.THREE).not.toBeDefined();
  // @ts-ignore
  require('..');
  expect(global.THREE).toBeDefined();
  expect(global.THREE.suppressMetroWarnings).toBeDefined();
  if (Platform.OS === 'web') {
    // @ts-ignore
    expect(global.__expo_three_oldWarn).not.toBeDefined();
  } else {
    expect(global.__expo_three_oldWarn).toBeDefined();
  }
});
