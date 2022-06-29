export function addPropertyToObject<T extends object, P extends string, V>(obj: T, prop: P, value: V): T & Record<P, V> {
    return {
        ...obj,
        [prop]: value
    } as any
}

const obj = {
    name: "alan"
}

const result = addPropertyToObject(obj, "age", 32)

result.
