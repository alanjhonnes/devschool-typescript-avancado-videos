// Faça uma função que mergeie dois objetos, retornando um tipo que é a interssecção dos dois tipos dos objetos.
// Dica - utilize type-parameters para receber os tipos dos objetos dinâmicamente e spread ou Object.assign para a fazer o merge
// na implementação da função.
export function mergeObjects<O1, O2>(obj: O1, obj2: O2): O1 & O2 {
    return {
        ...obj,
        ...obj2,
    }
}

const obj1 = {
    name: "alan"
};

const obj2 = {
    age: 32
}

const result = mergeObjects(obj1, obj2)
