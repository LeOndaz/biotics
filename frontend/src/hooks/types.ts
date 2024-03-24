
export type AwaitedReturnType<T extends (...args: unknown[]) => unknown> = Awaited<ReturnType<T>>;
export type TDeferrableAction<T> = (...args: unknown[]) => Promise<T>;