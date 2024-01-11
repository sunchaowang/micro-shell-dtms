// declare global {
// declare global {
export type Recordable<T = any> = Record<string, T>;

export interface ViteEnv {
  BASE_URL: string;
  VITE_APP_PORT: number;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
}
// }
export type Recordable<T = any> = Record<string, T>;

export interface ViteEnv {
  BASE_URL: string;
  VITE_APP_PORT: number;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
}

declare const __APP_INFO__: {
  pkg: {
    name: string;
    version: string;
    dependencies: Recordable<string>;
    devDependencies: Recordable<string>;
  };
  lastBuildTime: string;
};
// declare interface Window {
//   // Global vue app instance
//   __APP__: App<Element>;
// }

export type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};

declare type Nullable<T> = T | null;
declare type NonNullable<T> = T extends null | undefined ? never : T;
declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T;
};
declare type Indexable<T = any> = {
  [key: string]: T;
};
declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
declare type TimeoutHandle = ReturnType<typeof setTimeout>;
declare type IntervalHandle = ReturnType<typeof setInterval>;

declare interface ChangeEvent extends Event {
  target: HTMLInputElement;
}

declare interface WheelEvent {
  path?: EventTarget[];
}

// interface ImportMetaEnv extends ViteEnv {
//   __: unknown;
// }

declare function parseInt(s: string | number, radix?: number): number;

declare function parseFloat(string: string | number): number;
// }

declare module 'vue' {
  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }
  interface ImportMeta {
    env: ImportMetaEnv;
  }
}

export {};
