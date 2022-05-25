/* eslint-disable @typescript-eslint/prefer-namespace-keyword */

declare module globalThis {
  function signIn(): Promise<string[]>;
}
