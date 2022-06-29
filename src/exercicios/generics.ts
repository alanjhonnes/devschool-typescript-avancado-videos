// refatore esses tipos utilizando um tipo genérico



export type Item<T> = {
    valor: T
}

export type ItemTexto = Item<string>

export type ItemNumerico = Item<number>
