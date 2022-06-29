export type UnpackPromise<T> =
    T extends Promise<infer A> ? A : never;

export type PromiseStr = number;

export type Unpacked = UnpackPromise<PromiseStr>;
export type Unpacked2 = UnpackPromise<number>;


export function processText<T extends string | null>(text: T):
    T extends string
    ? string
    : null {
    if (text === null) {
        return null as any;
    }
    return text as any;
}

export const x = processText(null);
