import {useCallback, useMemo, useState} from 'react';
import {AwaitedReturnType, TDeferrableAction} from './types.ts';


export const useDeferredAction = <T>(f: TDeferrableAction<T>, deps: unknown[] = [], initialState?: AwaitedReturnType<typeof f>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null | unknown>(null);
  const [data, setData] = useState<Awaited<ReturnType<typeof f>> | undefined>(initialState);

  const callback = useCallback(async (...args: unknown[]) => {
    setIsLoading(true);

    try {
      const data = await f(...args);
      setData(data);
      setIsLoading(false);
    } catch (e: unknown) {
      setError(e);
      setIsLoading(false);
    }
  }, deps);

  return useMemo(() => [
    callback,
    data,
    isLoading,
    error
  ], [callback, isLoading, error, data]) as [(...args: unknown[]) => void, AwaitedReturnType<typeof f>, boolean, Error | null];
};
