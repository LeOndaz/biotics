import { useEffect } from 'react';
import { AwaitedReturnType } from './types.ts';
import { useDeferredAction } from './useDeferredAction.ts';

export const useDeferredState = <T>(f: () => Promise<T>, deps: unknown[] = [], initialState?: AwaitedReturnType<typeof f>) => {
  /**
   * useState, but from the server
   * */

  const [cb, data, isLoading, error] = useDeferredAction<T>(f, deps, initialState);

  useEffect(() => {
    cb();
  }, [cb]);

  return [data, isLoading, error] as [AwaitedReturnType<typeof f>, boolean, Error | null];
};
